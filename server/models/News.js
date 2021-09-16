const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NewsSchema = new Schema({
  info: {
    type: String,
    required: true
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fullz = mongoose.model("news", NewsSchema);
