/**
  * Megnézi, hogy be van-e jelentkezve a felhasználó
  */
const requireOption = require('../../middleware/requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Auth MW', req.session);
    if (typeof req.session.isAuthenticated === 'undefined' || req.session.isAuthenticated !== true) {
      console.log('NINCS BELÉPVE');
      return res.redirect('/');
    }

    return next();
  };
};