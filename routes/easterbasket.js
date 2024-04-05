var express = require('express');
var router = express.Router();
var easterBasket_controller = require('../controllers/easterBasket');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('easterBasket', { title: 'Search results Easter Basket' });
// });

router.get('/', easterBasket_controller.easterBasket_view_all_Page );

module.exports = router;



