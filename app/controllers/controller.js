/* eslint linebreak-style: ["error", "windows"] */
const debug = require('debug')('Controller');

const sendMailService = require('../services/sendMail')


/**
 * GET /sendMail
 * @summary send a mail
 * @returns {string} 200 - a message
 */



const controller = {
    async sendMail(request, response, next) {
        debug('dans SendMail');
        debug('request.body', request.body)

        await sendMailService(request.body.receverMail,request.body.subject,request.body.message)

        return response.send('Hello pat');
        

    },
};

module.exports = controller;