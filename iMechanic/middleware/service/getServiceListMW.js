/**
  * Lekéri az összes szervizt az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Get service list MW');
    res.locals.services = [
      {
        _id: 1,
        name: 'iMechanic Budapest',
        address: '1094 Budapest, Páva utca 15',
        carCount: 1,
        licencePlates: [
          'HNF-815'
        ]
      },
      {
        _id: 2,
        name: 'iMechanic Győr',
        address: '9000 Győr, Széchenyi tér 2',
        carCount: 0,
        licencePlates: []
      }
    ];
    next();
  };
};