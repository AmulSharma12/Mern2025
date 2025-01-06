const adminMiddleware = (req, res, next) => {
  try {
    const isAdminUser = req.user.isAdmin;
    if (!isAdminUser) {
      res.status(403).json({ message: "Access Denied! user is not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { adminMiddleware };
