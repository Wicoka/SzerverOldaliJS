/**
  * Lekéri egy bizonyos szerviz adatait ID alapján
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log('Get service by ID MW');
    res.locals.service = {
      _id: 1,
      name: 'iMechanic Győr',
      address: '9000 Győr, Széchenyi tér 2',
      carCount: 0,
      licencePlates: []
    };
    next();
  };
};