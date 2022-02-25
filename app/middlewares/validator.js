// le but de ce module est de créer une usine à middleware
// la fonction validator va retourner non pas une string ou un number ou ...
// mais une déclaration de fonction
// cette déclaration de fonction respecte bien la signature des middlewares d'express
// on a emballé cette déclaration de middleware dans une fonction afin de pouvoir le customiser
// on peut avoir de nombreux schémas dans l'application
// on peut aussi avoir plusieurs sources de data (request.body, request.query, request.params)
// afin de rendre le module ré-utilisable dans tous nos projets,
// on a placé les infos variables (schéma et la source des data)
// dans des paramètres de notre fonction
// ainsi, on peut adapter le même code de middleware pour n'importe quel schéma
// et pour n'importe quelle data

const ApiError = require('../errors/apiErrors');

/**
 * Validation middleware with Joi
 * @param {Schema} schema Joi schema to validate against
 * @param {string} dataOrigin Request property to validate (body, query, params)
 * @returns {string} 400 Error message
 */
const validator = (schema, dataOrigin) => {
    const myMw = (request, response, next) => {
    // validate sur le request.body
        const { error } = schema.validate(request[dataOrigin]);
        // checker la présence de la propriété error
        // si elle est présente, on renvoie au front un message d'erreur
        if (error) {
            throw new ApiError(error.message, 400);
        }
        // sinon, on passe le bébé au middleware suivant
        return next();
    };
    return myMw;
};

module.exports = validator;
