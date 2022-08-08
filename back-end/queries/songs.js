const db = require("../db/dbConfig")

  const getAllSongs = async () => {
    try {
      const allSongs = await db.any('SELECT * FROM songs;');
      return allSongs;
    } catch (error) {
      return error;
    }
  };

  const getSong = async () => {
    try {

    } catch (error) {
      return error;
    }
  }

  const createSong = async () => {
    try {

    } catch (error) {
      return error;
    }
  }

  const deleteSong = async () => {
    try {

    } catch (error) {
      return error;
    }  
  }
  
  const updateSong = async () => {
    try {

    } catch (error) {
      return error;
    }  
  }
  
  module.exports = {
    getAllSongs,
    getSong,
    createSong,
    deleteSong,
    updateSong,
  };