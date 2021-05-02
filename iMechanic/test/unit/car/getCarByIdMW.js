var expect = require('chai').expect;
var getCarByIdMW = require('../../../middleware/car/getCarByIdMW');

describe('getCarById middleware ', function () {

    it('should return a car', function (done) {
        const mw = getCarByIdMW({
            CarModel: {
                findOne: (p1, callback) => {
                    expect(p1).to.be.eql({ _id: '1' });
                    callback(null, 'mockCar');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    carid: '1'
                }
            },
            resMock,
            (error) => {
                expect(error).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ car: 'mockCar' });
                done();
            }
        );
    });

    it('should return a db error', function (done) {
        const mw = getCarByIdMW({
            CarModel: {
                findOne: (p1, callback) => {
                    expect(p1).to.be.eql({ _id: '1' });
                    callback('Hiba van!', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    carid: '1'
                }
            },
            resMock,
            (error) => {
                expect(error).to.be.eql('Hiba van!');
                expect(resMock.locals.car).to.be.eql(undefined);
                done();
            }
        );
    });
});