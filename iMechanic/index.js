const express = require('express');
const app = express();

app.use(express.static('static'));

// Routing betöltése
require('./route/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});