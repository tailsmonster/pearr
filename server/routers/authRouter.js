const express = require('express');
const authControllers = require('../controllers/authControllers');

const authRouter = express.Router();

/**
 * Returns logged in user
 */
authRouter.get('/user', authControllers.showMe);
authRouter.get('/organization', authControllers.showMe);
/**
 * Logs in user
 */
authRouter.post('/login', authControllers.loginUser);
authRouter.post('/loginOrganization', authControllers.logInOrganization);
/**
 * Resets session
 */
authRouter.delete('/logout', authControllers.logoutUser);

module.exports = authRouter;
