const authMW = require('../middleware/auth/authMW');
const checkPasswordMW = require('../middleware/auth/checkPasswordMW');
const deleteCarMW = require('../middleware/car/deleteCarMW');
const getCarByIdMW = require('../middleware/car/getCarByIdMW');
const getCarListMW = require('../middleware/car/getCarListMW');
const saveCarMW = require('../middleware/car/saveCarMW');
const addCarToServiceMW = require('../middleware/service/addCarToServiceMW');
const deleteCarFromServiceMW = require('../middleware/service/deleteCarFromServiceMW');
const deleteServiceMW = require('../middleware/service/deleteServiceMW');
const getServiceByIdMW = require('../middleware/service/getServiceByIdMW');
const getServiceListMW = require('../middleware/service/getServiceListMW');
const saveServiceMW = require('../middleware/service/saveServiceMW');
const renderMW = require('../middleware/renderMW');

module.exports = function (app) {
    const objRepo = {};

    app.get('/service/list',
        authMW(objRepo),
        getServiceListMW(objRepo),
        renderMW(objRepo, 'services'));
    app.use('/service/new',
        authMW(objRepo),
        saveServiceMW(objRepo),
        renderMW(objRepo, 'service'));
    app.use('/service/edit/:serviceid',
        authMW(objRepo),
        getServiceByIdMW(objRepo),
        saveServiceMW(objRepo),
        renderMW(objRepo, 'service'));
    app.get('/service/delete/:serviceid',
        authMW(objRepo),
        getServiceByIdMW(objRepo),
        deleteServiceMW(objRepo));

    app.get('/service/:serviceid/car',
        authMW(objRepo),
        getServiceByIdMW(objRepo),
        getCarListMW(objRepo),
        renderMW(objRepo, 'service-cars'));
    app.post('/service/:serviceid/car/:carid',
        authMW(objRepo),
        getServiceByIdMW(objRepo),
        getCarListMW(objRepo),
        addCarToServiceMW(objRepo),
        renderMW(objRepo, 'service-cars'));
    app.get('/service/:serviceid/car/:carid',
        authMW(objRepo),
        getServiceByIdMW(objRepo),
        getCarListMW(objRepo),
        deleteCarFromServiceMW(objRepo),
        renderMW(objRepo, 'service-cars'));

    app.use('/car/new',
        authMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'car'));
    app.use('/car/edit/:carid',
        authMW(objRepo),
        getCarByIdMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'car'));
    app.get('/car/delete/:carid',
        authMW(objRepo),
        getCarByIdMW(objRepo),
        deleteCarMW(objRepo),
        renderMW(objRepo, 'cars'));
    app.get('/car/list',
        authMW(objRepo),
        getCarListMW(objRepo),
        renderMW(objRepo, 'cars'));

    app.use('/',
        checkPasswordMW(objRepo),
        getServiceListMW(objRepo),
        renderMW(objRepo, 'index'));
};
