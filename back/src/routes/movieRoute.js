const { Router } = require("express");
const movieController = require("../controllers/movieController");
const validateMovieData = require("../middleware/validateMovieData");
const genreController = require("../controllers/genreController");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.get('/genres', genreController.getGenres);

// // @desc    Get a specific movie by its ID
// // @route   GET /api/movies/:id
// // @access  Public
// movieRouter.get("/:id", movieController.getOneMovie);

movieRouter.post('/', validateMovieData, movieController.createMovie);

module.exports = movieRouter;
