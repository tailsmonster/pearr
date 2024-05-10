const express = require('express');
const organizationControllers = require('../controllers/organizationControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const organizationRouter = express.Router();

organizationRouter.post('/', organizationControllers.createOrg);

organizationRouter.get("/", checkAuthentication, organizationControllers.listOrganizations);
organizationRouter.get("/:id", checkAuthentication, organizationControllers.showOrganization);
organizationRouter.get("/programs/:id", checkAuthentication, organizationControllers.showOrganizationPrograms);
organizationRouter.patch("/:id", checkAuthentication, organizationControllers.updateOrganization);

module.exports = organizationRouter;
