const developerRoutes = require("express").Router();
const {getAllDeveloper, getSingleDeveloper, createDeveloper, updateDeveloper, deleteDeveloper} = require("../controller/developerController")

developerRoutes.get('/', getAllDeveloper)
developerRoutes.get('/:id', getSingleDeveloper)
developerRoutes.post('/', createDeveloper)
developerRoutes.put('/:id', updateDeveloper)
developerRoutes.delete('/:id', deleteDeveloper)

module.exports = developerRoutes;
