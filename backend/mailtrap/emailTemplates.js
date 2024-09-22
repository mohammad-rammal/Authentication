export const VERIFICATION_EMAIL_TEMPLATE = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #e9f1f5;
                color: #444;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(to right, #007BFF, #0056b3);
                color: white;
                text-align: center;
                padding: 30px;
                border-radius: 10px 10px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
            }
            .content {
                padding: 20px;
            }
            .code {
                font-size: 36px;
                font-weight: bold;
                color: #007BFF;
                letter-spacing: 5px;
                text-align: center;
                margin: 20px 0;
                background: #f0f8ff;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                color: #888;
                font-size: 0.9em;
            }
            a {
                text-decoration: none;
                color: #007BFF;
                font-weight: bold;
            }
            .socials {
                margin-top: 20px;
            }
            .socials img {
                width: 30px;
                margin: 0 10px;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✨ Verify Your Email!</h1>
                </div>
                <div class="content">
                    <p>Hey there!</p>
                    <p>We’re thrilled to have you join our community! To unlock your account and start your journey with us, please verify your email address.</p>
                    <p>Your verification code is:</p>
                    <div class="code">{verificationCode}</div>
                    <p>This code is valid for the next 15 minutes, so don’t wait too long!</p>
                    <p>If you didn’t sign up, no worries—just ignore this email.</p>
                    <p>Cheers,<br>Your Friendly Team</p>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
                <p>Connect with us:</p>
                <div class="socials">
                    <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                    <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                </div>
                <p><a href="#">Visit our website</a></p>
            </div>
        </body>
        </html>
        `;

export const WELCOME_EMAIL_TEMPLATE = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to our Compunity!</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #e9f1f5;
                    color: #444;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 10px auto;
                    padding: 20px;
                    background: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding: 20px;
                }
                .header img {
                    width: 100%;
                    border-radius: 10px;
                }
                .content {
                    padding: 20px;
                }
                .welcome {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 20px 0;
                }
                .next-step {
                    display: inline-block;
                    background: #007BFF;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    text-decoration: none;
                    margin: 20px 0;
                }
                .image-section {
                display:flex;
                justify-content: flex-between;
                    text-align: center;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #888;
                    font-size: 0.9em;
                }
                a {
                    text-decoration: none;
                    color: #007BFF;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img src="https://res.cloudinary.com/dftxzx2zc/image/upload/v1726932517/fe8oxj1bbsevh6hbpizo.png" alt="Welcome Header">
                </div>
                <div class="content">
                    <div class="welcome">Welcome, {name}!</div>
                    <p>Thanks for choosing our Compunity! We are happy to see you on board.</p>
                    <p>To get started, do this next step:</p>
                    <a href="#" class="next-step">Next Step</a>
                    <p>If you want to see more, check out:</p>

                    <div class="image-section" style="display: flex; align-items: center; justify-content: space-between;">
                        <a href="https://mohammad-rammal-portfolio.vercel.app()" style="display: flex; align-items: center;">
                            <img src="https://res.cloudinary.com/dftxzx2zc/image/upload/v1726932644/ck1glqzbqvipdzrq0pkj.png" alt="Who I Am!" style="width: 100%; max-width: 150px; margin-right: 10px;">
                            <p style="margin: 0;">WHO I AM!</p>
                        </a>
                    </div>

                    <p>We hope you enjoy this journey as much as we enjoy creating it for you.</p>
                </div>
            </div>
            <div class="footer">
                <p>Contact us:</p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/mohammad-rammal/">LinkedIn</a><br>
                Email: <a href="mailto:mohammad.rammal@hotmail.com">Email</a>
            </p>
            </div>
            <p style="text-align: center; margin-top: 20px;">Mohammad Rammal</p>
        </body>
        </html>
        `;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset Successful</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #e0f7fa;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(to right, #007bff, #0056b3);
                color: white;
                text-align: center;
                padding: 30px;
                border-radius: 10px 10px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
            }
            .content {
                padding: 20px;
            }
            .success-icon {
                background-color: #007bff;
                color: white;
                width: 60px;
                height: 60px;
                line-height: 60px;
                border-radius: 50%;
                font-size: 30px;
                text-align: center;
                margin: 30px auto;
            }
            ul {
                margin: 10px 0;
                padding-left: 20px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                color: #888;
                font-size: 0.9em;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 Password Reset Successful!</h1>
                </div>
                <div class="content">
                    <p>Hello {name},</p>
                    <p>Your password has been successfully reset! You can now log in with your new password.</p>
                    <div class="success-icon">✓</div>
                    <p>If you did not request this change, please reach out to our support team immediately.</p>
                    <p>For enhanced security, we recommend:</p>
                    <ul>
                        <li>Using a strong, unique password.</li>
                        <li>Enabling two-factor authentication on your account.</li>
                        <li>Avoiding password reuse across different platforms.</li>
                    </ul>
                    <p>Thank you for choosing us. We’re here to keep your account secure!</p>
                    <p>Best regards,<br>Your Friendly Team</p>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
            </div>
        </body>
        </html>
    `;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Your Password</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f0f4f8;
                color: #333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(to right, #007BFF, #0056b3);
                color: white;
                text-align: center;
                padding: 30px;
                border-radius: 10px 10px 0 0;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
            }
            .content {
                padding: 20px;
            }
            .reset-button {
                display: inline-block;
                background-color: #007BFF;
                color: white;
                padding: 12px 20px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin: 30px 0;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                color: #888;
                font-size: 0.9em;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Password Reset Request</h1>
                </div>
                <div class="content">
                    <p>Hello {name} ,</p>
                    <p>We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
                    <p>To reset your password, please click the button below:</p>
                    <div style="text-align: center;">
                        <a href="{resetURL}" class="reset-button">Reset Password</a>
                    </div>
                    <p>This link will expire in 1 hour for security reasons.</p>
                    <p>If you need further assistance, feel free to reach out to our support team.</p>
                    <p>Best regards,<br>Your App Team</p>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated message. Please do not reply to this email.</p>
            </div>
        </body>
        </html>
        `;
