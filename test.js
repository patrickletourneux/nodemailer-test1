/* eslint linebreak-style: ["error", "windows"] */

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 4000,
  host: 'localhost',
  tls: {
    rejectUnauthorized: false,
  },
});

const options = {
  from: 'patriste92@hotmail.fr',
  to: 'patrick.letourneux@gmail.com',
  subject: 'nodemailer test',
  text: 'first mail nodemailer',
};

// transporter.sendMail(options , function (err,info){
//     if (err){
//         console.log(err);
//         return
//     }
//     console.log(info.response);
// })

async function send() {
  try {
    await transporter.sendMail(options);
  } catch (error) {
    console.log(error);
  }
}
send();
