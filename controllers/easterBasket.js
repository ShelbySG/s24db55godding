var easterBasket = require('../models/easterBasket');
// List of all Costumes
exports.easterBasket_list = function(req, res) {
res.send('NOT IMPLEMENTED: Costume list');
};
// for a specific Costume.
exports.easterBasket_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.easterBasket_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete from on DELETE.
exports.easterBasket_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.easterBasket_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
