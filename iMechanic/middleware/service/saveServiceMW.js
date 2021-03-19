/**
  * Hozzáad egy szervizt az adatbázishoz
  * Vagy módosít egy autót az adatbázisban
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Save service');
        next();
    };
};