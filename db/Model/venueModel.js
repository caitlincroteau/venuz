const mongoose = require("mongoose");

//creates Schema
const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name."],
    },
    facility: {
      type: String,
      required: [true, "Please enter what kind of performance space this is."],
    },
    capacity: {
      type: Number,
      required: [true, "Please enter a number."],
      default: 0,
    },
    lat: {
      type: Number,
      required: [true, "Please enter the latitude."],
      default: 48.407326,
    },
    lng: {
      type: Number,
      required: [true, "Please enter the longitude."],
      default: -123.329773,
    },
    company: {
      type: String,
      required: [false, "Please enter the resident company name."],
      default: "No resident company."
    }
  },
  {
    timestamps: true,
    //used to track created at and updated at times
  }
);

//creates Model
const Venue = mongoose.model("Venue", venueSchema);

module.exports = { Venue };
