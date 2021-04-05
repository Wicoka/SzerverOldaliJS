const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Service = db.model('Service', {
    name: String,
    address: String,
    _cars: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }]
});

module.exports = Service;