// Is the user logged in?
// Not specific user, just ANY user
const checkAuthentication = (req, res, next) => {
  const { userId, organizationId } = req.session;
  if (userId || organizationId) return next();
  return res.sendStatus(401);
};

module.exports = checkAuthentication;
