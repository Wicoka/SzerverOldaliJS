/**
  * Hozzáad egy autót az adatbázishoz
  * Vagy módosít egy autót az adatbázisban
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const CarModel = requireOption(objectrepository, 'CarModel');
  return function (req, res, next) {
    if (
      typeof req.body.name === 'undefined'
      || typeof req.body.brand === 'undefined'
      || typeof req.body.licencePlate === 'undefined'
      || typeof req.body.chassisNumber === 'undefined'
    ) {
      return next();
    }
    if (typeof res.locals.car === 'undefined') {
      res.locals.car = new CarModel();
    }
    res.locals.car.name = req.body.name;
    res.locals.car.brand = req.body.brand;
    res.locals.car.licencePlate = req.body.licencePlate;
    res.locals.car.chassisNumber = req.body.chassisNumber;

    res.locals.car.save(err => {
      if (err) {
        console.log(err);
      }

      return res.redirect('/car/list');
    });
  };
};