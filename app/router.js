/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');
const controller = require('./controllers/controller')

const router = Router();

router.get('/sendMail', controller.sendMail);

module.exports = router;
