var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('World!');
 });
 router.get('/natalia', function(req, res, next) {
    res.send('witaj Natalia!');
 });
 
 router.get(/hello?name=michal/, function(req, res, next) {
    res.send('Witaj Michal!');
 });

 module.exports = router;
