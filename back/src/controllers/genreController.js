const genreService = require("../services/genreService");

module.exports = {
  getGenres: async (req, res) => {
    try {
      const genres = await genreService.getGenres();
      if (!genres || genres.length === 0) {
        return res.status(200).send("No genres found");
      }
      return res.status(200).json(genres);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Server error" });
    }
  },
  createGenre: async (req, res) => {
    try {
      const { name, description } = req.body;
      const genre = await genreService.addGenre({ name, description });
      return res.status(201).json(genre);
    } catch (error) {
      console.log(error);
      return res.status(409).json({ message: "Conflict with the database." });
    }
  },
  updateGenre: async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    try {
      const updatedData = await genreService.updateGenre(id, data);
      if (!updatedData) {
        return res
          .status(404)
          .json({ message: `Cannot find the genre with the id of ${id}` });
      }
      return res.status(200).json(updatedData);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async deleteGenre(req, res) {
    const id = req.params.id;
    try {
      const deletedGenre = await genreService.deleteGenre(id);
      if (!deletedGenre) {
        return res.status(404).json({ message: `Genre with id ${id} not found` });
      }
      return res.status(200).json({ message: 'Genre deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
