const genreService = require("../services/genreService");

module.exports = {
    getGenres: async  (req, res) => {
        try {
            const genres = await genreService.getGenres();
            if (!genres || genres.length === 0) {
                return res.status(200).send("No genres found");
            }
            return res.status(200).json(genres);
        } catch (err) {
            console.log(err);
            return res.status(500).json({message:"Server error"})
        }
    }
}