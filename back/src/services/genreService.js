const Genre = require("../models/Genre");

module.exports = {
  getGenres: async () => {
    // console.log("Paso por getGenre service");
    const genres = await Genre.find();
    // console.log(genres);
    return genres;
  },
};
