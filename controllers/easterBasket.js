var easterBasket = require('../models/easterBasket');
// List of all Costumes
exports.easterBasket_list = async function(req, res) {

    try{
        theCostumes = await easterBasket.find();
        res.send(theCostumes);
        }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    };

// for a specific Costume.
//exports.easterBasket_detail = function(req, res) {
//res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
//};
exports.easterBasket_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await easterBasket.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };




// Handle Costume create on POST.
// exports.easterBasket_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: Costume create POST');
// };
// Handle Costume delete from on DELETE.
exports.easterBasket_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.easterBasket_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.easterBasket_view_all_Page = async function(req, res) {
    try{
    theCostumes = await easterBasket.find();
    res.render('easterBasket', { title: 'Costume Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.easterBasket_create_post = async function(req, res) {
console.log(req.body)
let document = new easterBasket();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.full = req.body.full;
document.cost = req.body.cost;
document.color = req.body.color;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

