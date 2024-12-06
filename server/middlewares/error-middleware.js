const errorMiddleware = (err, req, res, next) => {
  const status = err.status;
  const message = err.message || "Something wen't wrong";
  const extraDetails = err.extraDetails || "Internal Server error";

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
