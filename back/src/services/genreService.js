const Genre = require("../models/Genre");

module.exports = {
  getGenres: async () => {
    // console.log("Paso por getGenre service");
    const genres = await Genre.find();
    // console.log(genres);
    return genres;
  },
  addGenre: async (genreData) => {
    return await Genre.create(genreData);
  },
  updateGenre: async (id, genreData) => {
    try {
      // id: The unique identifier of the genre document to be updated.
      // genreData: An object containing the new values for the genre attributes.
      // { new: true }: An option that specifies that the method should return the updated document rather than the original one.
      const updatedGenre = await Genre.findByIdAndUpdate(id, genreData, {
        new: true,
      });
      return updatedGenre;
    } catch (error) {
      throw new Error("Could not update genre");
    }
  },
  async deleteGenre(id) {
    try {
      const deletedGenre = await Genre.findByIdAndDelete(id);
      return deletedGenre;
    } catch (error) {
      // Handle specific errors if needed
      if (error.name === "CastError") {
        throw new Error("Invalid genre ID format");
      } else {
        throw new Error("Could not delete genre");
      }
    }
  },
};
