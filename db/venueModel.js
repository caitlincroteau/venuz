const mongoose = require("mongoose");

//creates Schema
const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name."],
    },
    country: {
      type: String,
      required: [true, "Please enter a country."],
    },
    capacity: {
      type: Number,
      required: [true, "Please enter a number."],
      default: 0,
    },
  },
  {
    timestamps: true,
    //used to track created at and updated at times
  }
);

//creates Model
const Venue = mongoose.model("Venue", venueSchema);

module.exports = { Venue };
