const express = require("express");
const songs = express.Router();

const db = require("../db/dbConfig");
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");

// *****************************************
//              R O U T E S
// *****************************************
// Index: Get a list (or index) of all songs
songs.get('/', async (req, res) => {
  const data = await getAllSongs();
  // Validating
  if (data) {  
    res.status(200).json(data);
  } else {
    // 500: internal server error
    res.status(500).json({ error: 'server error' });
  }
});

// Show: Get an individual view (show one song)
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await getSong(id);
  // Validating
  if (data) {  
    res.status(200).json(data);
  } else {
    // 404: Resource not found
    res.status(404).json({ error: "not found" });
  }
});

module.exports = songs;