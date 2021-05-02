/**
  * Hozzáad egy autót a szervizhez
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const CarModel = requireOption(objectrepository, 'CarModel');
  return function (req, res, next) {
    if (typeof res.locals.service === 'undefined' || typeof res.locals.car === 'undefined') {
      console.log('Car or Service not found!');
      return res.redirect(`/service/${req.params.serviceid}/car`);
    }

    res.locals.service._cars.push(req.params.carid);
    res.locals.car._service = req.params.serviceid;
    res.locals.service.save(err => {
      if (err) {
        console.log(err);
      }
      res.locals.car.save(err => {
        if (err) {
          console.log(err);
        }

        return res.redirect(`/service/${req.params.serviceid}/car`);
      });
    });
  };
};