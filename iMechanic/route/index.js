const authMW = require('../middleware/auth/authMW');
const checkPasswordMW = require('../middleware/auth/authMW');
const deleteCarMW = require('../middleware/auth/authMW');
const getCarByIdMW = require('../middleware/auth/authMW');
const getCarListMW = require('../middleware/auth/authMW');
const saveCarMW = require('../middleware/auth/authMW');
const addCarToServiceMW = require('../middleware/auth/authMW');
const deleteCarFromServiceMW = require('../middleware/auth/authMW');
const deleteServiceMW = require('../middleware/auth/authMW');
const getServiceByIdMW = require('../middleware/auth/authMW');
const getServiceListMW = require('../middleware/auth/authMW');
const saveServiceMW = require('../middleware/auth/authMW');
const renderMW = require('../middleware/auth/authMW');

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        checkPassMW(objRepo),
        getServiceListMW(objRepo),
        renderMW(objRepo, 'index'));

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
    app.get('/car/list',
        authMW(objRepo),
        getCarListMW(objRepo),
        renderMW(objRepo, 'cars'));
    app.post('/car/new',
        authMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'car'));
    app.use('/car/:carid/edit',
        authMW(objRepo),
        getCarByIdMW(objRepo),
        saveCarMW(objRepo),
        renderMW(objRepo, 'car'));
    app.get('/car/delete/:carid',
        authMW(objRepo),
        getCarByIdMW(objRepo),
        deleteCarMW(objRepo),
        renderMW(objRepo, 'cars'));
};
