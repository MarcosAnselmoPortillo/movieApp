const { Router } = require("express");
const movieController = require("../controllers/movieController");
const validateMovieData = require("../middleware/validateMovieData");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

// // @desc    Get a specific movie by its ID
// // @route   GET /api/movies/:id
// // @access  Public
// movieRouter.get("/:id", movieController.getOneMovie);

movieRouter.post("/", validateMovieData, movieController.createMovie);

// // @desc     Update a specific movie by its ID
// // @route    PUT /api/movies/:id
// // @access   Private (token) - only the user who created the movie can update it
// movieRouter.put(
//   "/:id",
//   movieController.findByIdAndUpdate,
//   movieController.verifyAuthorId,
//   validateMovieData,
//   movieController.updateMovie
// );

// // @desc     Delete a movie by its ID
// // @route    DELETE /api/movies/:id
// // @access   Private (token) -  only the user who created the movie can delete it
// movieRouter.delete(
//   "/:id",
//   movieController.findByIdAndDelete,
//   movieController.verifyAuthorId,
//   movieController.deleteMovie
// );

module.exports = movieRouter;
