/**
  * Lekéri az összes autót, ami az adatbázisban van
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Get cvar list MW');
    res.locals.cars = [
      {
        _id: 1,
        name: 'Ezüst villám',
        brand: 'Opel Astra',
        licencePlate: 'HNF-815',
        chassisNumber: 'ALVAZ123SZAM',
        serviceId: 1
      },
      {
        _id: 2,
        name: 'Kicsi Kocsi',
        brand: 'Suzuki Swift',
        licencePlate: 'ABC-123',
        chassisNumber: 'ALVAZ123SZAM',
        serviceId: 1
      },
      {
        _id: 3,
        name: 'Apollo',
        brand: 'Tesla Model S',
        licencePlate: 'TESLA-1',
        chassisNumber: 'ALVAZ123SZAM',
        serviceId: 2
      }
    ];
    next();
  };
};