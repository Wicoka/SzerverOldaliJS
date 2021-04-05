/**
  * Töröl egy autót az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {

    if (typeof res.locals.car === 'undefined') {
      return next();
    }

    res.locals.car.remove(function (err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/car/list');
    });
  };

};