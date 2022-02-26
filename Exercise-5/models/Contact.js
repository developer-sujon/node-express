const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 15,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    maxlength: 12,
    trim: true,
    required: true,
  },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
