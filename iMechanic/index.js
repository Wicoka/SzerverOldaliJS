// const Car = require('./models/car');
// const Service = require('./models/service');

// let testService = new Service();
// testService.name = 'Test Service';
// testService.address = '1094 Budapest, Páva utca 15';
// testService._cars = [];
// let testCar = new Car();
// testCar.name = 'Kicsi Kocsi 2';
// testCar.brand = 'Suzuki';
// testCar.chassisNumber = 'ABCDEF12345';
// testCar.licencePlate = 'HNF-815';
// testService._cars.push(testCar);
// testCar._service = testService._id;

// testService.save((err) => {
//     console.log(err);
// });
// testCar.save((err) => {
//     console.log(err);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));

// Routing betöltése
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem');
    console.log('Error', err);
});

app.listen(3000, function () {
    console.log('Hello :3000');
});