const mongoose = require("mongoose");
const { Venue } = require("./Model/venueModel");
require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.REACT_APP_MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const seedVenues = [
  {
    name: "The Intrepid Studio",
    facility: "black-box",
    capacity: 50,
    lat: 48.429252558020565,
    lng: -123.36150407040172,
    company: "Intrepid Theatre Company Society",
  },
  {
    name: "Royal Theatre",
    facility: "soft-seat",
    capacity: 1416,
    lat: 48.42496809474958,
    lng: -123.36209893255564,
    company: "The Royal & McPherson Theatres Society",
  },
  {
    name: "The Belfry Theatre (Patrick Stewart Theatre)",
    facility: "soft-seat",
    capacity: 274,
    lat: 48.43051506956427,
    lng: -123.34545090632369,
    company: "The Belfry Theatre Society",
  },
  {
    name: "The Roxy Theatre",
    facility: "soft-seat",
    capacity: 225,
    lat: 48.43927472120812,
    lng: -123.35885931002393,
    company: "Blue Bridge Theatre Society",
  },
  {
    name: "The Metro Studio Theatre",
    facility: "black-box",
    capacity: 172,
    lat: 48.430774959280555,
    lng: -123.35834450105423,
    company: "Intrepid Theatre Company Society",
  },
  {
    name: "The Dave Dunnet Community Theatre",
    facility: "soft seat",
    capacity: 433,
    lat: 48.43270319176395,
    lng: -123.31840240294119,
    company: "Greater Victoria School District: Oak Bay High Scool",
  },
  {
    name: "McPherson Playhouse",
    facility: "soft-seat",
    capacity: 772,
    lat: 48.42882897296644,
    lng: -123.36663624526938,
    company: "The Royal & McPherson Theatres Society",
  },
  {
    name: "The Canadian College of Performing Arts Performance Hall",
    facility: "soft-seat",
    capacity: 123,
    lat: 48.42810127510715,
    lng: -123.31894367410551,
    company:
      "Canadian College of Performing Arts and The Canadian Heritage Arts Society",
  },
  {
    name: "The Belfry Theatre (BMO Studio Theatre)",
    facility: "black-box",
    capacity: 92,
    lat: 48.43051506956427,
    lng: -123.34545090632369,
    company: "The Belfry Theatre Society",
  },
  {
    name: "Paul Phillips Hall",
    facility: "black-box",
    capacity: 60,
    lat: 48.43040492508813,
    lng: -123.34494423177723,
    company: "The Fernwood Community Association and Theatre Inconnu",
  },
];

const seedDB = async () => {
  await Venue.deleteMany({});
  await Venue.insertMany(seedVenues);
};

seedDB().then(() => {
  mongoose.connection.close();
});
