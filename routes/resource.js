var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var costume_controller = require('../controllers/easterBasket');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/easterbasket', costume_controller.easterBasket_create_post);
// DELETE request to delete Costume.
router.delete('/easterBasketDelete/:id', costume_controller.easterBasket_delete);
// PUT request to update Costume.
router.put('/easterBasketUpdate/:id', costume_controller.easterBasket_update_put);
// GET request for one Costume.
router.get('/easterBasket/:id', costume_controller.easterBasket_detail);
// GET request for list of all Costume items.
router.get('/easterBasket', costume_controller.easterBasket_list);
/* GET create costume page */
router.get('/create', costume_controller.easterBasket_create_Page)



module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"costumes", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
