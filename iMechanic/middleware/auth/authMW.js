/**
  * Megnézi, hogy be van-e jelentkezve a felhasználó
  */
const requireOption = require('../../middleware/requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Auth MW');
    return next();
  };
};