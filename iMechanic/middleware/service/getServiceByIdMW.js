/**
  * Lekéri egy bizonyos szerviz adatait ID alapján
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Get service by ID MW');
        next();
    };
};