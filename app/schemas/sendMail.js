const Joi = require('joi');

/**
 * Schema to validate user inputs to add to data source
 */
const schema = Joi.object({
    receverMail: Joi.string(),
    subject: Joi.string(),
    message: Joi.string()
    // il serait difficile de plus qualifier les propriétés
    // attendues à cause de la richesse de la langue française
    // en revanche, rien ne nous empèche de mettre en place
    // des gardes-fous au niveau de l'object lui-même afin que
    // joi cheke s'il contient au moins une propriété et au maximum 4 propriétés
}).required().min(1).max(3);

module.exports = schema;