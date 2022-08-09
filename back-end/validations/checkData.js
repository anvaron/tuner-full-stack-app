 
// *****************************************
//   G E N E R A L  V A L I D A T I O N S
// *****************************************
//
const checkSong = (req, res, next) => {
  console.log('name is being checked');
  if (req.body.name) {
    console.log("we've got a song name here!");
    next();
  } else {
    res.status(400).json({ error: 'The song name is required...' });
  }
};

// 
const checkArtist = (req, res, next) => {
  console.log('artist is being checked');
  if (req.body.artist) {
    console.log("we've got an artist name here!");
    next();
  } else {
    res.status(400).json({ error: 'The artist name is required...' });
  }
};

// 
const checkBoolean = (req, res, next) => {
  if (req.body.is_favorite) {
    next();
  } else {
    res.status(400).json({ error: 'is_favorite must be a boolean value' });
  }
};

module.exports = { 
  checkSong, 
  checkBoolean, 
  checkArtist 
};