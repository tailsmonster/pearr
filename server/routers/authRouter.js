const express = require('express');
const authControllers = require('../controllers/authControllers');

const authRouter = express.Router();

/**
 * Returns logged in user
 */
authRouter.get('/me', authControllers.showMe);
/**
 * Logs in user
 */
authRouter.post('/login', authControllers.loginUser);
/**
 * Resets session
 */
authRouter.delete('/logout', authControllers.logoutUser);

module.exports = authRouter;
