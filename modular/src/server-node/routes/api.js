var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({sample: "json"});
});

module.exports = router;
