/**
  * Hozzáad egy autót a szervizhez
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Add car to service MW');
        next();
    };
};