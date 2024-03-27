const { Router } = require("express");
const directorController = require("../controllers/directorController")

const directorRoute = Router();
directorRoute.get('/', directorController.getAllDirectors);
directorRoute.get('/:id', directorController.getDirectorById);
directorRoute.post('/', directorController.createDirector);
directorRoute.put('/:id', directorController.updateDirector);
directorRoute.delete('/:id', directorController.deleteDirector);

module.exports = directorRoute;