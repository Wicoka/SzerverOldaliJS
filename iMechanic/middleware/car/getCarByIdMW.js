/**
  * Lekéri egy bizonyos autó adatait ID alapján
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Get car by ID MW');
        next();
    };
};