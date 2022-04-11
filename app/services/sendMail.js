const nodemailer = require('nodemailer');
const debug = require('debug')('sendMail');

const sendMail = async function (receverEmail, sub, mes) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure : false,
        auth: {
            user: process.env.PATRICKMAIL,
            pass: process.env.PATRICKMAILPASS,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false,
          },
    });

    let mailOptions = {
        from: 'cduprops',
        to: "amelieforgeard@gmail.com",
        subject: `fais ton menage , tu es en retard !!!!`,
        html: `tu as 35 points de retard`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            debug('error ', err);
        } else {
            debug('info ',info);
        }
    });
}

module.exports = sendMail;