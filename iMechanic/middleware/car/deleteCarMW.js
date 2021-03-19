/**
  * Töröl egy autót az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Delete car MW');
        next();
    };
};