import {MailtrapClient} from 'mailtrap';
import dotenv from 'dotenv';
dotenv.config();

export const client = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
    testInboxId: process.env.MAILTRAP_TEXT_INBOX_ID,
    accountId: process.env.MAILTRAP_ACCOUNT_ID,
});

export const sender = {
    email: 'hello@example.com',
    name: 'Mailtrap Test',
};



// const TOKEN = process.env.MAILTRAP_TOKEN;
// const MAILTRAP_TEXT_INBOX_ID = process.env.MAILTRAP_TEXT_INBOX_ID;
// const MAILTRAP_ACCOUNT_ID = process.env.MAILTRAP_ACCOUNT_ID;

// const client = new MailtrapClient({
//     token: TOKEN,
//     testInboxId: MAILTRAP_TEXT_INBOX_ID,
//     accountId: MAILTRAP_ACCOUNT_ID,
// });

// const sender = {
//     email: 'hello@example.com',
//     name: 'Mailtrap Test',
// };
// // const recipients = [
// //     {
// //         email: 'mohammad.rammal@hotmail.com',
// //     },
// // ];

// client.testing
//     .send({
//         from: sender,
//         to: recipients,
//         subject: 'You are awesome!',
//         html: 'Congrats for sending test email with Mailtrap!',
//         category: 'Integration Test',
//     })
//     .then(console.log, console.error);
