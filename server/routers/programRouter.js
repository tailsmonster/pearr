const express = require('express');
const programControllers = require("../controllers/programControllers");
const checkAuthentication = require('../middleware/checkAuthentication');

const programRouter = express.Router();

programRouter.post("/", programControllers.createProgram);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
programRouter.get("/", checkAuthentication, programControllers.listAllPrograms);
programRouter.get("/:id", checkAuthentication, programControllers.showProgram);
programRouter.patch("/:id", checkAuthentication, programControllers.updateProgram);
programRouter.get('/recommends/:id', checkAuthentication, programControllers.getRecommends);

module.exports = programRouter;
