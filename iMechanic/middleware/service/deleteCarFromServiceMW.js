/**
  * Kitöröl egy autót a szervizből
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Delete car from service MW');
        next();
    };
};