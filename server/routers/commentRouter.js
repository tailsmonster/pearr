const express = require('express');
const commentControllers = require('../controllers/commentControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const commentRouter = express.Router();

commentRouter.post("/", checkAuthentication, commentControllers.createComment);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
commentRouter.get("/", checkAuthentication, commentControllers.getAllComments);
commentRouter.get("/:id", checkAuthentication, commentControllers.showComment);
commentRouter.get('/all/:id', checkAuthentication, commentControllers.getAllCommentsOfUser);
commentRouter.patch("/:id", checkAuthentication, commentControllers.updateComment);
commentRouter.delete('/:id', checkAuthentication, commentControllers.deleteComment)

module.exports = commentRouter;
