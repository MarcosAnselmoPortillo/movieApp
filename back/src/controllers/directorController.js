const directorService = require('../services/directorService');

const directorController = {
  async getAllDirectors(req, res, next) {
    try {
      const directors = await directorService.getAllDirectors();
      res.json(directors);
    } catch (error) {
      next(error);
    }
  },

  async getDirectorById(req, res, next) {
    try {
      const director = await directorService.getDirectorById(req.params.id);
      if (!director) {
        return res.status(404).json({ message: 'Director not found' });
      }
      res.json(director);
    } catch (error) {
      next(error);
    }
  },

  async createDirector(req, res, next) {
    try {
      const director = await directorService.createDirector(req.body);
      res.status(201).json(director);
    } catch (error) {
      next(error);
    }
  },

  async updateDirector(req, res, next) {
    try {
      const director = await directorService.updateDirector(req.params.id, req.body);
      res.json(director);
    } catch (error) {
      next(error);
    }
  },

  async deleteDirector(req, res, next) {
    try {
      await directorService.deleteDirector(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = directorController;
