const Car = require('./models/car');
const Service = require('./models/service');

let testService = new Service();
testService.name = 'Test Service';
testService.address = '1094 Budapest, Páva utca 15';
testService.save((error) => {
    console.log(error);
    let testCar = new Car();
    testCar.name = 'Kicsi Kocsi';
    testCar.brand = 'Suzuki';
    testCar.chassisNumber = 'ABCDEF12345';
    testCar.licencePlate = 'HNF-815';
    testCar._service = testService;
    testCar.save((err) => {
        console.log(err);
    });
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.set('view engine', 'ejs');
// // app.use(bodyParser.urlencoded());
// // app.use(bodyParser.json());
// // app.use(express.static('static'));

// // Routing betöltése
// require('./route/index')(app);

// app.listen(3000, function () {
//     console.log('Hello :3000');
// });