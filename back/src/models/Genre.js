const { Schema, model } = require("mongoose");

const genreSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

const Genre = model("Genre", genreSchema);

module.exports = Genre;
