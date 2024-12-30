const User = require("../models/user-model");

const getAllUsers = async (req, res, next) => {
  try {
    //fetching all the users except password field
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllUsers;
