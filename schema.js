const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const FruitSchema = new Schema({
  name: {type: String},
  quantity: {type: String},
  color: {type: String}
})

const Fruit = mongoose.model("fruits", FruitSchema)

module.exports = {Fruit}