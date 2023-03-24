const { Venue } = require("../Model/venueModel");

//CRUD

//Create one
const createVenue = async (req, res) => {
  try {
    const venue = await Venue.create(req.body);
    res.status(200).json(venue);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Read all
const getVenues = async (req, res) => {
  try {
    //get all venues with find({}) method
    const venues = await Venue.find({});

    //if can't find venues
    if (!venues) {
      return res
        .status(404)
        .json({ message: `There are no items in this database.` });
    }
    //successfully find venues
    res.status(200).json(venues);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Read one
const getVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findById(id);

    //if can't find venue
    if (!venue) {
      return res
        .status(404)
        .json({ message: `Cannot find venue with ID ${id}.` });
    }
    //successfully find venue
    res.status(200).json(venue);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Update one
const updateVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByIdAndUpdate(id, req.body);

    //can't find venue in db
    if (!venue) {
      return res
        .status(404)
        .json({ message: `Cannot find venue with ID ${id}.` });
    }

    //if update was successful
    const updatedVenue = await Venue.findById(id);
    res.status(200).json(updatedVenue);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//Delete one
const deleteVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByIdAndDelete(id);

    //can't find venue in db
    if (!venue) {
      return res
        .status(404)
        .json({ message: `Cannot find venue with ID ${id}.` });
    }

    //if delete was successful
    const deletedVenue = await Venue.findById(id);
    if (!deletedVenue) {
      return res
        .status(200)
        .json({ message: `Venue with ID ${id} has been deleted.`, venue });
    }

    //if delete was unsuccessful
    res
      .status(200)
      .json({ message: `Venue with ID ${id} has not been deleted.` });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createVenue,
  getVenues,
  getVenue,
  updateVenue,
  deleteVenue,
};

// "name": "Teatro Caupolican",
// "country": "Chile",
// "capacity": 7000
