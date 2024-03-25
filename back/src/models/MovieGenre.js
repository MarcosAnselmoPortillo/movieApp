const {Schema, model} = require('mongoose');

const movieGenreSchema = new Schema({
    movie: {type: Schema.Types.ObjectId, ref: 'Movie', required: true},
    genre: {type: Schema.Types.ObjectId, ref: 'Genre', required: true}
});

const MovieGenre =  model('MovieGenre', movieGenreSchema)

module.exports = MovieGenre;