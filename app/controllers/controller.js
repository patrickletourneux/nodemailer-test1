/* eslint linebreak-style: ["error", "windows"] */
const debug = require('debug')('Controller');
var nodemailer = require('nodemailer');

/**
 * GET /sendMail
 * @summary send a mail
 * @returns {string} 200 - a message
 */



const controller = {
    async sendMail(request, response, next) {
        debug('dans SendMail');

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

        return response.send('Hello pat');

    },
};

module.exports = controller;