/**
  * Hozzáad egy szervizt az adatbázishoz
  * Vagy módosít egy autót az adatbázisban
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const ServiceModel = requireOption(objectrepository, 'ServiceModel');
  return function (req, res, next) {
    if (
      typeof req.body.name === 'undefined'
      || typeof req.body.address === 'undefined'
    ) {
      return next();
    }
    if (typeof res.locals.service === 'undefined') {
      res.locals.service = new ServiceModel();
    }
    res.locals.service.name = req.body.name;
    res.locals.service.address = req.body.address;

    res.locals.service.save(err => {
      if (err) {
        console.log(err);
      }

      return res.redirect('/service/list');
    });
  };
};