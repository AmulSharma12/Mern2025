const { Schema, model } = require("mongoose");

//creating contact schema
const contactSchema = new Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  message: {
    type: String,
    require: true,
  },
});

//creating collection for contactSchema
const Contact = new model("Contact", contactSchema);

//exports Contact model
module.exports = Contact;
