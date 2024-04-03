const mongoose = require("mongoose")
const easterBasket = mongoose.Schema({
color: String,
cost: Number,
full: String
})
module.exports = mongoose.model("easterBasket",
easterBasket)