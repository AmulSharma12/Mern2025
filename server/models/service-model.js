const { Schema, model } = require("mongoose");

//creating serviceSchema
const serviceSchema = new Schema({
  service: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: String, require: true },
  provider: { type: String, require: true },
});

//creating service model passing serviceSchema
const Service = new model("Service", serviceSchema);

//exporting the Service model to utilise by other resources
module.exports = Service;
