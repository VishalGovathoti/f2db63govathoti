const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
 Model: {type: String,required: [true, 'Model of the car cannot be empty']},
 yearofmanufacturing: {type: String,required: [true, 'Number of the car cannot be empty']},
 color: String
})
module.exports = mongoose.model("car",
carSchema)
