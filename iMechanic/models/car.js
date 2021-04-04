const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Car = db.model('Car', {
    name: String,
    brand: String,
    chassisNumber: String,
    licencePlate: String,
    _service: {
        type: Schema.Types.ObjectId,
        ref: 'Service'
    }
});

module.exports = Car;