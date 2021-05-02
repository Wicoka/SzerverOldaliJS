var expect = require('chai').expect;
var getServiceByIdMW = require('../../../middleware/service/getServiceByIdMW');

describe('getServiceById middleware ', function () {

    it('should return a service', function (done) {
        const mw = getServiceByIdMW({
            ServiceModel: {
                findOne: (p1, callback) => {
                    expect(p1).to.be.eql({ _id: '2' });
                    callback(null, 'mockService');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    serviceid: '2'
                }
            },
            resMock,
            (error) => {
                expect(error).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ service: 'mockService' });
                done();
            }
        );
    });

    it('should return a db error', function (done) {
        const mw = getServiceByIdMW({
            ServiceModel: {
                findOne: (p1, callback) => {
                    expect(p1).to.be.eql({ _id: '2' });
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
                    serviceid: '2'
                }
            },
            resMock,
            (error) => {
                expect(error).to.be.eql('Hiba van!');
                expect(resMock.locals.service).to.be.eql(undefined);
                done();
            }
        );
    });
});