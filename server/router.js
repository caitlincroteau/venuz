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
router.post("/api/venues", createVenue);

//READ all
router.get("/api/venues", getVenues);

//READ one
router.get("/api/venues/:id", getVenue);

//UPDATE one
router.put("/api/venues/:id", updateVenue);

//DELETE one
router.delete("/api/venues/:id", deleteVenue);

module.exports = { router };
