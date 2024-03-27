const { Router } = require("express");
const genreController = require("../controllers/genreController");
const validateGenreData = require("../middleware/validateGenreData");

const genreRouter = Router();

genreRouter.get("/", genreController.getGenres);

genreRouter.post("/", validateGenreData, genreController.createGenre);

genreRouter.put("/:id", genreController.updateGenre);

genreRouter.delete("/:id", genreController.deleteGenre);

module.exports = genreRouter;
