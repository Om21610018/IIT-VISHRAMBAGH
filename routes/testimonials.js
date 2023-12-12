const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/iitvishrambagh");

testimonialSchema = mongoose.Schema({
  words: String,
  name: String,
});

module.exports = mongoose.model("testimonials", testimonialSchema);
