const mongoose = require("mongoose");

//create schema
const Schema = mongoose.Schema;

const venueSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  capacity: { type: String, required: true },
  longitude: { type: String, required: true },
  latitude: { type: String, required: true },
});

//create model
const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;