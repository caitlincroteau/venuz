// require("dotenv").config();

// const db = mongoose.connection;

// //get notification of errors
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

//requirements
const express = require("express");
const morgan = require("morgan");
const { router } = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

//setup
const app = express();
const port = 3000;
dotenv.config();

//mongo database connection
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

//middleware
app.use(morgan("dev"));
app.use(cors());
//so app can access json data
app.use(express.json());
//so app can access form input data
app.use(express.urlencoded({ extended: false }));
app.use(router);

//listener
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//video
//https://www.youtube.com/watch?v=9OfL9H6AmhQ&ab_channel=Devtamin
