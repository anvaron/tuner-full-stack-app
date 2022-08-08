const express = require("express");
const songs = express.Router();

const db = require("../db/dbConfig");
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs");

// ROUTES
songs.get('/', async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs) {  
    res.status(200).json(allSongs);
  } else {
    // 500: internal server error
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = songs;