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

        await sendMailService()

        return response.send('Hello pat');

    },
};

module.exports = controller;