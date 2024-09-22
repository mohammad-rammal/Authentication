import {MailtrapClient} from 'mailtrap';
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE} from './emailTemplates.js';
import dotenv from 'dotenv';
import {client, sender} from './mailtrap.config.js';
dotenv.config();

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}];

    try {
        const response = await client.testing.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email ',
            html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
            category: 'Email verification',
        });

        console.log('Email send successfully', response);
    } catch (error) {
        console.log(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await client.testing.send({
            from: sender,
            to: recipient,
            subject: 'Welcome email ',
            html: WELCOME_EMAIL_TEMPLATE.replace('{name}', name),
            category: 'Welcome',
        });

        console.log('Email send successfully', response);
    } catch (error) {
        console.log(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendResetPasswordEmail = async (email, name, resetURL) => {
    const recipient = [{email}];

    try {
        const response = await client.testing.send({
            from: sender,
            to: recipient,
            subject: 'Reset Password Email ',
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{name}', name).replace('{resetURL}', resetURL),
            category: 'Reset Password',
        });

        console.log('Email send successfully', response);
    } catch (error) {
        console.log(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await client.testing.send({
            from: sender,
            to: recipient,
            subject: 'Successfully Reset Password ',
            html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace('{name}', name),
            category: 'Reset successfully',
        });

        console.log('Email send successfully', response);
    } catch (error) {
        console.log(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};
