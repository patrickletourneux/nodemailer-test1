
const nodemailer = require('nodemailer');

const sendMail = async function (receverEmail,sub,mes)  {
    const transporter = nodemailer.createTransport({
        streamTransport: true,
        newline: 'windows'
    });
    
    var message = {
        from: 'patriste92@hotmail.fr',
        to: receverEmail,
        subject: sub,
        text: mes,
        html: '<p>Please confirm your email</p>'
    };
    
    await transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', message);
        return ('string for test')
    });
    
}

module.exports = sendMail;