// DEPENDENCIES
const express = require("express");
const songsController = require("./controllers/songController");

// CONFIGURATION
const app = express();

app.use(express.json());
app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
})
app.get("*", (req, res) => {
  res.status(404).send("There's no .... for you, here!")
})

// EXPORT
module.exports = app;