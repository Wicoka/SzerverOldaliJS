/**
  * Lekéri az összes szervizt az adatbázisból
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const ServiceModel = requireOption(objectrepository, 'ServiceModel');
  const CarModel = requireOption(objectrepository, 'CarModel');
  return function (req, res, next) {
    ServiceModel.find({}, (err, services) => {
      if (err) {
        return next(err);
      }
      res.locals.services = services;
      CarModel.find({}, (err, cars) => {
        if (err) {
          return next(err);
        }
        res.locals.services.forEach(service => {
          service.licencePlates = [];
          service.carCount = service.licencePlates.length;
          cars.forEach(car => {
            // Ha nem castoltam stringgé őket, akkor sehogy sem tudtam leellenőrizni, hogy benne van-e a tömbben
            if (service._cars.find(x => x.toString() === car._id.toString())) {
              service.licencePlates.push(car.licencePlate);
              service.carCount = service.licencePlates.length;
            }
          });
        });
        return next();
      });
    });
  }
};