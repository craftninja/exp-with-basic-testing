var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Greetings, user!' });
});

router.post('/contact', function(req, res, next) {
  res.redirect('/thank-you');
});

router.get('/thank-you', function(req, res, next) {
  res.render('index', { title: 'Thank you!' });
});

module.exports = router;
