/**
  * Törli a session-t és kijelentkezteti a felhasználót
  */
const requireOption = require('../../middleware/requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log('Logout MW');
        req.session.destroy(err => {
            console.log(err);
            res.redirect('/');
        });

        return next();
    };
};