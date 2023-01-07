require("dotenv").config();

//connect to Mongo atlas database
const mongoose = require("mongoose");

mongoose.connect(process.env.REACT_APP_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
