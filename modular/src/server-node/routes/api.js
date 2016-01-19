var express = require('express');
var router = express.Router();
var jsonfileservice = require('./utils/jsonfileservice')();

router.get('/maa', function (req, res, next) {
    var json = jsonfileservice.getJsonFromFile('/../../data/maa.json');
    json[0].data.results.forEach(function (character) {
        var pos = character.name.indexOf('(MAA)');
        character.name = character.name.substr(0, pos - 1);
    });
    //Allow the test runner to access this API
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Credentials', true);
    // res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json(json[0].data.results);
});

module.exports = router;
