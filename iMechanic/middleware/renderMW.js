/**
  * Kirendereli a paraméterben kapott view-t
  */
const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log('render: ' + viewName);
        res.end('Template: ' + viewName);
    };

};