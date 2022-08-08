const db = require("../db/dbConfig")

  // Q U E R I E S
  const getAllSongs = async () => {
    try {
      const query = await db.any('SELECT * FROM songs;');
      return query;
    } catch (error) {
      return error;
    }
  };

  const getSong = async (id) => {
    try {
      const query = await db.one('SELECT * FROM songs WHERE id = $1;', id)
      return query;
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