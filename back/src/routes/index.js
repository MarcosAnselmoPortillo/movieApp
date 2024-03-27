const { Router } = require("express");
const movieRouter = require("./movieRoute");
const genreRouter = require("./genreRoute");

const router = Router();

router.use("/movies", movieRouter);

router.use("/genres", genreRouter);

module.exports = router;