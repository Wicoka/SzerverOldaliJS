/**
  * Töröl egy szervizt az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (typeof res.locals.service === 'undefined') {
      return next();
    }

    res.locals.service.remove(function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/service/list');
    });
  };
};