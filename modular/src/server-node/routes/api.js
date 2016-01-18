var express = require('express');
var router = express.Router();
var jsonfileservice = require('./utils/jsonfileservice')();

router.get('/maa', function (req, res, next) {
    var json = jsonfileservice.getJsonFromFile('/../../data/maa.json');
    json[0].data.results.forEach(function (character) {
        var pos = character.name.indexOf('(MAA)');
        character.name = character.name.substr(0, pos - 1);
    });
    res.send(json);
});

module.exports = router;
