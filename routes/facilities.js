const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/iitvishrambagh");

facilitiesSchema = mongoose.Schema({
  heading: String,
  description: String,
});

module.exports = mongoose.model("facilities", facilitiesSchema);
