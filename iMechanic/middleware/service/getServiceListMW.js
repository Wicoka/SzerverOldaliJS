/**
  * Lekéri az összes szervizt az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Get service list MW');
        next();
    };
};