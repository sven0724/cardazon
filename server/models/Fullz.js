const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FullzSchema = new Schema({
  bin: {
    type: String,
    required: true
  },
  vendor: {
    type: String,
    required: true
  },
  cardname: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Fullz = mongoose.model("fullz", FullzSchema);
