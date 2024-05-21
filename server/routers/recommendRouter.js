const express = require('express');
const recommendController = require('../controllers/recommendControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const recommendRouter = express.Router();

recommendRouter.post("/", recommendController.createRecommend);

// These actions require users to be logged in (authentication)
// Express lets us pass a piece of middleware to run for a specific endpoint
recommendRouter.get("/", checkAuthentication, recommendController.listAllRecommends);
recommendRouter.get("/all/:id", checkAuthentication, recommendController.listAllUserRecommends);
recommendRouter.get("/:id", checkAuthentication, recommendController.showRecommend);
recommendRouter.patch("/:id", checkAuthentication, recommendController.updateRecommend);
recommendRouter.get('/check', checkAuthentication, recommendController.checkIfExists)

module.exports = recommendRouter;
