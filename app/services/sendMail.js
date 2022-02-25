
const nodemailer = require('nodemailer');

const sendMail = async function ()  {
    const transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: 'windows'
    });
    
    var message = {
        from: 'patriste92@hotmail.fr',
        to: 'patrick.letourneux20@gmail.com',
        subject: 'Confirm Email  Nodemailer test',
        text: 'Please confirm your email',
        html: '<p>Please confirm your email</p>'
    };
    
    await transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
    
}

module.exports = sendMail;