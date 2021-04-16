/**
  * Megnézi, hogy be van-e jelentkezve a felhasználó
  */
const requireOption = require('../../middleware/requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (typeof req.session.isAuthenticated === 'undefined' || req.session.isAuthenticated !== true) {
      return res.redirect('/');
    }

    return next();
  };
};