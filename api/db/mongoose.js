// This file will handle connection logic to the MongoDB database

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/TaskManager", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to Mongodb successfully :");
  })
  .catch((e) => {
    console.log("Erroe while attempting to connect to MongoDB");
    console.log(e);
  });

// To prevent description warnings (from MongoDB native driver)
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
