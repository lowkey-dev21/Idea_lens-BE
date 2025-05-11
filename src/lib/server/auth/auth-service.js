import { adjustDate } from "$lib/utils/date";
import { comparePasswordHash, hashPassword } from "$lib/utils/server/crypto";
import { prisma } from "$lib/utils/server/prisma";
import { endpointResponse, methodResponse } from "$lib/utils/server/response-handler";
import { validatePassword } from "$lib/utils/server/validators";
import { isEmail } from "multiform-validator";
import { sendVerificationEmail } from "./email-verification-service";
import { getUserCountryCodeAndLanguage } from "$lib/utils/geolocation";

/**
 * Registers a user with email and password.
 * 
 * @param {Object} options - The registration options.
 * @param {string} options.firstName - The user's first name.
 * @param {string} options.lastName - The user's last name.
 * @param {string} options.email - The user's email address.
 * @param {string} options.password - The user's password.
 * @returns {Promise<Response>} The created user object, including linked OAuth accounts.
 */
async function registerUserWithEmailAndPassword({ firstName, lastName, email, password }) {
    if (!email || !password) {
        return endpointResponse(false, 400, 'Email and password are required to register a user.');
    }

    if (!validatePassword(password).status) {
        return endpointResponse(false, 400, validatePassword(password).message);
    }

    if (await doesUserExist(email)) {
        return endpointResponse(false, 400, 'User already exists.');
    }

    if (!firstName || !lastName) {
        return endpointResponse(false, 400, 'First name and last name are required to register a user.');
    }

    const createdUser = await create_user({ email, password, firstName, lastName });

    return endpointResponse(createdUser.status, createdUser.code, createdUser.message, createdUser.data);
}


/**
 * Creates a new user in the database.
 * Handles creation with email/password, Google OAuth, or GitHub OAuth.
 *
 * @param {object} params - The user creation parameters.
 * @param {string} params.email - The user's email address.
 * @param {string} [params.password] - The user's password (if signing up with email/password).
 * @param {string} [params.googleId] - The user's Google ID (if signing up with Google).
 * @param {string} [params.firstName] - The user's first name.
 * @param {string} [params.lastName] - The user's last name.
 * @param {string} [params.githubId] - The user's GitHub ID (if signing up with GitHub).
 * @param {string} [params.profilePicture] - URL to the user's profile picture/avatar.
 * @returns {Promise<{ status: boolean, message: string, code: number, data?: Object }>} The created user object, including linked OAuth accounts.
 * @throws {Error} If email is not provided, or if user/OAuth account already exists, or on database error.
 */
async function create_user({
    email,
    password,
    googleId,
    firstName,
    lastName,
    githubId,
    profilePicture,
  }) {
    if (!email) {
      throw new Error('Email is required to create a user.');
    }
  
    // 1. Check if a user with this email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      throw new Error(`User with email ${email} already exists.`);
    }
  
    // 2. Check if an OAuth account with the given googleId or githubId already exists
    if (googleId) {
      const existingGoogleAccount = await prisma.oauthAccount.findUnique({
        where: {
          provider_providerUserId: {
            provider: 'GOOGLE',
            providerUserId: googleId,
          },
        },
      });
      if (existingGoogleAccount) {
        throw new Error('An account with this Google ID already exists. It might be linked to a different email.');
      }
    }
  
    if (githubId) {
      const existingGithubAccount = await prisma.oauthAccount.findUnique({
        where: {
          provider_providerUserId: {
            provider: 'GITHUB',
            providerUserId: githubId,
          },
        },
      });
      if (existingGithubAccount) {
        throw new Error('An account with this GitHub ID already exists. It might be linked to a different email.');
      }
    }
  
    // 3. Prepare user data for creation
    const userData = {
      email,
      firstName: firstName || null,
      lastName: lastName || null,
      avatarUrl: profilePicture || null,
      hashedPassword: password ? await hashPassword(password, 10) : null,
      emailVerified: null, // Default to not verified
    };
  
    // If signing up via OAuth, assume the email provided is from the OAuth provider and is verified.
    if (googleId || githubId) {
      userData.emailVerified = new Date();
    }
  
    // 4. Prepare OAuth accounts data for nested creation if IDs are provided
    const oauthAccountsToCreate = [];
    if (googleId) {
      oauthAccountsToCreate.push({
        provider: 'GOOGLE',
        providerUserId: googleId,
        // Note: accessToken, refreshToken, expiresAt are not part of this function's signature.
        // They would typically be set during a full OAuth flow.
      });
    }
    if (githubId) {
      oauthAccountsToCreate.push({
        provider: 'GITHUB',
        providerUserId: githubId,
      });
    }
  
    if (oauthAccountsToCreate.length > 0) {
      userData.oauthAccounts = {
        create: oauthAccountsToCreate,
      };
    }
  
    // 5. Create the user and linked OAuth accounts (if any)
    // Prisma's nested writes ensure this is atomic.
    try {
      const newUser = await prisma.user.create({
        data: userData,
        select: {
          id: true, // Include linked OAuth accounts in the returned user object
          firstName: true,
          email: true,
        },
      });
      await sendVerificationEmail({ email: newUser.email, firstName: newUser.firstName });
      return methodResponse(true, 200, 'User created successfully. Please verify your email to continue.', {
        email: newUser.email,
        firstName: newUser.firstName,
      });
    } catch (error) {
      // Log the error for debugging
      console.error('Error creating user in database:', error);
  
      // Handle Prisma-specific unique constraint violation error more gracefully
      // (though prior checks should catch most of these)
      if (error.code === 'P2002' && error.meta && error.meta.target) {
          const targetFields = Array.isArray(error.meta.target) ? error.meta.target.join(', ') : error.meta.target;
          throw new Error(`A user with conflicting details already exists (field: ${targetFields}). This might be an email or OAuth ID conflict not caught by initial checks.`);
      }
      // General error
      throw new Error('Could not create user due to a database error.');
    }
    // Note: If prisma client is instantiated globally, prisma.$disconnect() is usually handled
    // at application shutdown, not after every operation.
  }

  /**
   * Checks if a user exists in the database by email.
   * 
   * @param {string} email - The email address of the user to check.
   * @returns {Promise<boolean>} True if the user exists, false otherwise.
   */
  async function doesUserExist(email) {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user ? true : false;
  }

  /**
 * User login handler supporting multiple authentication methods
 * @param {Object} params - Login parameters
 * @param {string} [params.email] - User email
 * @param {string} [params.password] - User password
 * @param {string} [params.googleId] - Google OAuth ID
 * @param {string} [params.githubId] - GitHub OAuth ID
 * @param {string} [params.ipAddress] - IP address of the user
 * @param {string} [params.userAgent] - User agent of the user
 * @returns {Promise<{ status: boolean, message: string, code: number, data?: Object }>} Response object with success status, code, message and data
 */
async function login_user({ email, password, googleId, githubId, ipAddress, userAgent }) {
  try {
    // Validate inputs - at least one auth method required
    if (!email && !password && !googleId && !githubId) {
      return methodResponse(false, 401, 'Invalid login credentials.');
    }
    
    if (email && !password && !googleId && !githubId) {
      return methodResponse(false, 401, 'Invalid login credentials.');
    }

    // Google OAuth login
    if (email && googleId) {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          emailVerified: true,
          oauthAccounts: {
            where: {
              provider: 'GOOGLE',
              providerUserId: googleId,
            }
          },
        },
      });

      if (!user) {
        return methodResponse(false, 404, 'User not found.');
      }

      // Verify the OAuth account is connected
      const selectedOauthAccount = user.oauthAccounts.find(
        account => account.provider === 'GOOGLE' && account.providerUserId === googleId
      );
      
      if (!selectedOauthAccount) {
        return methodResponse(false, 401, 'Google account not linked to this user.');
      }

      // Auto-verify email if not yet verified
      if (!user.emailVerified) {
        await prisma.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() },
        });
      }

      return await create_session_and_respond(user.id, ipAddress, userAgent);
    }

    // GitHub OAuth login
    if (email && githubId) {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          emailVerified: true,
          oauthAccounts: {
            where: {
              provider: 'GITHUB',
              providerUserId: githubId,
            }
          },
        },
      });

      if (!user) {
        return methodResponse(false, 404, 'User not found.');
      }

      // Verify the OAuth account is connected
      const selectedOauthAccount = user.oauthAccounts.find(
        account => account.provider === 'GITHUB' && account.providerUserId === githubId
      );
      
      if (!selectedOauthAccount) {
        return methodResponse(false, 401, 'GitHub account not linked to this user.');
      }

      // Auto-verify email if not yet verified
      if (!user.emailVerified) {
        await prisma.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() },
        });
      }

      return await create_session_and_respond(user.id, ipAddress, userAgent);
    }

    // Email/password login
    if (email && password) {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          emailVerified: true,
          hashedPassword: true,
        },
      });

      if (!user) {
        return methodResponse(false, 404, 'User not found.');
      }

      if (!user.hashedPassword) {
        return methodResponse(false, 401, 'This account does not use password authentication.');
      }

      const isPasswordValid = await comparePasswordHash(password, user.hashedPassword);
      if (!isPasswordValid) {
        return methodResponse(false, 401, 'Invalid credentials.');
      }

      return await create_session_and_respond(user.id, ipAddress, userAgent);
    }

    // If we reach here, the provided combination of credentials is invalid
    return methodResponse(false, 400, 'Invalid authentication method combination.');
    
  } catch (error) {
    console.error('Login error:', error);
    return methodResponse(false, 500, 'An error occurred during login. Please try again.');
  }
}

/**
 * Helper function to create a session and return a successful login response
 * @param {string} userId - The user ID to create a session for
 * @param {string} ipAddress - The IP address of the user
 * @param {string} userAgent - The user agent of the user
 * @returns {Promise<{ status: boolean, message: string, code: number, data?: Object }>} Response object with session token
 */
async function create_session_and_respond(userId, ipAddress, userAgent) {
  let location = null;
  try {
    location = (await getUserCountryCodeAndLanguage(ipAddress)).country?.code;
  } catch (error) {
    console.error('Error getting user location:', error);
  }
  const session = await prisma.session.create({
    data: {
      userId,
      ipAddress,
      userAgent,
      location,
      expiresAt: adjustDate([{ unit: "month", value: 1 }]),
    },
    select: {
      sessionToken: true,
    },
  });

  return methodResponse(true, 200, 'User logged in successfully.', {
    sessionToken: session.sessionToken,
  });
}

/**
 * Login a user with email and password.
 * @param {Object} params - Login parameters
 * @param {string} params.email - User email
 * @param {string} params.password - User password
 * @param {string} params.ipAddress - IP address of the user
 * @param {string} params.userAgent - User agent of the user
 * @returns {Promise<Response>} Response object with success status, code, message and data
 */
  async function loginUserWithEmailAndPassword({ email, password, ipAddress, userAgent }) {


    if (!email || email.length === 0 || !isEmail(email)) {
        return endpointResponse(false, 400, 'Invalid email address.');
    }

    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            email: true,
            firstName: true,
            emailVerified: true,
            hashedPassword: true,
        },
    });

    if (!user) {
        return endpointResponse(false, 400, 'User not found.');
    }

    if (!user.emailVerified) {
        await sendVerificationEmail({ email: user.email, firstName: user.firstName });
        return endpointResponse(false, 400, 'Please check your email for a verification link.');
    }

    if (!user.hashedPassword) {
        return endpointResponse(false, 400, 'There is no password for this account. Please use a social login (Google or GitHub).');
    }
    
    const { status, message, code, data } = await login_user({ email, password, ipAddress, userAgent });

    if (!status) {
        return endpointResponse(false, code, message);
    }

    return endpointResponse(true, 200, 'User logged in successfully.', data);
    
    
    
  }

export { registerUserWithEmailAndPassword, doesUserExist, loginUserWithEmailAndPassword };