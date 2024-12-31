const adminMiddleware = (req, res, next) => {
  try {
    console.log(req.user.isAdmin);
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
