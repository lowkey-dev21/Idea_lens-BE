/**
 * @file emailService.js
 * @description Production-ready email service using nodemailer with smart defaults and environment-aware configuration
 */

import { HAS_VERIFIED_PLUNK, SMTP_HOSTNAME, SMTP_PASSWORD, SMTP_PORT, SMTP_USERNAME, PLUNK_SECRET_KEY } from '$env/static/private';
import nodemailer from 'nodemailer';
import { EMAIL_PLACEHOLDER_KEYS, EmailVerification, LoginAlert, PasswordResetSuccess, PasswordResetRequest, WelcomeEmail, EmailChangeVerification, EmailChangeNoticeToOldEmail } from '../../utils/emails.js';
import { DASHBOARD_URL, SUPPORT_EMAIL, USER_PROFILE_URL, VERIFY_EMAIL_URL } from '$lib/shared/constants.js';
import { getDeviceInfo } from '$lib/utils/ua-parser.js';
import { formatDate } from '$lib/utils/date.js';
// Constants
const COMPANY_NAME = 'IdeaLens';
const COMPANY_TAGLINE = 'Your Idea to Reality Pipeline';
const DOMAIN = 'idealens.dev';

/**
 * Singleton transporter instance
 * @type {nodemailer.Transporter | null}
 */
let transporter = null;

/**
 * Gets or creates a transporter for sending emails
 * @returns {nodemailer.Transporter} - Configured nodemailer transporter
 */
const getTransporter = () => {
  if (!transporter) {
    const smtpOptions = {
      host: SMTP_HOSTNAME,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true, // important for secure connections
      },
    };
    transporter = nodemailer.createTransport(smtpOptions);
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
 * @returns {Promise<import('nodemailer').SentMessageInfo|Object>} - Email sending result
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
 * @param {Array<Record<string, string>>} dataArr - Array of objects for replacement
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
 * @param {Object} options
 * @param {string} options.email
 * @param {string} options.firstName
 * @param {string} options.verificationCode
 * @param {string} options.verificationLink
 * @returns {Promise<{ status: boolean, message: string, code: number, data: any }>} - Email sending result
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
        status: (info.accepted && info.accepted.length > 0) && (!info.rejected || info.rejected.length === 0),
        message: info.response || info.message || '',
        code: Number((info.response || '').split(' ')[0]) || 200,
        data: info
    };
}

/**
 * @param {{ email: string, firstName: string }} param0
 */
async function sendWelcomeEmail({ email, firstName }) {
  const html = replacePlaceholders(WelcomeEmail.html, [
    {
      UserFirstName: firstName,
      DashboardLink: DASHBOARD_URL
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
    status: (info.accepted && info.accepted.length > 0) && (!info.rejected || info.rejected.length === 0),
    message: info.response || info.message || '',
    code: Number((info.response || '').split(' ')[0]) || 200,
    data: info
  }
}

/**
 * @param {{ email: string, firstName: string, uaString: string, location: string, loginDateTime: string, ipAddress: string }} param0
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
    status: (info.accepted && info.accepted.length > 0) && (!info.rejected || info.rejected.length === 0),
    message: info.response || info.message || '',
    code: Number((info.response || '').split(' ')[0]) || 200,
    data: info
  }
}

/**
 * @param {{ email: string, firstName: string, resetLink: string }} param0
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
    status: (info.accepted && info.accepted.length > 0) && (!info.rejected || info.rejected.length === 0),
    message: info.response || info.message || '',
    code: Number((info.response || '').split(' ')[0]) || 200,
    data: info
  }
}

/**
 * @param {{ email: string, firstName: string }} param0
 */
async function sendPasswordResetSuccessEmail({ email, firstName }) {
  const html = replacePlaceholders(PasswordResetSuccess.html, [
    {
      UserFirstName: firstName,
      SupportEmail: SUPPORT_EMAIL
    }
  ])

  const text = replacePlaceholders(PasswordResetSuccess.text, [
    {
      UserFirstName: firstName,
    }
  ])

  const info = await sendEmail({
    to: email,
    subject: PasswordResetSuccess.subject,
    html,
    text,
  })

  return {
    status: (info.accepted && info.accepted.length > 0) && (!info.rejected || info.rejected.length === 0),
    message: info.response || info.message || '',
    code: Number((info.response || '').split(' ')[0]) || 200,
    data: info
  }
}

/**
 * Sends an email change verification email to the user.
 * @param {Object} options - Email options
 * @param {string} options.email - The new email address to send the verification to
 * @param {string} options.firstName - The user's first name
 * @param {string} options.verificationCode - The verification code
 * @param {string} options.currentEmail - The user's current email address
 * @param {string} options.newEmail - The user's new email address
 * @returns {Promise<Object>} - Email sending result
 */
async function sendEmailChangeVerificationEmail({ email, firstName, verificationCode, currentEmail, newEmail }) {
  const text = replacePlaceholders(EmailChangeVerification.text, [
    {
      UserFirstName: firstName,
      VerificationCode: verificationCode,
      OldEmail: currentEmail,
      NewEmail: newEmail,
      SupportEmail: SUPPORT_EMAIL
    }
  ])

  const html = replacePlaceholders(EmailChangeVerification.html, [
    {
      UserFirstName: firstName,
      VerificationCode: verificationCode,
      OldEmail: currentEmail,
      NewEmail: newEmail,
      SupportEmail: SUPPORT_EMAIL
    }
  ])

  const info = await sendEmail({
    to: email,
    subject: EmailChangeVerification.subject,
    html,
    text,
  })

  return {
      status: info.status,
      message: info.message,
      code: info.code,
      data: info.data
  };
}

/**
 * Sends an email alert to the old email address when email is changed
 * @param {Object} options - The options for sending the email change alert
 * @param {string} options.firstName - User's first name
 * @param {string} options.oldEmail - User's previous email address
 * @param {string} options.newEmail - User's new email address 
 * @param {string} options.uaString - User agent string of the device making the change
 * @param {string} options.location - Geographic location where change was made
 * @param {Date} options.createdAt - Timestamp when the email change was initiated
 * @returns {Promise<{status: number, message: string, code: string, data: Object}>} Email sending result
 */
async function sendEmailChangeAlertEmail({ firstName, oldEmail, newEmail, uaString, location, createdAt }) {
  const deviceInfo = await getDeviceInfo(uaString);


  const html = replacePlaceholders(EmailChangeNoticeToOldEmail.html, [
    {
      UserFirstName: firstName,
      OldEmail: oldEmail,
      NewEmail: newEmail,
      SupportEmail: SUPPORT_EMAIL,
      DeviceInfo: `${deviceInfo.browser} on ${deviceInfo.os}`,
      Location: location,
      RequestDateTime: formatDate(createdAt, {
        includeTime: true,
        locale: 'en-NG'
      })
    }
  ])

  const text = replacePlaceholders(EmailChangeNoticeToOldEmail.text, [
    {
      UserFirstName: firstName,
      OldEmail: oldEmail,
      NewEmail: newEmail,
      SupportEmail: SUPPORT_EMAIL,
      DeviceInfo: `${deviceInfo.browser} on ${deviceInfo.os}`,
      Location: location,
      RequestDateTime: formatDate(createdAt, {
        includeTime: true,
        locale: 'en-NG'
      })
    }
  ])

  const info = await sendEmail({
    to: oldEmail,
    subject: EmailChangeNoticeToOldEmail.subject,
    html,
    text,
  })

  return {
      status: info.status,
      message: info.message,
      code: info.code,
      data: info.data
  };
}

export {
  sendEmailVerificationEmail,
  sendWelcomeEmail,
  sendLoginAlertEmail,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail,
  sendEmailChangeVerificationEmail,
  sendEmailChangeAlertEmail
 };