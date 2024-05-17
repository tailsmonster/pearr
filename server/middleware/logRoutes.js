const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}, ${req.session.userId || req.session.organizationId || -1}`);
  next();
};

module.exports = logRoutes;
