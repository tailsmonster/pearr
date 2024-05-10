const express = require('express');
const commentControllers = require('../controllers/commentControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const commentRouter = express.Router();

commentRouter.post("/", commentControllers.createComment);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
commentRouter.get("/:id", checkAuthentication, commentControllers.showComment);
commentRouter.patch("/:id", checkAuthentication, commentControllers.updateComment);

module.exports = commentRouter;
