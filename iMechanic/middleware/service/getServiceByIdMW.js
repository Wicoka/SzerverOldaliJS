/**
  * Lekéri egy bizonyos szerviz adatait ID alapján
  */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
  const ServiceModel = requireOption(objectrepository, 'ServiceModel');
  return function (req, res, next) {
    ServiceModel.findOne({
      _id: req.params.serviceid
    }, (err, service) => {
      if (err) {
        return next(err);
      }
      res.locals.service = service;
      return next();
    });
  };
};