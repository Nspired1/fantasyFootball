const mongoose = require('mongoose');
const config = require('config');
const dbLink = config.get("mongoURI");

//For troubleshooting in a dev environment debug is set to true
mongoose.set("debug", true);

mongoose
  .connect(dbLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to hosted Atlas Mongo Database!");
  })
  .catch((err) => {
    console.log(`Error!: ${err}`);
  });

module.exports.Todo = require("./todoSchema");