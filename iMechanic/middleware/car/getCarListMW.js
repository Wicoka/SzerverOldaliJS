/**
  * Lekéri az összes autót, ami az adatbázisban van
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Get cvar list MW');
        next();
    };
};