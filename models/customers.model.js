const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// define the Schema (the structure of the article)
const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  age: Number,
  country: String,
  gender: String,
}, {timestamps: true});




// Create a model based on that schema
const Customer = mongoose.model("Customer", customerSchema);




// export the model
module.exports = Customer