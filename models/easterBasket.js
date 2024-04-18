const mongoose = require("mongoose")
const easterBasket = mongoose.Schema({
    color: { type: String, minlength: 3, maxlength: 20 },
    full: { type:String, minlength: 3, maxlength: 20 },
    cost: { type: Number, minlength: 1, maxlength: 30 },
});
module.exports = mongoose.model("easterBasket",
easterBasket)