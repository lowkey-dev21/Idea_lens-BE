// --- Authentication & Account Management ---

const WelcomeEmail = {
	subject: 'Welcome to IdeaLens!',
	text: `Hi **[UserFirstName]**,
  
  Welcome to IdeaLens! We're excited to have you on board.
  
  Get started by creating your first project or exploring our features: [DashboardLink]
  
  Happy innovating!
  
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to IdeaLens!</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Welcome to IdeaLens! We're excited to have you on board.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Welcome to IdeaLens!</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Welcome to IdeaLens! We're excited to have you on board.</p>
              <p style="margin: 20px 0 0 0;">Get started by creating your first project or exploring our features.</p>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[DashboardLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Dashboard</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FEATURES SECTION -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 40px 30px; border-top: 1px solid #dddddd;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 25px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 700;">
                    <p style="margin: 0;">What you can do with IdeaLens:</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 20px 0 0 0;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Create Projects" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Create Projects</p>
                        </td>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Analyze Ideas" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Analyze Ideas</p>
                        </td>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Collaborate" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Collaborate</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Happy innovating!<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const EmailVerification = {
	// Covered by sendOTPEmail but can be customized
	subject: 'Verify Your Email Address',
	text: `Hi **[UserFirstName]**,
  
  Please use the following code to verify your email address for IdeaLens:
  **[VerificationCode]**
  
  This code is valid for 24 hour.

  You can verify your email address by clicking the link below:
  [VerificationLink]
  
  If you didn't request this, please ignore this email.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email Address</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Please verify your email address for IdeaLens.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Verify Your Email</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Please use the following code to verify your email address for IdeaLens:</p>
              
              <!-- VERIFICATION CODE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 30px 0;">
                    <table border="0" cellspacing="0" cellpadding="0" bgcolor="#f2f2f2" style="border-radius: 4px;">
                      <tr>
                        <td align="center" style="padding: 20px 30px; font-family: 'Courier New', Courier, monospace; font-size: 24px; font-weight: 700; letter-spacing: 5px; color: #333333;">
                          [VerificationCode]
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0;">This code is valid for 10 minutes.</p>
              <p style="margin: 20px 0 0 0;">You can also verify your email address by clicking the button below:</p>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[VerificationLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Verify Email</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- SECURITY NOTE -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0;">If you didn't request this verification, please ignore this email or contact our support team if you have concerns.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const PasswordResetRequest = {
	subject: 'Reset Your IdeaLens Password',
	text: `Hi **[UserFirstName]**,
  
  We received a request to reset your password for your IdeaLens account.
  
  Click the link below to set a new password:
  [PasswordResetLink]
  
  This link is valid for 30 minutes.
  
  If you didn't request a password reset, please ignore this email.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your IdeaLens Password</title>
    <!--[if mso]>
    <style type="text/css">
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->
    <style type="text/css">
      /* Client-specific resets */
      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      
      /* Reset styles */
      body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      
      /* iOS BLUE LINKS */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* MOBILE STYLES */
      @media screen and (max-width: 600px) {
        .img-max {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
        .max-width {
          max-width: 100% !important;
        }
        .mobile-wrapper {
          width: 85% !important;
          max-width: 85% !important;
        }
        .mobile-padding {
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
      Reset your password for IdeaLens.
    </div>
    
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
          <!-- HEADER -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
                <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
                <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Reset Your Password</h1>
              </td>
            </tr>
          </table>
          
          <!-- MAIN CONTENT -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
                <p style="margin: 20px 0 0 0;">We received a request to reset your password for your IdeaLens account.</p>
                <p style="margin: 20px 0 0 0;">Click the button below to set a new password. This link is valid for 30 minutes.</p>
              </td>
            </tr>
            
            <!-- BUTTON -->
            <tr>
              <td bgcolor="#ffffff" align="left">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                      <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                            <a href="[PasswordResetLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Reset Password</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <!-- SECURITY NOTE -->
            <tr>
              <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
                <p style="margin: 20px 0 0 0;">If you didn't request a password reset, please ignore this email or contact our support team if you have concerns about your account security.</p>
              </td>
            </tr>
            
            <!-- FOOTER -->
            <tr>
              <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
                <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
                <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`
};

const PasswordResetSuccess = {
	subject: 'Your IdeaLens Password Has Been Changed',
	text: `Hi **[UserFirstName]**,
  
  Your password for IdeaLens has been successfully changed.
  
  If you did not make this change, please contact our support team immediately at [SupportEmail].
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your IdeaLens Password Has Been Changed</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your password for IdeaLens has been successfully changed.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Password Changed</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Your password for IdeaLens has been successfully changed.</p>
              <p style="margin: 20px 0 0 0;">If you did not make this change, please contact our support team immediately at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
            </td>
          </tr>
          
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[LoginLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Log In</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const EmailChangeVerification = {
	// For the new email address
	subject: 'Confirm Your New Email Address for IdeaLens',
	text: `Hi **[UserFirstName]**,
  
  Please use the following code to confirm your new email address for IdeaLens:
  **[VerificationCode]**
  
  This code is valid for 10 minutes.
  
  If you didn't request this change, please contact support.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm Your New Email Address for IdeaLens</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Please confirm your new email address for IdeaLens.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Confirm Your New Email</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Please use the following code to confirm your new email address for IdeaLens:</p>
              
              <!-- VERIFICATION CODE -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 30px 0;">
                    <table border="0" cellspacing="0" cellpadding="0" bgcolor="#f2f2f2" style="border-radius: 4px;">
                      <tr>
                        <td align="center" style="padding: 20px 30px; font-family: 'Courier New', Courier, monospace; font-size: 24px; font-weight: 700; letter-spacing: 5px; color: #333333;">
                          [VerificationCode]
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0;">This code is valid for 24 hours.</p>
              <p style="margin: 20px 0 0 0;">You're changing your email from <strong>[OldEmail]</strong> to <strong>[NewEmail]</strong>.</p>
            </td>
          </tr>
          
          <!-- SECURITY NOTE -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0;">If you didn't request this change, please contact our support team immediately at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const EmailChangeNoticeToOldEmail = {
	// For the old email address
	subject: 'IdeaLens Email Change Request',
	text: `Hi **[UserFirstName]**,
  
  This is a notification that a request has been made to change the email address associated with your IdeaLens account from this email ([OldEmail]) to **[NewEmail]**.
  
  If you did not authorize this change, please contact our support team immediately at [SupportEmail] or secure your account.
  
  If you made this change, please check your new email address to complete the verification.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IdeaLens Email Change Request</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    A request has been made to change your IdeaLens email address.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Email Change Request</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">This is a notification that a request has been made to change the email address associated with your IdeaLens account from this email (<strong>[OldEmail]</strong>) to <strong>[NewEmail]</strong>.</p>
              <p style="margin: 20px 0 0 0;">If you did not authorize this change, please contact our support team immediately at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a> or secure your account.</p>
            </td>
          </tr>
          
          <!-- SECURITY INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="24" valign="top">
                          <img src="/placeholder.svg?height=24&width=24" width="24" height="24" alt="Security Icon" style="display: block; margin: 0;" />
                        </td>
                        <td style="padding-left: 15px;">
                          <p style="margin: 0; font-size: 14px;">This request was made from:</p>
                          <p style="margin: 5px 0 0 0; font-weight: 600;">[DeviceInfo] in [Location]</p>
                        </td>
                      </tr>
                      <tr>
                        <td width="24" valign="top" style="padding-top: 15px;">
                          <img src="/placeholder.svg?height=24&width=24" width="24" height="24" alt="Time Icon" style="display: block; margin: 0;" />
                        </td>
                        <td style="padding-left: 15px; padding-top: 15px;">
                          <p style="margin: 0; font-size: 14px;">Date and time:</p>
                          <p style="margin: 5px 0 0 0; font-weight: 600;">[RequestDateTime]</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#e53e3e">
                          <a href="[SecureAccountLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #e53e3e; display: inline-block; font-weight: 600;">Secure My Account</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const LoginAlert = {
  subject: 'New Login to Your IdeaLens Account: [DeviceType] on [Browser] in [Location]',
  text: `------------------------------------

New login detected on your IdeaLens account from [DeviceType] in [Location]. If this wasn't you, please reply to this email immediately.

------------------------------------

Hi [UserFirstName],

We detected a new login to your IdeaLens account. If this was you, you can disregard this message. If you didn't log in recently, please secure your account immediately.

LOGIN DETAILS:
- Date & Time: [LoginDateTime]
- Location: [Location]
- Device: [DeviceType]
- Browser: [Browser]
- IP Address: [IPAddress]

*** IMPORTANT - IF THIS WASN'T YOU: ***
1. Reply directly to this email immediately.
2. Or contact our security team at [SupportEmail]

We'll help secure your account and investigate the unauthorized access.

SECURITY RECOMMENDATIONS:
1. Use a strong, unique password for your IdeaLens account.
2. Enable two-factor authentication for additional security.
3. Regularly review your account activity for any suspicious behavior.
4. Never share your login credentials with others.

Keeping your account secure,
The IdeaLens Team

© 2025 IdeaLens. All rights reserved.

This is an automated security notification. You can reach our support team at [SupportEmail].`,
  html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Login to Your IdeaLens Account</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* ALERT STYLES */
  .alert-box {
    background-color: #FEF2F2;
    border-left: 4px solid #DC2626;
    padding: 15px;
    margin: 15px 0;
    border-radius: 0 4px 4px 0;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  New login detected on your IdeaLens account from [DeviceType] in [Location]. If this wasn't you, please reply to this email immediately.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">New Login Alert</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">We detected a new login to your IdeaLens account. If this was you, you can disregard this message. If you didn't log in recently, please secure your account immediately.</p>
          </td>
        </tr>
        
        <!-- LOGIN INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Date & Time:</td>
                      <td style="font-weight: 600;">[LoginDateTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Location:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[Location]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Device:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DeviceType]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Browser:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[Browser]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">IP Address:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[IPAddress]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ALERT INSTRUCTIONS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <div class="alert-box" style="background-color: #FEF2F2; border-left: 4px solid #DC2626; padding: 15px; margin: 15px 0; border-radius: 0 4px 4px 0; color: #7F1D1D; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0; font-weight: 600;">If this wasn't you:</p>
              <p style="margin: 10px 0 0 0;">1. Reply directly to this email immediately.</p>
              <p style="margin: 5px 0 0 0;">2. Or contact our security team at <a href="mailto:[SupportEmail]" style="color: #DC2626; text-decoration: underline; font-weight: 600;">[SupportEmail]</a></p>
              <p style="margin: 10px 0 0 0;">We'll help secure your account and investigate the unauthorized access.</p>
            </div>
          </td>
        </tr>
        
        <!-- SECURITY RECOMMENDATIONS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Security Recommendations:</p>
            <p style="margin: 10px 0 0 0;">1. Use a strong, unique password for your IdeaLens account.</p>
            <p style="margin: 5px 0 0 0;">2. Enable two-factor authentication for additional security.</p>
            <p style="margin: 5px 0 0 0;">3. Regularly review your account activity for any suspicious behavior.</p>
            <p style="margin: 5px 0 0 0;">4. Never share your login credentials with others.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Keeping your account secure,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">This is an automated security notification. You can reach our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

// --- Workspace & Collaboration ---

const WorkspaceInvite = {
	subject: "You're Invited to Join a Workspace on IdeaLens",
	text: `Hi **[InviteeName]**,
  
  **[InviterName]** ([InviterEmail]) has invited you to join the "**[WorkspaceName]**" workspace on IdeaLens as a **[RoleName]**.
  
  Click the link below to accept the invitation:
  [InviteLink]
  
  This invitation will expire on **[ExpiryDate]**.
  
  Welcome aboard!
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're Invited to Join a Workspace on IdeaLens</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    You've been invited to join a workspace on IdeaLens!
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Workspace Invitation</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[InviteeName]</strong>,</p>
              <p style="margin: 20px 0 0 0;"><strong>[InviterName]</strong> ([InviterEmail]) has invited you to join the "<strong>[WorkspaceName]</strong>" workspace on IdeaLens as a <strong>[RoleName]</strong>.</p>
            </td>
          </tr>
          
          <!-- WORKSPACE INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Workspace:</td>
                        <td style="font-weight: 600;">[WorkspaceName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Role:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[RoleName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Expires:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ExpiryDate]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[InviteLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Accept Invitation</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- SECURITY NOTE -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0;">If you don't recognize this invitation, please ignore this email.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Welcome aboard!<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const WorkspaceInviteAccepted = {
	subject: '[InviteeName] Joined Your Workspace "[WorkspaceName]"',
	text: `Hi **[InviterName]**,
  
  Good news! **[InviteeName]** ([InviteeEmail]) has accepted your invitation and joined the "**[WorkspaceName]**" workspace as a **[RoleName]**.
  
  You can manage workspace members here: [WorkspaceMembersLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[InviteeName] Joined Your Workspace "[WorkspaceName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* ROLE BADGE STYLES */
  .role-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .role-owner {
    background-color: #F3E8FF;
    color: #6B21A8;
  }
  .role-admin {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .role-member {
    background-color: #DCFCE7;
    color: #166534;
  }
  .role-guest {
    background-color: #E0E7FF;
    color: #4338CA;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Good news! [InviteeName] has accepted your invitation and joined the "[WorkspaceName]" workspace.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">New Member Joined</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[InviterName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">Good news! <strong>[InviteeName]</strong> (<a href="mailto:[InviteeEmail]" style="color: #4F46E5; text-decoration: underline;">[InviteeEmail]</a>) has accepted your invitation and joined the "<strong>[WorkspaceName]</strong>" workspace as a <span class="role-[RoleClass]" style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[RoleBgColor]; color: #[RoleTextColor];">[RoleName]</span>.</p>
          </td>
        </tr>
        
        <!-- MEMBER INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">New Member:</td>
                      <td style="font-weight: 600;">[InviteeName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Email:</td>
                      <td style="font-weight: 600; padding-top: 10px;"><a href="mailto:[InviteeEmail]" style="color: #4F46E5; text-decoration: underline;">[InviteeEmail]</a></td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[RoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Joined On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[JoinedDate]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[WorkspaceMembersLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Manage Members</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- NEXT STEPS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Next Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Consider adding [InviteeName] to relevant projects.</p>
            <p style="margin: 5px 0 0 0;">2. Share important workspace resources and documentation.</p>
            <p style="margin: 5px 0 0 0;">3. Introduce them to the team and ongoing initiatives.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const UserAddedToWorkspace = {
	subject: 'You\'ve Been Added to the "[WorkspaceName]" Workspace',
	text: `Hi **[UserFirstName]**,
  
  You have been added to the "**[WorkspaceName]**" workspace on IdeaLens by **[AdminName]** as a **[RoleName]**.
  
  You can access the workspace here: [WorkspaceLink]
  
  Welcome!
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You've Been Added to a Project on IdeaLens</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    You've been added to a project on IdeaLens.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Added to Project</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">You have been added to the "<strong>[ProjectName]</strong>" project within the "<strong>[WorkspaceName]</strong>" workspace by <strong>[ManagerName]</strong> as a <strong>[ProjectRoleName]</strong>.</p>
            </td>
          </tr>
          
          <!-- PROJECT INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Project:</td>
                        <td style="font-weight: 600;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Your Role:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectRoleName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Added By:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ManagerName]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[ProjectLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Project</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Best regards,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const UserRemovedFromWorkspace = {
	subject: 'You\'ve Been Removed from the "[WorkspaceName]" Workspace',
	text: `Hi **[UserFirstName]**,
  
  This is to inform you that you have been removed from the "**[WorkspaceName]**" workspace on IdeaLens by **[AdminName]**.
  
  If you believe this was a mistake, please contact the workspace administrator.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You've Been Removed from the "[WorkspaceName]" Workspace</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  You have been removed from the "[WorkspaceName]" workspace on IdeaLens.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Workspace Membership Update</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">This is to inform you that you have been removed from the "<strong>[WorkspaceName]</strong>" workspace on IdeaLens by <strong>[AdminName]</strong>.</p>
          </td>
        </tr>
        
        <!-- WORKSPACE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Workspace:</td>
                      <td style="font-weight: 600;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Removed By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[AdminName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Removed On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[RemovalTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- REASON (if provided) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Reason (if provided):</p>
            <div style="background-color: #f9f9f9; margin: 10px 0; padding: 15px; border-radius: 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [RemovalReason]
            </div>
          </td>
        </tr>
        
        <!-- NEXT STEPS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">What this means:</p>
            <p style="margin: 10px 0 0 0;">1. You no longer have access to any projects, resources, or data within the "[WorkspaceName]" workspace.</p>
            <p style="margin: 5px 0 0 0;">2. You will not receive notifications about this workspace anymore.</p>
            <p style="margin: 5px 0 0 0;">3. Your contributions to the workspace remain intact.</p>
            <p style="margin: 15px 0 0 0;">If you believe this was a mistake, please contact the workspace administrator.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const WorkspaceRoleChanged = {
	subject: 'Your Role in "[WorkspaceName]" Has Been Updated',
	text: `Hi **[UserFirstName]**,
  
  Your role in the "**[WorkspaceName]**" workspace on IdeaLens has been updated to **[NewRoleName]** by **[AdminName]**.
  
  If you have any questions, please contact your workspace administrator.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your Role in "[WorkspaceName]" Has Been Updated</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* ROLE BADGE STYLES */
  .role-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .role-owner {
    background-color: #F3E8FF;
    color: #6B21A8;
  }
  .role-admin {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .role-member {
    background-color: #DCFCE7;
    color: #166534;
  }
  .role-guest {
    background-color: #E0E7FF;
    color: #4338CA;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Your role in the "[WorkspaceName]" workspace has been updated to [NewRoleName].
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Workspace Role Updated</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">Your role in the "<strong>[WorkspaceName]</strong>" workspace on IdeaLens has been updated to <span class="role-[RoleClass]" style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[RoleBgColor]; color: #[RoleTextColor];">[NewRoleName]</span> by <strong>[AdminName]</strong>.</p>
          </td>
        </tr>
        
        <!-- ROLE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Workspace:</td>
                      <td style="font-weight: 600;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">New Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[NewRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[AdminName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[UpdateTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[WorkspaceLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Workspace</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ROLE PERMISSIONS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">With your new role, you can:</p>
            <!-- Dynamic content based on role -->
            <div id="rolePermissions">
              [RolePermissionsBasedOnRole]
            </div>
            <p style="margin: 15px 0 0 0;">If you have any questions about your updated role, please contact your workspace administrator.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Project & Collaboration ---

const UserAddedToProject = {
	subject: 'You\'ve Been Added to the "[ProjectName]" Project',
	text: `Hi **[UserFirstName]**,
  
  You have been added to the "**[ProjectName]**" project within the "**[WorkspaceName]**" workspace by **[ManagerName]** as a **[ProjectRoleName]**.
  
  You can access the project here: [ProjectLink]
  
  Best regards,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You've Been Added to the "[ProjectName]" Project</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* ROLE BADGE STYLES */
  .role-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .role-admin {
    background-color: #F3E8FF;
    color: #6B21A8;
  }
  .role-manager {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .role-member {
    background-color: #DCFCE7;
    color: #166534;
  }
  .role-viewer {
    background-color: #E0E7FF;
    color: #4338CA;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  You have been added to the "[ProjectName]" project within the "[WorkspaceName]" workspace.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Welcome to the Project</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">You have been added to the "<strong>[ProjectName]</strong>" project within the "<strong>[WorkspaceName]</strong>" workspace by <strong>[ManagerName]</strong> as a <span class="role-[RoleClass]" style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[RoleBgColor]; color: #[RoleTextColor];">[ProjectRoleName]</span>.</p>
          </td>
        </tr>
        
        <!-- PROJECT INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Project:</td>
                      <td style="font-weight: 600;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Your Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Added By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ManagerName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Added On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[AddedDate]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- PROJECT DESCRIPTION (if available) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Project Description:</p>
            <div style="background-color: #f9f9f9; margin: 10px 0; padding: 15px; border-radius: 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [ProjectDescription]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ProjectLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Project</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ROLE PERMISSIONS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">As a [ProjectRoleName], you can:</p>
            <!-- Dynamic content based on role -->
            <div id="rolePermissions">
              [RolePermissionsBasedOnRole]
            </div>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Best regards,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const UserRemovedFromProject = {
	subject: 'You\'ve Been Removed from the "[ProjectName]" Project',
	text: `Hi **[UserFirstName]**,
  
  This is to inform you that you have been removed from the "**[ProjectName]**" project in the "**[WorkspaceName]**" workspace by **[ManagerName]**.
  
  If you believe this was a mistake, please contact the project manager or workspace administrator.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You've Been Removed from the "[ProjectName]" Project</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  You have been removed from the "[ProjectName]" project in the "[WorkspaceName]" workspace.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Project Membership Update</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">This is to inform you that you have been removed from the "<strong>[ProjectName]</strong>" project in the "<strong>[WorkspaceName]</strong>" workspace by <strong>[ManagerName]</strong>.</p>
          </td>
        </tr>
        
        <!-- PROJECT INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Project:</td>
                      <td style="font-weight: 600;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousProjectRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Removed By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ManagerName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Removed On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[RemovalTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- REASON (if provided) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Reason (if provided):</p>
            <div style="background-color: #f9f9f9; margin: 10px 0; padding: 15px; border-radius: 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [RemovalReason]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[WorkspaceLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Workspace</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- NEXT STEPS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">What this means:</p>
            <p style="margin: 10px 0 0 0;">1. You no longer have access to the project's resources, tasks, or deliverables.</p>
            <p style="margin: 5px 0 0 0;">2. You will not receive notifications about this project anymore.</p>
            <p style="margin: 5px 0 0 0;">3. Your contributions to the project remain intact.</p>
            <p style="margin: 15px 0 0 0;">If you believe this was a mistake, please contact the project manager or workspace administrator.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const ProjectRoleChanged = {
	subject: 'Your Role in "[ProjectName]" Has Been Updated',
	text: `Hi **[UserFirstName]**,
  
  Your role in the "**[ProjectName]**" project within the "**[WorkspaceName]**" workspace has been updated to **[NewProjectRoleName]** by **[ManagerName]**.
  
  If you have any questions, please contact the project manager.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your Role in "[ProjectName]" Has Been Updated</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* ROLE BADGE STYLES */
  .role-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .role-admin {
    background-color: #F3E8FF;
    color: #6B21A8;
  }
  .role-manager {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .role-member {
    background-color: #DCFCE7;
    color: #166534;
  }
  .role-viewer {
    background-color: #E0E7FF;
    color: #4338CA;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Your role in the "[ProjectName]" project has been updated to [NewProjectRoleName].
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Role Updated</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">Your role in the "<strong>[ProjectName]</strong>" project within the "<strong>[WorkspaceName]</strong>" workspace has been updated to <span class="role-[RoleClass]" style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[RoleBgColor]; color: #[RoleTextColor];">[NewProjectRoleName]</span> by <strong>[ManagerName]</strong>.</p>
          </td>
        </tr>
        
        <!-- ROLE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Project:</td>
                      <td style="font-weight: 600;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousProjectRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">New Role:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[NewProjectRoleName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ManagerName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[UpdateTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ProjectLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Go to Project</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ROLE PERMISSIONS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">With your new role, you can:</p>
            <!-- Dynamic content based on role -->
            <div id="rolePermissions">
              [RolePermissionsBasedOnRole]
            </div>
            <p style="margin: 15px 0 0 0;">If you have any questions about your updated role, please contact the project manager or workspace administrator.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Idea & Analysis Lifecycle ---

const IdeaSubmitted = {
	subject: 'Your Idea "[IdeaTitle]" Has Been Submitted',
	text: `Hi **[UserFirstName]**,
  
  Your idea, "**[IdeaTitle]**", for the project "**[ProjectName]**" has been successfully submitted for processing.
  
  We will notify you once the initial analysis or validation is complete.
  You can track its status here: [IdeaLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Idea Has Been Submitted</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your idea has been successfully submitted for processing.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Idea Submitted</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Your idea, "<strong>[IdeaTitle]</strong>", for the project "<strong>[ProjectName]</strong>" has been successfully submitted for processing.</p>
              <p style="margin: 20px 0 0 0;">We will notify you once the initial analysis or validation is complete. You can track its status using the button below.</p>
            </td>
          </tr>
          
          <!-- IDEA INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Idea:</td>
                        <td style="font-weight: 600;">[IdeaTitle]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Submitted:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[SubmissionDateTime]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Status:</td>
                        <td style="font-weight: 600; padding-top: 10px;">Processing</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[IdeaLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Track Idea</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- WHAT'S NEXT -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0; font-weight: 600;">What happens next?</p>
              <p style="margin: 10px 0 0 0;">1. Your idea will undergo initial processing and validation.</p>
              <p style="margin: 5px 0 0 0;">2. You'll receive a notification when analysis is complete.</p>
              <p style="margin: 5px 0 0 0;">3. You can track progress and view insights from your dashboard.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const IdeaStatusChanged = {
	subject: 'Status Update for Your Idea "[IdeaTitle]"',
	text: `Hi **[UserFirstName]**,
  
  The status of your idea, "**[IdeaTitle]**", in project "**[ProjectName]**" has been updated to: **[NewIdeaStatus]**.
  
  View details: [IdeaLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Status Update for Your Idea "[IdeaTitle]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* STATUS BADGE STYLES */
  .status-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .status-new {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .status-in-review {
    background-color: #FEF3C7;
    color: #92400E;
  }
  .status-approved {
    background-color: #DCFCE7;
    color: #166534;
  }
  .status-rejected {
    background-color: #FEE2E2;
    color: #B91C1C;
  }
  .status-in-progress {
    background-color: #E0E7FF;
    color: #4338CA;
  }
  .status-completed {
    background-color: #F3E8FF;
    color: #6B21A8;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  The status of your idea "[IdeaTitle]" has been updated to: [NewIdeaStatus].
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Idea Status Update</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The status of your idea, "<strong>[IdeaTitle]</strong>", in project "<strong>[ProjectName]</strong>" has been updated to:</p>
            <p style="margin: 15px 0; text-align: center;">
              <!-- Dynamic status badge based on status -->
              <span class="status-[StatusClass]" style="display: inline-block; padding: 6px 12px; border-radius: 4px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[StatusBgColor]; color: #[StatusTextColor];">[NewIdeaStatus]</span>
            </p>
          </td>
        </tr>
        
        <!-- IDEA INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Idea:</td>
                      <td style="font-weight: 600;">[IdeaTitle]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Status:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousIdeaStatus]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[UpdaterName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[UpdateTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- COMMENTS (if any) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Comments:</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #4F46E5; font-style: italic; margin: 10px 0; padding: 15px; border-radius: 0 4px 4px 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [StatusChangeComment]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[IdeaLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Idea</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- NEXT STEPS BASED ON STATUS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">What happens next?</p>
            <!-- Dynamic content based on status -->
            <div id="nextSteps">
              [NextStepsBasedOnStatus]
            </div>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const AnalysisStarted = {
	subject: 'Your "[AnalysisType]" Analysis for "[ProjectName]" Has Started',
	text: `Hi **[UserFirstName]**,
  
  The "**[AnalysisType]**" analysis you requested for the project "**[ProjectName]**" (or idea "**[IdeaTitle]**") has started processing.
  
  We'll notify you once it's complete.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your "[AnalysisType]" Analysis for "[ProjectName]" Has Started</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Your "[AnalysisType]" analysis has started processing. We'll notify you when it's complete.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Analysis Started</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The "<strong>[AnalysisType]</strong>" analysis you requested for the project "<strong>[ProjectName]</strong>"[IdeaInfo] has started processing.</p>
            <p style="margin: 20px 0 0 0;">We'll notify you once it's complete.</p>
          </td>
        </tr>
        
        <!-- ANALYSIS INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Analysis Type:</td>
                      <td style="font-weight: 600;">[AnalysisType]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    [IdeaRow]
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Started:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[StartTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Estimated Completion:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[EstimatedCompletionTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[AnalysisLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Progress</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const AnalysisCompleted = {
	subject: 'Your "[AnalysisType]" Analysis for "[ProjectName]" is Complete!',
	text: `Hi **[UserFirstName]**,
  
  Great news! The "**[AnalysisType]**" analysis for your project "**[ProjectName]**" (or idea "**[IdeaTitle]**") is now complete.
  
  View the results here: [AnalysisResultsLink]
  
  We hope you find the insights valuable!
  
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Analysis is Complete!</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Great news! Your analysis is now complete.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Analysis Complete!</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Great news! The "<strong>[AnalysisType]</strong>" analysis for your project "<strong>[ProjectName]</strong>" <span style="color: #999999;">(or idea "<strong>[IdeaTitle]</strong>")</span> is now complete.</p>
            </td>
          </tr>
          
          <!-- ANALYSIS INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Analysis Type:</td>
                        <td style="font-weight: 600;">[AnalysisType]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Completed:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[CompletionDate]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[AnalysisResultsLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Results</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- NEXT STEPS -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0;">We hope you find the insights valuable! You can now review the results, share them with your team, or use them to inform your next steps.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const AnalysisFailed = {
	subject: 'Problem with Your "[AnalysisType]" Analysis for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  We encountered an issue while processing the "**[AnalysisType]**" analysis for your project "**[ProjectName]**" (or idea "**[IdeaTitle]**").
  
  Error details:
  \`\`\`
  [ErrorMessage]
  \`\`\`
  
  Our team has been notified. You can also try running the analysis again or contact support if the issue persists: [SupportLink]
  
  Sorry for any inconvenience.
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Problem with Your Analysis</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
    
    /* ERROR CODE STYLES */
    .error-code {
      font-family: 'Courier New', Courier, monospace;
      background-color: #f2f2f2;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.5;
      color: #e53e3e;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    We encountered an issue while processing your analysis.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Analysis Issue</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">We encountered an issue while processing the "<strong>[AnalysisType]</strong>" analysis for your project "<strong>[ProjectName]</strong>" <span style="color: #999999;">(or idea "<strong>[IdeaTitle]</strong>")</span>.</p>
            </td>
          </tr>
          
          <!-- ERROR DETAILS -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <p style="margin: 0; font-weight: 600; color: #e53e3e;">Error details:</p>
                    <div class="error-code" style="margin-top: 10px; white-space: pre-wrap;">[ErrorMessage]</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTONS -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px; margin-right: 10px;" bgcolor="#4F46E5">
                          <a href="[RetryLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Try Again</a>
                        </td>
                        <td width="20">&nbsp;</td>
                        <td align="center" style="border-radius: 4px;" bgcolor="#ffffff">
                          <a href="[SupportLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #4F46E5; text-decoration: none; padding: 10px 23px; border-radius: 4px; border: 2px solid #4F46E5; display: inline-block; font-weight: 600;">Contact Support</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- TROUBLESHOOTING -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0; font-weight: 600;">Troubleshooting tips:</p>
              <p style="margin: 10px 0 0 0;">1. Check your input data for any formatting issues.</p>
              <p style="margin: 5px 0 0 0;">2. Ensure all required fields are completed.</p>
              <p style="margin: 5px 0 0 0;">3. Try running the analysis again after a few minutes.</p>
              <p style="margin: 5px 0 0 0;">4. If the problem persists, contact our support team.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Sorry for any inconvenience.<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const PipelineRunStarted = {
	subject: 'Pipeline "[PipelineName]" for "[ProjectName]" Has Started',
	text: `Hi **[UserFirstName]**,
  
  The pipeline run for "**[PipelineName]**" you initiated for project "**[ProjectName]**" has started.
  
  We will notify you upon completion or if any issues arise.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Pipeline "[PipelineName]" for "[ProjectName]" Has Started</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  The pipeline run for "[PipelineName]" you initiated for project "[ProjectName]" has started.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Pipeline Started</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The pipeline run for "<strong>[PipelineName]</strong>" you initiated for project "<strong>[ProjectName]</strong>" has started.</p>
            <p style="margin: 20px 0 0 0;">We will notify you upon completion or if any issues arise.</p>
          </td>
        </tr>
        
        <!-- PIPELINE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Pipeline:</td>
                      <td style="font-weight: 600;">[PipelineName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Started:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[StartTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Estimated Duration:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[EstimatedDuration]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Run ID:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[RunID]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[PipelineRunLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Progress</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const PipelineRunCompleted = {
	subject: 'Pipeline "[PipelineName]" for "[ProjectName]" is Complete!',
	text: `Hi **[UserFirstName]**,
  
  The pipeline run for "**[PipelineName]**" for your project "**[ProjectName]**" has successfully completed.
  
  View the results and generated analyses/deliverables here: [PipelineRunLink]
  
  Best regards,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Pipeline "[PipelineName]" for "[ProjectName]" is Complete!</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Good news! The pipeline run for "[PipelineName]" has successfully completed.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Pipeline Complete</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The pipeline run for "<strong>[PipelineName]</strong>" for your project "<strong>[ProjectName]</strong>" has successfully completed.</p>
          </td>
        </tr>
        
        <!-- PIPELINE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Pipeline:</td>
                      <td style="font-weight: 600;">[PipelineName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Started:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[StartTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Completed:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[CompletionTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Duration:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[Duration]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[PipelineRunLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Results</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- OUTPUTS SUMMARY -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Pipeline Outputs:</p>
            <p style="margin: 10px 0 0 0;">• [OutputCount] analyses generated</p>
            <p style="margin: 5px 0 0 0;">• [DeliverableCount] deliverables created</p>
            <p style="margin: 5px 0 0 0;">• [DataPointCount] data points processed</p>
            <p style="margin: 15px 0 0 0;">View the complete results and generated outputs by clicking the button above.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Best regards,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const PipelineRunFailed = {
	subject: 'Issue with Pipeline "[PipelineName]" for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  We encountered an issue with the pipeline run for "**[PipelineName]**" for your project "**[ProjectName]**".
  
  Details:
  \`\`\`
  [ErrorMessage]
  \`\`\`
  
  Please review the run details or contact support: [PipelineRunLink]
  
  Sorry for the trouble.
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Issue with Pipeline "[PipelineName]" for "[ProjectName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* CODE BLOCK STYLES */
  .code-block {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    overflow-x: auto;
    padding: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  We encountered an issue with the pipeline run for "[PipelineName]". Action required.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Pipeline Run Failed</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">We encountered an issue with the pipeline run for "<strong>[PipelineName]</strong>" for your project "<strong>[ProjectName]</strong>".</p>
          </td>
        </tr>
        
        <!-- PIPELINE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Pipeline:</td>
                      <td style="font-weight: 600;">[PipelineName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Started:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[StartTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Failed At:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[FailureTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Run ID:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[RunID]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ERROR MESSAGE -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Error Details:</p>
            <div style="background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 4px; font-family: Consolas, Monaco, 'Courier New', monospace; font-size: 14px; line-height: 1.4; margin: 0; overflow-x: auto; padding: 15px; white-space: pre-wrap; word-wrap: break-word; color: #e53e3e;">
[ErrorMessage]
            </div>
          </td>
        </tr>
        
        <!-- BUTTONS -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 20px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[PipelineRunLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Run Details</a>
                      </td>
                      <td width="10">&nbsp;</td>
                      <td align="center" style="border-radius: 4px;" bgcolor="#ffffff">
                        <a href="[RetryLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #4F46E5; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Retry Pipeline</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- TROUBLESHOOTING -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Troubleshooting Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Review the run details to identify the specific step that failed.</p>
            <p style="margin: 5px 0 0 0;">2. Check that all required input data and configurations are correct.</p>
            <p style="margin: 5px 0 0 0;">3. Verify that any connected integrations are working properly.</p>
            <p style="margin: 5px 0 0 0;">4. Make necessary adjustments and retry the pipeline.</p>
            <p style="margin: 5px 0 0 0;">5. If the problem persists, contact our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Sorry for the trouble,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Deliverables ---

const DeliverableGenerated = {
	subject: 'Your Deliverable "[DeliverableTitle]" is Ready!',
	text: `Hi **[UserFirstName]**,
  
  Good news! Your deliverable, "**[DeliverableTitle]**", for project "**[ProjectName]**" has been successfully generated.
  
  You can access it here: [DeliverableLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your Deliverable "[DeliverableTitle]" is Ready!</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Good news! Your deliverable "[DeliverableTitle]" has been successfully generated and is ready for you to view.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Deliverable Ready!</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">Good news! Your deliverable, "<strong>[DeliverableTitle]</strong>", for project "<strong>[ProjectName]</strong>" has been successfully generated.</p>
          </td>
        </tr>
        
        <!-- DELIVERABLE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Deliverable:</td>
                      <td style="font-weight: 600;">[DeliverableTitle]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Type:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DeliverableType]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Generated On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[GenerationDate]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- PREVIEW IMAGE (if applicable) -->
        <tr>
          <td bgcolor="#ffffff" align="center" style="padding: 0 30px 20px 30px;">
            <img src="/placeholder.svg?height=200&width=540" width="540" height="200" style="display: block; border: 0px; width: 100%; max-width: 540px; height: auto; border-radius: 4px; margin: 0 auto;" alt="Deliverable Preview" />
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[DeliverableLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Deliverable</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- NEXT STEPS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Next Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Review the generated deliverable.</p>
            <p style="margin: 5px 0 0 0;">2. Share it with your team or stakeholders.</p>
            <p style="margin: 5px 0 0 0;">3. Provide feedback or make adjustments as needed.</p>
            <p style="margin: 5px 0 0 0;">4. or integrate the deliverable with your other tools.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const DeliverableGenerationFailed = {
	subject: 'Problem Generating Deliverable "[DeliverableTitle]"',
	text: `Hi **[UserFirstName]**,
  
  We encountered an issue while generating the deliverable "**[DeliverableTitle]**" for project "**[ProjectName]**".
  
  Error details:
  \`\`\`
  [ErrorMessage]
  \`\`\`
  
  Please try again or contact support: [SupportLink]
  
  Sorry for any inconvenience.
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Problem Generating Deliverable "[DeliverableTitle]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* CODE BLOCK STYLES */
  .code-block {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    overflow-x: auto;
    padding: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  We encountered an issue while generating your deliverable. Action required.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Deliverable Generation Failed</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">We encountered an issue while generating the deliverable "<strong>[DeliverableTitle]</strong>" for project "<strong>[ProjectName]</strong>".</p>
          </td>
        </tr>
        
        <!-- DELIVERABLE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Deliverable:</td>
                      <td style="font-weight: 600;">[DeliverableTitle]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Type:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DeliverableType]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Attempted On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[AttemptTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ERROR MESSAGE -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Error Details:</p>
            <div style="background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 4px; font-family: Consolas, Monaco, 'Courier New', monospace; font-size: 14px; line-height: 1.4; margin: 0; overflow-x: auto; padding: 15px; white-space: pre-wrap; word-wrap: break-word; color: #e53e3e;">
[ErrorMessage]
            </div>
          </td>
        </tr>
        
        <!-- BUTTONS -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 20px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[RetryLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Try Again</a>
                      </td>
                      <td width="10">&nbsp;</td>
                      <td align="center" style="border-radius: 4px;" bgcolor="#ffffff">
                        <a href="[SupportLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #4F46E5; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Contact Support</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- TROUBLESHOOTING -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Troubleshooting Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Check that all required input data for the deliverable is available and valid.</p>
            <p style="margin: 5px 0 0 0;">2. Verify that any connected integrations are working properly.</p>
            <p style="margin: 5px 0 0 0;">3. Try generating the deliverable again using the "Try Again" button above.</p>
            <p style="margin: 5px 0 0 0;">4. If the problem persists, contact our support team for assistance.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Sorry for the inconvenience,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Tasks ---

const TaskAssigned = {
	subject: 'New Task Assigned to You: "[TaskTitle]"',
	text: `Hi **[UserFirstName]**,
  
  A new task, "**[TaskTitle]**", has been assigned to you in the project "**[ProjectName]**" by **[AssignerName]**.
  
  *   **Due Date:** [TaskDueDate]
  *   **Priority:** [TaskPriority]
  
  View task details: [TaskLink]
  
  Best regards,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Task Assigned to You</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
    
    /* PRIORITY COLORS */
    .priority-high {
      color: #e53e3e;
    }
    .priority-medium {
      color: #dd6b20;
    }
    .priority-low {
      color: #38a169;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    A new task has been assigned to you in IdeaLens.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">New Task Assigned</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">A new task, "<strong>[TaskTitle]</strong>", has been assigned to you in the project "<strong>[ProjectName]</strong>" by <strong>[AssignerName]</strong>.</p>
            </td>
          </tr>
          
          <!-- TASK INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Task:</td>
                        <td style="font-weight: 600;">[TaskTitle]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Due Date:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[TaskDueDate]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Priority:</td>
                        <td class="priority-[TaskPriorityLower]" style="font-weight: 600; padding-top: 10px;">[TaskPriority]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[TaskLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Task</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Best regards,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const TaskStatusChanged = {
	subject: 'Task Update: "[TaskTitle]" is now [NewTaskStatus]',
	text: `Hi **[UserFirstName]**,
  
  The status of the task "**[TaskTitle]**" in project "**[ProjectName]**" has been updated to **[NewTaskStatus]** by **[UpdaterName]**.
  
  View task details: [TaskLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Task Update: "[TaskTitle]" is now [NewTaskStatus]</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
  
  /* STATUS BADGE STYLES */
  .status-badge {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .status-todo {
    background-color: #E0F2FE;
    color: #0369A1;
  }
  .status-in-progress {
    background-color: #FEF3C7;
    color: #92400E;
  }
  .status-in-review {
    background-color: #E0E7FF;
    color: #4338CA;
  }
  .status-done {
    background-color: #DCFCE7;
    color: #166534;
  }
  .status-blocked {
    background-color: #FEE2E2;
    color: #B91C1C;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  The status of task "[TaskTitle]" has been updated to [NewTaskStatus].
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Task Status Update</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The status of the task "<strong>[TaskTitle]</strong>" in project "<strong>[ProjectName]</strong>" has been updated to <span class="status-[StatusClass]" style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; background-color: #[StatusBgColor]; color: #[StatusTextColor];">[NewTaskStatus]</span> by <strong>[UpdaterName]</strong>.</p>
          </td>
        </tr>
        
        <!-- TASK INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Task:</td>
                      <td style="font-weight: 600;">[TaskTitle]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Previous Status:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[PreviousTaskStatus]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">New Status:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[NewTaskStatus]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Updated By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[UpdaterName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Due Date:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[TaskDueDate]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- COMMENTS (if any) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Comments:</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #4F46E5; font-style: italic; margin: 10px 0; padding: 15px; border-radius: 0 4px 4px 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [StatusUpdateComment]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[TaskLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Task</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">You're receiving this email because you're a member of the "[ProjectName]" project. <a href="[NotificationSettingsLink]" style="color: #4F46E5; text-decoration: underline;">Manage notification settings</a>.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const TaskDueSoon = {
	subject: 'Reminder: Task "[TaskTitle]" is Due Soon',
	text: `Hi **[UserFirstName]**,
  
  This is a friendly reminder that the task "**[TaskTitle]**" in project "**[ProjectName]**" is due on **[TaskDueDate]**.
  
  View task details: [TaskLink]
  
  Best regards,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reminder: Task is Due Soon</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
    
    /* PRIORITY COLORS */
    .priority-high {
      color: #e53e3e;
    }
    .priority-medium {
      color: #dd6b20;
    }
    .priority-low {
      color: #38a169;
    }
    
    /* CALENDAR ICON */
    .calendar-icon {
      width: 50px;
      height: 50px;
      background-color: #4F46E5;
      border-radius: 4px;
      color: #ffffff;
      text-align: center;
      margin: 0 auto;
    }
    .calendar-month {
      font-size: 10px;
      text-transform: uppercase;
      padding-top: 5px;
      font-weight: 700;
    }
    .calendar-day {
      font-size: 24px;
      font-weight: 700;
      line-height: 1;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Reminder: Your task "[TaskTitle]" is due soon.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Task Due Soon</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">This is a friendly reminder that the task "<strong>[TaskTitle]</strong>" in project "<strong>[ProjectName]</strong>" is due on <strong>[TaskDueDate]</strong>.</p>
            </td>
          </tr>
          
          <!-- DUE DATE HIGHLIGHT -->
          <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 0 30px 20px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 400px;">
                <tr>
                  <td align="center" style="padding: 20px; background-color: #f9f9f9; border-radius: 4px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div class="calendar-icon">
                            <div class="calendar-month">[DueMonth]</div>
                            <div class="calendar-day">[DueDay]</div>
                          </div>
                        </td>
                        <td width="20">&nbsp;</td>
                        <td style="font-family: Arial, sans-serif; font-size: 16px; font-weight: 600; color: #333333;">
                          Due in [DaysRemaining] days
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- TASK INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Task:</td>
                        <td style="font-weight: 600;">[TaskTitle]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Priority:</td>
                        <td class="priority-[TaskPriorityLower]" style="font-weight: 600; padding-top: 10px;">[TaskPriority]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Assigned by:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[AssignerName]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[TaskLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Task</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Best regards,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const TaskMention = {
	subject: 'You Were Mentioned in Task "[TaskTitle]"',
	text: `Hi **[UserFirstName]**,
  
  **[MentionerName]** mentioned you in a comment on the task "**[TaskTitle]**" in project "**[ProjectName]**".
  
  > [CommentExcerpt]...
  
  View task and comment: [TaskLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You Were Mentioned in Task "[TaskTitle]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* BLOCKQUOTE STYLES */
  .comment-quote {
    background-color: #f9f9f9;
    border-left: 4px solid #4F46E5;
    font-style: italic;
    margin: 10px 0;
    padding: 15px;
    border-radius: 0 4px 4px 0;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  [MentionerName] mentioned you in a comment on task "[TaskTitle]".
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">You Were Mentioned</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;"><strong>[MentionerName]</strong> mentioned you in a comment on the task "<strong>[TaskTitle]</strong>" in project "<strong>[ProjectName]</strong>".</p>
          </td>
        </tr>
        
        <!-- COMMENT INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Task:</td>
                      <td style="font-weight: 600;">[TaskTitle]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">From:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[MentionerName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Time:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[CommentTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- COMMENT CONTENT -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Comment:</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #4F46E5; font-style: italic; margin: 10px 0; padding: 15px; border-radius: 0 4px 4px 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [CommentExcerpt]...
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[TaskLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Task & Comment</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px;">You're receiving this email because you're a member of the "[ProjectName]" project. <a href="[NotificationSettingsLink]" style="color: #4F46E5; text-decoration: underline;">Manage notification settings</a>.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Integrations ---

const IntegrationConnected = {
	subject: '[IntegrationProvider] Integration Successful for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  Your **[IntegrationProvider]** account has been successfully connected to the project "**[ProjectName]**" on IdeaLens.
  
  You can now [brief benefit, e.g., sync issues, analyze repositories].
  Manage your integrations here: [ProjectIntegrationsLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Integration Successful for Your Project</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your [IntegrationProvider] integration has been successfully connected.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Integration Successful</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Your <strong>[IntegrationProvider]</strong> account has been successfully connected to the project "<strong>[ProjectName]</strong>" on IdeaLens.</p>
              <p style="margin: 20px 0 0 0;">You can now [brief benefit, e.g., sync issues, analyze repositories]. Manage your integrations using the button below.</p>
            </td>
          </tr>
          
          <!-- INTEGRATION INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Integration:</td>
                        <td style="font-weight: 600;">[IntegrationProvider]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Connected:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ConnectionDateTime]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Connected by:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ConnectorName]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[ProjectIntegrationsLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Manage Integrations</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- WHAT'S NEXT -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0; font-weight: 600;">What you can do now:</p>
              <p style="margin: 10px 0 0 0;">1. Configure synchronization settings</p>
              <p style="margin: 5px 0 0 0;">2. Set up automated workflows</p>
              <p style="margin: 5px 0 0 0;">3. Explore integration-specific features</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const IntegrationDisconnected = {
	subject: '[IntegrationProvider] Integration Disconnected for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  The **[IntegrationProvider]** integration for your project "**[ProjectName]**" has been disconnected.
  
  If this was unintentional, you can reconnect it here: [ProjectIntegrationsLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[IntegrationProvider] Integration Disconnected for "[ProjectName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  The [IntegrationProvider] integration for your project has been disconnected.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Integration Disconnected</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The <strong>[IntegrationProvider]</strong> integration for your project "<strong>[ProjectName]</strong>" has been disconnected.</p>
          </td>
        </tr>
        
        <!-- INTEGRATION INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Integration:</td>
                      <td style="font-weight: 600;">[IntegrationProvider]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Disconnected On:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DisconnectionTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Disconnected By:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DisconnectedBy]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- REASON (if available) -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Reason (if provided):</p>
            <div style="background-color: #f9f9f9; margin: 10px 0; padding: 15px; border-radius: 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
              [DisconnectionReason]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ProjectIntegrationsLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Reconnect Integration</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- IMPACT INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">What this means:</p>
            <p style="margin: 10px 0 0 0;">1. Your project will no longer receive data or updates from [IntegrationProvider].</p>
            <p style="margin: 5px 0 0 0;">2. Any automated workflows that depend on this integration may be affected.</p>
            <p style="margin: 5px 0 0 0;">3. Existing data that was previously synced will remain in your project.</p>
            <p style="margin: 15px 0 0 0;">If this disconnection was unintentional, you can reconnect the integration using the button above.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const IntegrationSyncComplete = {
	subject: '[IntegrationProvider] Sync Complete for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  The data synchronization with **[IntegrationProvider]** for your project "**[ProjectName]**" has completed successfully.
  
  [Optional: SyncDetails]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[IntegrationProvider] Sync Complete for "[ProjectName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  The data synchronization with [IntegrationProvider] for your project has completed successfully.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Integration Sync Complete</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">The data synchronization with <strong>[IntegrationProvider]</strong> for your project "<strong>[ProjectName]</strong>" has completed successfully.</p>
          </td>
        </tr>
        
        <!-- SYNC INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Integration:</td>
                      <td style="font-weight: 600;">[IntegrationProvider]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Completed:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[SyncCompletionTime]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Duration:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[SyncDuration]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- SYNC DETAILS -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Sync Details:</p>
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="50%" style="color: #666666; font-size: 14px;">Items Synced:</td>
                      <td width="50%" style="font-weight: 600; text-align: right;">[ItemsSynced]</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="50%" style="color: #666666; font-size: 14px;">Items Added:</td>
                      <td width="50%" style="font-weight: 600; text-align: right;">[ItemsAdded]</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="50%" style="color: #666666; font-size: 14px;">Items Updated:</td>
                      <td width="50%" style="font-weight: 600; text-align: right;">[ItemsUpdated]</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="50%" style="color: #666666; font-size: 14px;">Next Scheduled Sync:</td>
                      <td width="50%" style="font-weight: 600; text-align: right;">[NextSyncTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ProjectLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Project</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const IntegrationSyncFailed = {
	subject: '[IntegrationProvider] Sync Failed for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  We encountered an issue during data synchronization with **[IntegrationProvider]** for your project "**[ProjectName]**".
  
  Error:
  \`\`\`
  [SyncErrorMessage]
  \`\`\`
  
  Please check your integration settings or try again: [ProjectIntegrationsLink]
  
  If the problem persists, contact support.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[IntegrationProvider] Sync Failed for "[ProjectName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* CODE BLOCK STYLES */
  .code-block {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    overflow-x: auto;
    padding: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  We encountered an issue during data synchronization with [IntegrationProvider]. Action required.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Integration Sync Failed</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">We encountered an issue during data synchronization with <strong>[IntegrationProvider]</strong> for your project "<strong>[ProjectName]</strong>".</p>
          </td>
        </tr>
        
        <!-- ERROR INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Integration:</td>
                      <td style="font-weight: 600;">[IntegrationProvider]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Time:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[SyncFailureTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ERROR MESSAGE -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Error Message:</p>
            <div style="background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 4px; font-family: Consolas, Monaco, 'Courier New', monospace; font-size: 14px; line-height: 1.4; margin: 0; overflow-x: auto; padding: 15px; white-space: pre-wrap; word-wrap: break-word; color: #e53e3e;">
[SyncErrorMessage]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ProjectIntegrationsLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Check Integration Settings</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- TROUBLESHOOTING -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Troubleshooting Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Check your [IntegrationProvider] credentials and permissions.</p>
            <p style="margin: 5px 0 0 0;">2. Verify that the integration is properly configured.</p>
            <p style="margin: 5px 0 0 0;">3. Try reconnecting the integration.</p>
            <p style="margin: 5px 0 0 0;">4. If the problem persists, contact our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- GitHub Specific AI Actions ---

const GitHubAIActionSuccess = {
	subject: 'AI Action Successful on GitHub for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  An AI-driven action (**[GitHubAIActionType]**) was successfully performed on GitHub for your project "**[ProjectName]**".
  
  *   **Entity:** [GitHubEntityType] - [GitHubEntityLink]
  *   **Details:** [ActionDetails]
  
  View log: [ActionLogLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Action Successful on GitHub</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
    
    /* CODE BLOCK */
    .code-block {
      font-family: 'Courier New', Courier, monospace;
      background-color: #f2f2f2;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.5;
      color: #333333;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    AI-driven action was successfully performed on GitHub for your project.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">AI Action Successful</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">An AI-driven action (<strong>[GitHubAIActionType]</strong>) was successfully performed on GitHub for your project "<strong>[ProjectName]</strong>".</p>
            </td>
          </tr>
          
          <!-- ACTION INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px;">Action Type:</td>
                        <td style="font-weight: 600;">[GitHubAIActionType]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Entity:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[GitHubEntityType]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Project:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[ProjectName]</td>
                      </tr>
                      <tr>
                        <td width="120" style="color: #999999; font-size: 14px; padding-top: 10px;">Completed:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[CompletionDateTime]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- ACTION DETAILS -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #333333;">Details:</p>
              <div class="code-block" style="white-space: pre-wrap;">[ActionDetails]</div>
            </td>
          </tr>
          
          <!-- BUTTONS -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px; margin-right: 10px;" bgcolor="#4F46E5">
                          <a href="[GitHubEntityLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View on GitHub</a>
                        </td>
                        <td width="20">&nbsp;</td>
                        <td align="center" style="border-radius: 4px;" bgcolor="#ffffff">
                          <a href="[ActionLogLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #4F46E5; text-decoration: none; padding: 10px 23px; border-radius: 4px; border: 2px solid #4F46E5; display: inline-block; font-weight: 600;">View Log</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const GitHubAIActionFailed = {
	subject: 'AI Action Failed on GitHub for "[ProjectName]"',
	text: `Hi **[UserFirstName]**,
  
  An AI-driven action (**[GitHubAIActionType]**) failed to execute on GitHub for your project "**[ProjectName]**".
  
  *   **Entity:** [GitHubEntityType] - [GitHubEntityLink]
  *   **Error:**
      \`\`\`
      [ErrorMessage]
      \`\`\`
  
  Please review the action log for more details: [ActionLogLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AI Action Failed on GitHub for "[ProjectName]"</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }

  /* CODE BLOCK STYLES */
  .code-block {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: Consolas, Monaco, 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    overflow-x: auto;
    padding: 15px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  An AI-driven action failed to execute on GitHub for your project. Action required.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">AI Action Failed</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">An AI-driven action (<strong>[GitHubAIActionType]</strong>) failed to execute on GitHub for your project "<strong>[ProjectName]</strong>".</p>
          </td>
        </tr>
        
        <!-- ERROR INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Project:</td>
                      <td style="font-weight: 600;">[ProjectName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Action Type:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[GitHubAIActionType]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Entity:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[GitHubEntityType] - <a href="[GitHubEntityLink]" target="_blank" style="color: #4F46E5; text-decoration: underline;">[GitHubEntityName]</a></td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Time:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[FailureTime]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- ERROR MESSAGE -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <p style="margin: 0 0 10px 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 600;">Error Message:</p>
            <div style="background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 4px; font-family: Consolas, Monaco, 'Courier New', monospace; font-size: 14px; line-height: 1.4; margin: 0; overflow-x: auto; padding: 15px; white-space: pre-wrap; word-wrap: break-word; color: #e53e3e;">
[ErrorMessage]
            </div>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[ActionLogLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Action Log</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- TROUBLESHOOTING -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Troubleshooting Steps:</p>
            <p style="margin: 10px 0 0 0;">1. Review the action log for detailed error information.</p>
            <p style="margin: 5px 0 0 0;">2. Check your GitHub repository permissions and settings.</p>
            <p style="margin: 5px 0 0 0;">3. Verify that the AI action configuration is correct.</p>
            <p style="margin: 5px 0 0 0;">4. If the issue persists, contact our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- Billing & Subscriptions ---

const SubscriptionStarted = {
	subject: 'Your IdeaLens "[PlanName]" Subscription is Active!',
	text: `Hi **[UserFirstName]**,
  
  Thank you for subscribing to the "**[PlanName]**" plan on IdeaLens for your workspace "**[WorkspaceName]**"!
  
  Your subscription is now active. You can manage your subscription and view billing details here: [BillingPortalLink]
  
  We're thrilled to have you with us!
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your IdeaLens Subscription is Active!</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your IdeaLens subscription is now active!
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Subscription Active!</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Thank you for subscribing to the "<strong>[PlanName]</strong>" plan on IdeaLens for your workspace "<strong>[WorkspaceName]</strong>"!</p>
              <p style="margin: 20px 0 0 0;">Your subscription is now active. You can manage your subscription and view billing details using the button below.</p>
            </td>
          </tr>
          
          <!-- SUBSCRIPTION INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px;">Plan:</td>
                        <td style="font-weight: 600;">[PlanName]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Billing Cycle:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[BillingCycle]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Next Billing Date:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[NextBillingDate]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[BillingPortalLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Manage Subscription</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- PLAN FEATURES -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; border-top: 1px solid #dddddd;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 25px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 700;">
                    <p style="margin: 0;">Your [PlanName] Plan includes:</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 20px 0 0 0;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Feature 1" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Feature 1</p>
                        </td>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Feature 2" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Feature 2</p>
                        </td>
                        <td width="33%" align="center">
                          <img src="/placeholder.svg?height=50&width=50" width="50" height="50" alt="Feature 3" style="display: block; margin: 0 auto;" />
                          <p style="margin: 10px 0 0 0; color: #666666; font-family: Arial, sans-serif; font-size: 14px;">Feature 3</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">We're thrilled to have you with us!<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const SubscriptionCanceled = {
	subject: 'Your IdeaLens "[PlanName]" Subscription Has Been Canceled',
	text: `Hi **[UserFirstName]**,
  
  This confirms that your "**[PlanName]**" subscription for the workspace "**[WorkspaceName]**" has been canceled.
  
  You will continue to have access to **[PlanName]** features until your current billing period ends on **[CurrentPeriodEndDate]**.
  
  If you change your mind, you can reactivate your subscription here: [BillingPortalLink]
  
  Thanks for being a customer,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your IdeaLens Subscription Has Been Canceled</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your IdeaLens subscription has been canceled.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Subscription Canceled</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">This confirms that your "<strong>[PlanName]</strong>" subscription for the workspace "<strong>[WorkspaceName]</strong>" has been canceled.</p>
              <p style="margin: 20px 0 0 0;">You will continue to have access to <strong>[PlanName]</strong> features until your current billing period ends on <strong>[CurrentPeriodEndDate]</strong>.</p>
            </td>
          </tr>
          
          <!-- SUBSCRIPTION INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px;">Plan:</td>
                        <td style="font-weight: 600;">[PlanName]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Access Until:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[CurrentPeriodEndDate]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Canceled On:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[CancellationDate]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[BillingPortalLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Reactivate Subscription</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- WHAT HAPPENS NEXT -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0; font-weight: 600;">What happens next?</p>
              <p style="margin: 10px 0 0 0;">1. You'll continue to have access to all features until <strong>[CurrentPeriodEndDate]</strong>.</p>
              <p style="margin: 5px 0 0 0;">2. After this date, your workspace will be downgraded to the free plan.</p>
              <p style="margin: 5px 0 0 0;">3. You can reactivate your subscription at any time before the end date to maintain uninterrupted access.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks for being a customer,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const SubscriptionEndingSoon = {
	// or Renewal Reminder
	subject: 'Your IdeaLens "[PlanName]" Subscription is Ending Soon',
	text: `Hi **[UserFirstName]**,
  
  This is a reminder that your "**[PlanName]**" subscription for the workspace "**[WorkspaceName]**" is set to [end/renew] on **[NextBillingDate]**.
  
  If you wish to make changes or update your payment method, please visit your billing settings: [BillingPortalLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your IdeaLens "[PlanName]" Subscription is Ending Soon</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Your IdeaLens subscription is ending soon. Take action to maintain your service.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Subscription Ending Soon</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">This is a reminder that your "<strong>[PlanName]</strong>" subscription for the workspace "<strong>[WorkspaceName]</strong>" is set to [end/renew] on <strong>[NextBillingDate]</strong>.</p>
          </td>
        </tr>
        
        <!-- SUBSCRIPTION INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Plan:</td>
                      <td style="font-weight: 600;">[PlanName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">[End/Renewal] Date:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[NextBillingDate]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Amount:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[BillingAmount] [Currency]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[BillingPortalLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Manage Subscription</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- WHAT TO KNOW -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">What you should know:</p>
            <p style="margin: 10px 0 0 0;">1. If you have automatic renewal enabled, your subscription will be renewed automatically on [NextBillingDate].</p>
            <p style="margin: 5px 0 0 0;">2. If you wish to make changes to your plan or update your payment method, please visit your <a href="[BillingPortalLink]" target="_blank" style="color: #4F46E5; text-decoration: underline;">billing settings</a>.</p>
            <p style="margin: 5px 0 0 0;">3. If you have any questions about your subscription, please contact our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks for being a customer,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

const PaymentSuccessful = {
	subject: 'Your IdeaLens Payment Was Successful',
	text: `Hi **[UserFirstName]**,
  
  Thank you for your payment! We have successfully processed your payment of **[Amount] [Currency]** for [PurposeDescription, e.g., your IdeaLens Pro subscription / one-time pipeline run].
  
  *   **Transaction ID:** [TransactionID]
  
  You can view your invoice here: [InvoiceLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//  type="html"
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your IdeaLens Payment Was Successful</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Thank you for your payment! Your transaction was successful.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Payment Successful</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Thank you for your payment! We have successfully processed your payment of <strong>[Amount] [Currency]</strong> for [PurposeDescription].</p>
            </td>
          </tr>
          
          <!-- PAYMENT INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px;">Amount:</td>
                        <td style="font-weight: 600;">[Amount] [Currency]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Date:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[PaymentDate]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Transaction ID:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[TransactionID]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Payment Method:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[PaymentMethod]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[InvoiceLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Invoice</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const PaymentFailed = {
	subject: 'Action Required: Your IdeaLens Payment Failed',
	text: `Hi **[UserFirstName]**,
  
  Unfortunately, your recent payment of **[Amount] [Currency]** for [PurposeDescription] for your IdeaLens workspace "**[WorkspaceName]**" failed to process.
  
  *   **Reason:** [FailureReason]
  
  Please update your payment information to maintain access to your services: [BillingUpdateLink]
  
  If you have any questions, please contact support.
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Action Required: Your IdeaLens Payment Failed</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Your payment for IdeaLens failed. Action required to maintain your service.
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Payment Failed</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">Unfortunately, your recent payment of <strong>[Amount] [Currency]</strong> for [PurposeDescription] for your IdeaLens workspace "<strong>[WorkspaceName]</strong>" failed to process.</p>
            </td>
          </tr>
          
          <!-- PAYMENT INFO -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
                <tr>
                  <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px;">Amount:</td>
                        <td style="font-weight: 600;">[Amount] [Currency]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Reason:</td>
                        <td style="font-weight: 600; padding-top: 10px; color: #e53e3e;">[FailureReason]</td>
                      </tr>
                      <tr>
                        <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Date:</td>
                        <td style="font-weight: 600; padding-top: 10px;">[FailureDate]</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- BUTTON -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#e53e3e">
                          <a href="[BillingUpdateLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #e53e3e; display: inline-block; font-weight: 600;">Update Payment Method</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- WHAT HAPPENS NEXT -->
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
              <p style="margin: 20px 0 0 0; font-weight: 600;">What happens next?</p>
              <p style="margin: 10px 0 0 0;">1. We'll automatically retry the payment in <strong>[RetryDays]</strong> days.</p>
              <p style="margin: 5px 0 0 0;">2. To avoid service interruption, please update your payment information as soon as possible.</p>
              <p style="margin: 5px 0 0 0;">3. If you have any questions, please contact our support team at <a href="mailto:[SupportEmail]" style="color: #4F46E5; text-decoration: underline;">[SupportEmail]</a>.</p>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks,<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

const InvoiceReady = {
	subject: 'Your IdeaLens Invoice #[InvoiceNumber] is Ready',
	text: `Hi **[UserFirstName]**,
  
  Your latest invoice **#[InvoiceNumber]** for your IdeaLens workspace "**[WorkspaceName]**" is now available.
  
  *   **Amount Due:** [AmountDue] [Currency]
  *   **Due Date:** [DueDate]
  
  You can view and download your invoice here: [InvoiceLink]
  
  Thanks,
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Your IdeaLens Invoice #[InvoiceNumber] is Ready</title>
<!--[if mso]>
<style type="text/css">
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
<style type="text/css">
  /* Client-specific resets */
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  
  /* Reset styles */
  body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  table { border-collapse: collapse !important; }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width: 600px) {
    .img-max {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
    .max-width {
      max-width: 100% !important;
    }
    .mobile-wrapper {
      width: 85% !important;
      max-width: 85% !important;
    }
    .mobile-padding {
      padding-left: 5% !important;
      padding-right: 5% !important;
    }
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
<!-- HIDDEN PREHEADER TEXT -->
<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
  Your IdeaLens invoice #[InvoiceNumber] is now available for viewing and payment.
</div>

<table border="0" cellpadding="0" cellspacing="0" width="100%">
  <tr>
    <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
      <!-- HEADER -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
            <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
            <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">Invoice Ready</h1>
          </td>
        </tr>
      </table>
      
      <!-- MAIN CONTENT -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
            <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
            <p style="margin: 20px 0 0 0;">Your latest invoice <strong>#[InvoiceNumber]</strong> for your IdeaLens workspace "<strong>[WorkspaceName]</strong>" is now available.</p>
          </td>
        </tr>
        
        <!-- INVOICE INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; border-radius: 4px;">
              <tr>
                <td style="padding: 20px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; line-height: 25px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px;">Invoice #:</td>
                      <td style="font-weight: 600;">[InvoiceNumber]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Amount Due:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[AmountDue] [Currency]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Due Date:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[DueDate]</td>
                    </tr>
                    <tr>
                      <td width="150" style="color: #999999; font-size: 14px; padding-top: 10px;">Workspace:</td>
                      <td style="font-weight: 600; padding-top: 10px;">[WorkspaceName]</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- BUTTON -->
        <tr>
          <td bgcolor="#ffffff" align="left">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                  <table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                        <a href="[InvoiceLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">View Invoice</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        
        <!-- PAYMENT INFO -->
        <tr>
          <td bgcolor="#ffffff" align="left" style="padding: 0 30px 20px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 20px; border-top: 1px solid #dddddd;">
            <p style="margin: 20px 0 0 0; font-weight: 600;">Payment Information</p>
            <p style="margin: 10px 0 0 0;">If you have automatic payments enabled, this amount will be charged to your default payment method on file.</p>
            <p style="margin: 10px 0 0 0;">If you need to update your payment method or have any questions about your invoice, please visit your <a href="[BillingPortalLink]" target="_blank" style="color: #4F46E5; text-decoration: underline;">billing settings</a>.</p>
          </td>
        </tr>
        
        <!-- FOOTER -->
        <tr>
          <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
            <p style="margin: 0;">Thanks for your business,<br/>The IdeaLens Team</p>
            <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
};

// --- General ---

const GeneralAnnouncement = {
	subject: 'Important Update from IdeaLens: [AnnouncementTitle]',
	text: `Hi **[UserFirstName]**,
  
  We have an important announcement regarding IdeaLens:
  
  [AnnouncementBody]
  
  For more details, please visit: [OptionalLink]
  
  Thanks for being part of our community!
  The IdeaLens Team`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Important Update from IdeaLens</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
  <![endif]-->
  <style type="text/css">
    /* Client-specific resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Reset styles */
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    
    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    
    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      .img-max {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .max-width {
        max-width: 100% !important;
      }
      .mobile-wrapper {
        width: 85% !important;
        max-width: 85% !important;
      }
      .mobile-padding {
        padding-left: 5% !important;
        padding-right: 5% !important;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: Arial, sans-serif; line-height: 1.4;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    Important update from IdeaLens: [AnnouncementTitle]
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td bgcolor="#f6f6f6" align="center" style="padding: 10px 0 30px 0;">
        <!-- HEADER -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Arial, sans-serif; font-weight: 400;">
              <img alt="IdeaLens Logo" src="/placeholder.svg?height=60&width=200" width="200" height="60" style="display: block; border: 0px;" />
              <h1 style="margin: 20px 0 0 0; font-size: 24px; font-weight: 700; letter-spacing: -1px; line-height: 28px;">[AnnouncementTitle]</h1>
            </td>
          </tr>
        </table>
        
        <!-- MAIN CONTENT -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px;">
              <p style="margin: 0;">Hi <strong>[UserFirstName]</strong>,</p>
              <p style="margin: 20px 0 0 0;">We have an important announcement regarding IdeaLens:</p>
              <p style="margin: 20px 0 0 0;">[AnnouncementBody]</p>
            </td>
          </tr>
          
          <!-- BUTTON (OPTIONAL) -->
          <tr>
            <td bgcolor="#ffffff" align="left">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 0 30px 40px 30px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 4px;" bgcolor="#4F46E5">
                          <a href="[OptionalLink]" target="_blank" style="font-size: 16px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 4px; border: 1px solid #4F46E5; display: inline-block; font-weight: 600;">Learn More</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER -->
          <tr>
            <td bgcolor="#f6f6f6" align="center" style="padding: 30px 30px 30px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              <p style="margin: 0;">Thanks for being part of our community!<br/>The IdeaLens Team</p>
              <p style="margin: 20px 0 0 0;">© 2025 IdeaLens. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
};

// --- Placeholder Keys ---
const EMAIL_PLACEHOLDER_KEYS = [
	'VerificationLink',
	'UserFirstName',
	'DashboardLink',
	'VerificationCode',
	'PasswordResetLink',
	'SupportEmail',
	'OldEmail',
	'NewEmail',
	'InviteeName',
	'InviterName',
	'InviterEmail',
	'WorkspaceName',
	'RoleName',
	'InviteLink',
	'ExpiryDate',
	'WorkspaceMembersLink',
	'InviteeEmail',
	'UserFirstName',
	'AdminName',
	'WorkspaceLink',
	'ProjectName',
	'ManagerName',
	'ProjectRoleName',
	'ProjectLink',
	'IdeaTitle',
	'IdeaLink',
	'NewRoleName',
	'NewProjectRoleName',
	'UpdaterName',
	'AnalysisType',
	'AnalysisResultsLink',
	'ErrorMessage',
	'SupportLink',
	'PipelineName',
	'PipelineRunLink',
	'DeliverableTitle',
	'DeliverableLink',
	'TaskTitle',
	'TaskDueDate',
	'TaskPriority',
	'TaskLink',
	'NewTaskStatus',
	'MentionerName',
	'CommentExcerpt',
	'IntegrationProvider',
	'ProjectIntegrationsLink',
	'SyncDetails',
	'SyncErrorMessage',
	'GitHubAIActionType',
	'GitHubEntityType',
	'GitHubEntityLink',
	'ActionDetails',
	'ActionLogLink',
	'PlanName',
	'BillingPortalLink',
	'CurrentPeriodEndDate',
	'NextBillingDate',
	'Amount',
	'Currency',
	'PurposeDescription',
	'TransactionID',
	'InvoiceLink',
	'FailureReason',
	'BillingUpdateLink',
	'InvoiceNumber',
	'AmountDue',
	'DueDate',
	'AnnouncementTitle',
	'AnnouncementBody',
	'OptionalLink',
	'DeviceType',
	'Browser',
	'Location',
	'LoginDateTime',
	'IPAddress',
	'SecureAccountLink',
  'ChangeDateTime',
  'RequestDateTime',
  'DeviceInfo'
];

export {
  LoginAlert,
	EMAIL_PLACEHOLDER_KEYS,
	EmailVerification,
	GeneralAnnouncement,
	AnalysisCompleted,
	AnalysisFailed,
	AnalysisStarted,
	DeliverableGenerated,
	DeliverableGenerationFailed,
	EmailChangeNoticeToOldEmail,
	EmailChangeVerification,
	GitHubAIActionFailed,
	GitHubAIActionSuccess,
	IdeaStatusChanged,
	IdeaSubmitted,
	IntegrationConnected,
	IntegrationDisconnected,
	IntegrationSyncComplete,
	IntegrationSyncFailed,
	InvoiceReady,
	PasswordResetRequest,
	PasswordResetSuccess,
	PaymentFailed,
	PaymentSuccessful,
	PipelineRunCompleted,
	PipelineRunFailed,
	PipelineRunStarted,
	ProjectRoleChanged,
	SubscriptionCanceled,
	SubscriptionEndingSoon,
	SubscriptionStarted,
	TaskAssigned,
	TaskDueSoon,
	TaskMention,
	TaskStatusChanged,
	UserAddedToProject,
	UserAddedToWorkspace,
	UserRemovedFromProject,
	UserRemovedFromWorkspace,
	WelcomeEmail,
	WorkspaceInvite,
	WorkspaceInviteAccepted,
	WorkspaceRoleChanged,
  
};
