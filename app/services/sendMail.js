const nodemailer = require('nodemailer');
const debug = require('debug')('sendMail');

const sendMail = async function (receverEmail, sub, mes) {
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

    try {
        await transporter.sendMail(message, (error, info) => {
            debug('Message sent: %s', message);
            debug('info.messageId:', info.messageId);
            return (info.messageId);
        })
    } catch (error) {
        debug(error);
        return (error);
    };
    debug('end send mail');
}

module.exports = sendMail;