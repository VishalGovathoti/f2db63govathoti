const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
 Model: String,
 yearofmanufacturing: Number,
 color: String
})
module.exports = mongoose.model("car",
carSchema)