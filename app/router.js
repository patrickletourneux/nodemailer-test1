/* eslint linebreak-style: ["error", "windows"] */
const { Router } = require('express');
const controller = require('./controllers/controller')
const validator = require('./middlewares/validator');
const schemaPost = require('./schemas/sendMail');

const router = Router();

router.post('/sendMail', validator(schemaPost, 'body'), controller.sendMail);

router.use((error , request , response, next ) => {
    response.status(500).send(error)
});
module.exports = router;
