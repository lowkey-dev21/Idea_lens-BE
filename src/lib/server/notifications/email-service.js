/**
 * @file emailService.js
 * @description Production-ready email service using nodemailer with smart defaults and environment-aware configuration
 */

import { HAS_VERIFIED_PLUNK, SMTP_HOSTNAME, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME, PLUNK_SECRET_KEY } from '$env/static/private';
import nodemailer from 'nodemailer';
import { EMAIL_PLACEHOLDER_KEYS, EmailVerification, LoginAlert, PasswordResetRequest, WelcomeEmail } from '../../utils/emails.js';
import { USER_PROFILE_URL } from '$lib/shared/constants.js';
import { getDeviceInfo } from '$lib/utils/ua-parser.js';
// Constants
const COMPANY_NAME = 'IdeaLens';
const COMPANY_TAGLINE = 'Your Idea to Reality Pipeline';
const DOMAIN = 'idealens.dev';

/**
 * Singleton transporter instance
 * @type {nodemailer.Transporter|null}
 */
let transporter = null;

/**
 * Gets or creates a transporter for sending emails
 * @returns {nodemailer.Transporter} - Configured nodemailer transporter
 */
const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOSTNAME,
      port: SMTP_PORT,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true, // important for secure connections
      },
    });
  }
  return transporter;
};

/**
 * Determines appropriate sender details based on email content and context
 * @param {string|undefined} customFrom - Optional custom from address 
 * @param {string|undefined} html - HTML content of the email
 * @param {string|undefined} text - Text content of the email
 * @returns {string} - Formatted sender address
 */
const determineSender = (customFrom, html, text) => {
  if (customFrom) return customFrom;
  
  const content = html || text || '';
  
  // Determine sender based on content
  if (content.toLowerCase().includes('otp') || 
      content.toLowerCase().includes('verification') || 
      content.toLowerCase().includes('verify')) {
    return `OTP & Verification <noreply@${DOMAIN}>`;
  }
  
  // Default sender
  return `The ${COMPANY_NAME} Team <hi@${DOMAIN}>`;
};

/**
 * Formats the subject with appropriate suffix
 * @param {string} subject - Original subject
 * @param {string} from - From address to extract sender name if needed
 * @returns {string} - Formatted subject with suffix if needed
 */
const formatSubject = (subject, from) => {
  if (!subject) subject = '';
  
  // Return as-is if already contains company name
  if (subject.includes(COMPANY_NAME)) return subject;
  
  // Extract sender name for personalized subjects
  let personalization = '';
  const personalSenders = ['wale', 'muiz', 'fola'];
  
  for (const person of personalSenders) {
    if (from.toLowerCase().includes(person)) {
      personalization = ` | ${person.charAt(0).toUpperCase() + person.slice(1)} @ ${COMPANY_NAME}`;
      break;
    }
  }
  
  // If no specific person was detected
  if (!personalization) {
    personalization = ` | ${COMPANY_NAME}`;
  }
  
  return `${subject}${personalization} - ${COMPANY_TAGLINE}`;
};

/**
 * Sends an email with smart defaults and production-ready configuration
 * @param {Object} options - Email options
 * @param {string} [options.from] - Optional sender address
 * @param {string} options.to - Recipient address
 * @param {string} [options.subject=''] - Email subject
 * @param {string} [options.html] - HTML content
 * @param {string} [options.text] - Plain text content
 * @param {string} [options.replyTo] - Reply-to address
 * @returns {Promise<Object>} - Email sending result
 */
async function sendEmail({ from, to, subject = '', html, text, replyTo }) {
  if (!to) {
    throw new Error('Recipient (to) is required');
  }
  
  if (!html && !text) {
    throw new Error('Email content (html or text) is required');
  }

  // If Plunk is not verified, use Plunk's API
  if (HAS_VERIFIED_PLUNK === "false") {
    try {
      const response = await fetch('https://api.useplunk.com/v1/send', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + PLUNK_SECRET_KEY
        },
        body: JSON.stringify({
          to,
          subject: formatSubject(subject, from || ''),
          body: html || text
        })
      });

      const info = await response.json();
      console.log('✅ Email sent via Plunk:', info);
      return info;
    } catch (error) {
      console.error('❌ Error sending email via Plunk:', error);
      throw error;
    }
  }
  
  try {
    // Get singleton transporter instance
    const emailTransporter = getTransporter();
    
    // Determine appropriate sender
    const actualFrom = determineSender(from, html, text);
    
    // Format subject with suffix if needed
    const actualSubject = formatSubject(subject, actualFrom);
    
    // Set default reply-to if not specified
    const actualReplyTo = replyTo || 'hi@' + DOMAIN;
    
    const info = await emailTransporter.sendMail({
      from: actualFrom,
      to,
      subject: actualSubject,
      html,
      text,
      replyTo: actualReplyTo,
    });
    
    console.log('✅ Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

/**
 * @typedef {Object} EmailPlaceholderData
 * @property {string} [VerificationLink]
 * @property {string} [UserFirstName]
 * @property {string} [DashboardLink]
 * @property {string} [VerificationCode]
 * @property {string} [PasswordResetLink]
 * @property {string} [SupportEmail]
 * @property {string} [OldEmail]
 * @property {string} [NewEmail]
 * @property {string} [InviteeName]
 * @property {string} [InviterName]
 * @property {string} [InviterEmail]
 * @property {string} [WorkspaceName]
 * @property {string} [RoleName]
 * @property {string} [InviteLink]
 * @property {string} [ExpiryDate]
 * @property {string} [WorkspaceMembersLink]
 * @property {string} [InviteeEmail]
 * @property {string} [AdminName]
 * @property {string} [WorkspaceLink]
 * @property {string} [ProjectName]
 * @property {string} [ManagerName]
 * @property {string} [ProjectRoleName]
 * @property {string} [ProjectLink]
 * @property {string} [IdeaTitle]
 * @property {string} [IdeaLink]
 * @property {string} [NewRoleName]
 * @property {string} [NewProjectRoleName]
 * @property {string} [UpdaterName]
 * @property {string} [AnalysisType]
 * @property {string} [AnalysisResultsLink]
 * @property {string} [ErrorMessage]
 * @property {string} [SupportLink]
 * @property {string} [PipelineName]
 * @property {string} [PipelineRunLink]
 * @property {string} [DeliverableTitle]
 * @property {string} [DeliverableLink]
 * @property {string} [TaskTitle]
 * @property {string} [TaskDueDate]
 * @property {string} [TaskPriority]
 * @property {string} [TaskLink]
 * @property {string} [NewTaskStatus]
 * @property {string} [MentionerName]
 * @property {string} [CommentExcerpt]
 * @property {string} [IntegrationProvider]
 * @property {string} [ProjectIntegrationsLink]
 * @property {string} [SyncDetails]
 * @property {string} [SyncErrorMessage]
 * @property {string} [GitHubAIActionType]
 * @property {string} [GitHubEntityType]
 * @property {string} [GitHubEntityLink]
 * @property {string} [ActionDetails]
 * @property {string} [ActionLogLink]
 * @property {string} [PlanName]
 * @property {string} [BillingPortalLink]
 * @property {string} [CurrentPeriodEndDate]
 * @property {string} [NextBillingDate]
 * @property {string} [Amount]
 * @property {string} [Currency]
 * @property {string} [PurposeDescription]
 * @property {string} [TransactionID]
 * @property {string} [InvoiceLink]
 * @property {string} [FailureReason]
 * @property {string} [BillingUpdateLink]
 * @property {string} [InvoiceNumber]
 * @property {string} [AmountDue]
 * @property {string} [DueDate]
 * @property {string} [AnnouncementTitle]
 * @property {string} [AnnouncementBody]
 * @property {string} [OptionalLink]
 * @property {string} [DeviceType]
 * @property {string} [Browser]
 * @property {string} [Location]
 * @property {string} [LoginDateTime]
 * @property {string} [IPAddress]
 * @property {string} [SecureAccountLink]
 */

/**
 * Replaces placeholders in a template string with corresponding values from an array of data objects.
 * Only replaces placeholders that match EMAIL_PLACEHOLDER_KEYS.
 * For each placeholder, uses the first value found in the array.
 * @param {string} template - Template string containing placeholders in [placeholder] format
 * @param {EmailPlaceholderData[]} dataArr - Array of objects for replacement (see typedef for allowed keys)
 * @returns {string} Template with placeholders replaced by values from data objects
 */
function replacePlaceholders(template, dataArr) {
    return template.replace(/\[([^\]]+)\]/g, (match, p1) => {
        if (!EMAIL_PLACEHOLDER_KEYS.includes(p1)) return match;
        for (const data of dataArr) {
            if (data && typeof data === 'object' && p1 in data && data[p1] != null) {
                return data[p1];
            }
        }
        return match;
    });
}

/**
 * Sends an email verification email to the user.
 * 
 * @param {Object} options - Email options
 * @param {string} options.email - The email address of the user to send the email to.
 * @param {string} options.firstName - The first name of the user.
 * @param {string} options.verificationCode - The verification code to send to the user.
 * @param {string} options.verificationLink - The link to verify the user's email.
 * @returns {Promise<{ status: boolean, message: string, code: number, data: Object }>} - Email sending result
 */
async function sendEmailVerificationEmail({ email, firstName, verificationCode, verificationLink }) {
    const html = replacePlaceholders(EmailVerification.html, [
        {
            UserFirstName: firstName,
            VerificationCode: verificationCode,
            VerificationLink: verificationLink,
        }
    ])

    const text = replacePlaceholders(EmailVerification.text, [
        {
            UserFirstName: firstName,
            VerificationCode: verificationCode,
            VerificationLink: verificationLink,
        }
    ])

    

    const info = await sendEmail({
        to: email,
        subject: EmailVerification.subject,
        html,
        text,
    })

    return {
        status: (info?.accepted?.length > 0) && (info?.rejected?.length === 0),
        message: info?.response,
        code: Number(info?.response?.split(' ')?.[0]),
        data: info
    };
}

async function sendWelcomeEmail({ email, firstName }) {
  const html = replacePlaceholders(WelcomeEmail.html, [
    {
      UserFirstName: firstName,
    }
  ])

  const text = replacePlaceholders(WelcomeEmail.text, [
    {
      UserFirstName: firstName,
    }
  ])

  const info = await sendEmail({
    to: email,
    subject: WelcomeEmail.subject,
    html,
    text,
  })

  return {
    status: (info?.accepted?.length > 0) && (info?.rejected?.length === 0),
    message: info?.response,
    code: Number(info?.response?.split(' ')?.[0]),
    data: info
  }
  
}

/**
 * Sends a login alert email to the user.
 * 
 * @param {Object} options - Email options
 * @param {string} options.email - The email address of the user to send the email to.
 * @param {string} options.firstName - The first name of the user.
 * @param {string} options.uaString - The user agent string of the user.
 * @param {string} options.location - The location of the user.
 * @param {string} options.loginDateTime - The date and time of the login.
 * @param {string} options.ipAddress - The IP address of the user.
 * @returns {Promise<{ status: boolean, message: string, code: number, data: Object }>} - Email sending result
 */
async function sendLoginAlertEmail({ email, firstName, uaString, location, loginDateTime, ipAddress }) {
  const deviceInfo = getDeviceInfo(uaString);
  const html = replacePlaceholders(LoginAlert.html, [
    {
      UserFirstName: firstName,
      DeviceType: deviceInfo?.os?.name + ' ' + deviceInfo?.os?.version + ' ' + deviceInfo?.device?.type + ` (${deviceInfo?.device?.vendor} ${deviceInfo?.device?.model})`,
      Browser: deviceInfo?.browser?.name + ' ' + deviceInfo?.browser?.version,
      Location: location,
      LoginDateTime: loginDateTime,
      IPAddress: ipAddress,
      SecureAccountLink: `${USER_PROFILE_URL}`,
    }
  ])

  const text = replacePlaceholders(LoginAlert.text, [
    {
      UserFirstName: firstName,
    }
  ])

  const info = await sendEmail({
    to: email,
    subject: LoginAlert.subject,
    html,
    text,
  })

  return {
    status: (info?.accepted?.length > 0) && (info?.rejected?.length === 0),
    message: info?.response,
    code: Number(info?.response?.split(' ')?.[0]),
    data: info
  }
}

/**
 * Sends a password reset request email to the user.
 * 
 * @param {Object} options - Email options
 * @param {string} options.email - The email address of the user to send the email to.
 * @param {string} options.firstName - The first name of the user.
 * @param {string} options.resetLink - The link to reset the user's password.
 */
async function sendPasswordResetEmail({ email, firstName, resetLink }) {
  const html = replacePlaceholders(PasswordResetRequest.html, [
    {
      UserFirstName: firstName,
      PasswordResetLink: resetLink,
    }
  ])

  const text = replacePlaceholders(PasswordResetRequest.text, [
    {
      UserFirstName: firstName,
      PasswordResetLink: resetLink,
    }
  ])

  const info = await sendEmail({
    to: email,
    subject: PasswordResetRequest.subject,
    html,
    text,
  })

  return {
    status: (info?.accepted?.length > 0) && (info?.rejected?.length === 0),
    message: info?.response,
    code: Number(info?.response?.split(' ')?.[0]),
    data: info
  }
}



export { sendEmailVerificationEmail, sendWelcomeEmail, sendLoginAlertEmail, sendPasswordResetEmail };