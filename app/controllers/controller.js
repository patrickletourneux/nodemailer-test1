/* eslint linebreak-style: ["error", "windows"] */
const debug = require('debug')('Controller');

/**
 * GET /sendMail
 * @summary send a mail
 * @returns {string} 200 - a message
 */

const controller = {
  sendMail(request, response, next) {
    debug('dans SendMail');
    return response.send('Hello pat');
  },
};

module.exports = controller;
