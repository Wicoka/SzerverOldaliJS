/**
  * Leellenőrzi a jelszót
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (typeof req.body.password === 'undefined' || typeof req.body.username === 'undefined') {
      return next();
    }
    if (req.body.password === 'admin' || req.body.username === 'admin') {
      req.session.isAuthenticated = true;
      return req.session.save(err => {
        return res.redirect('/service/list');
      });
    }
    return next();
  };
};