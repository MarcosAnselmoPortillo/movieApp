const Director = require('../models/Director');

const directorService = {
  async getAllDirectors() {
    return await Director.find();
  },

  async getDirectorById(id) {
    return await Director.findById(id);
  },

  async createDirector(directorData) {
    return await Director.create(directorData);
  },

  async updateDirector(id, directorData) {
    return await Director.findByIdAndUpdate(id, directorData, { new: true });
  },

  async deleteDirector(id) {
    return await Director.findByIdAndDelete(id);
  }
};

module.exports = directorService;
