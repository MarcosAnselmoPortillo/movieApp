const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String },
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;
