/**
  * Leellenőrzi a jelszót
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Check password MW');
        next();
    };
};