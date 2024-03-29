var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('easterBasket', { title: 'Search results Easter Basket' });
});

module.exports = router;
