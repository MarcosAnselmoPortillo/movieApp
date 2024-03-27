const { Router } = require("express");
const movieRouter = require("./movieRoute");
const genreRouter = require("./genreRoute");
const directorRouter = require("./directorRoute");

const router = Router();

router.use("/movies", movieRouter);

router.use("/genres", genreRouter);

router.use("/directors", directorRouter);

module.exports = router;