var express = require('express');
var router = express.Router();
var easterBasket_controller = require('../controllers/easterBasket');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('easterBasket', { title: 'Search results Easter Basket' });
// });


    
router.get('/', easterBasket_controller.easterBasket_view_all_Page );
/* GET detail costume page */
router.get('/detail', easterBasket_controller.easterBasket_view_one_Page);
/* GET create costume page */
router.get('/create', easterBasket_controller.easterBasket_create_Page)
router.get('/update', easterBasket_controller.easterBasket_update_Page)

module.exports = router;