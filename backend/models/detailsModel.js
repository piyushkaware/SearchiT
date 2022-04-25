const mongoose = require("mongoose");

const detailsSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  link: { type: String },
});

module.exports = mongoose.model("Detail", detailsSchema);
