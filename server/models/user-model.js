const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//creating user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//securing password using bcryptjs
userSchema.pre("save", async function (next) {
  const user = this;

  //if the user password is already modified
  if (user.isModified(user.password)) {
    next();
  }

  //securing password using bcrypt before saving to the database
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(user.password, salt);
    user.password = hashed_password;
  } catch (error) {
    next(error);
  }
});

//creaing user model
const User = new mongoose.model("User", userSchema);

//export User model
module.exports = User;
