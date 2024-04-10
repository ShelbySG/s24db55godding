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

//Handle Costume update form on PUT.
exports.easterBasket_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await easterBasket.findById( req.params.id)
// Do updates of properties
if(req.body.color)
toUpdate.color = req.body.color;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.full) toUpdate.full = req.body.full;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// Handle a show one view with id specified by query
exports.easterBasket_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await easterBasket.findById( req.query.id)
    res.render('easterBasketdetail',
    { title: 'Costume Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


   // Handle Costume delete on DELETE.
exports.easterBasket_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await easterBasket.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.costume_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('costumecreate', { title: 'Costume Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    