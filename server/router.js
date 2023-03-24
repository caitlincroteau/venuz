const router = require("express").Router();
const {
  createVenue,
  getVenues,
  getVenue,
  updateVenue,
  deleteVenue,
} = require("../db/Controllers/venueController");

router.get("/", (req, res) => {
  res.send("My router");
});

//CREATE add one
router.post("/venue", createVenue);

//READ all
router.get("/venues", getVenues);

//READ one
router.get("/venues/:id", getVenue);

//UPDATE one
router.put("/venues/:id", updateVenue);

//DELETE one
router.delete("/venues/:id", deleteVenue);

module.exports = { router };
