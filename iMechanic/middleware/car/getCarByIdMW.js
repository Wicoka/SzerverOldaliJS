/**
  * Lekéri egy bizonyos autó adatait ID alapján
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Get car by ID MW');
    res.locals.car = {
      _id: 1,
      name: 'Ezüst villám',
      brand: 'Opel Astra',
      licencePlate: 'HNF-815',
      chassisNumber: 'ALVAZ123SZAM'
    };
    next();
  };
};