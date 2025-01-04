const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Invalid token" });
  }

  //now if i have valid token then i will split out the bearer part from it
  const updatedToken = token.replace("Bearer", "").trim();
  //now we need to verify the token with the help of JWT_SECRET_KEY
  const isVerified = jwt.verify(updatedToken, process.env.JWT_SECRET_KEY);
  //finding user details with the help of data returned by jwt.verify i.e. mail

  try {
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
  } catch (error) {
    console.log("auth-middleware : ", error);
    
  }

  next();
};

module.exports = { authMiddleware };
