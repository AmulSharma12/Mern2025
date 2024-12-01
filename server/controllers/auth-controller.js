// controller is used to proces incoming request interacting with models(Data source) and sending back the response to client
//help us to organise the MVC pattern (Model view controller)
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//---------------------**
//Home controller logic
//---------------------**

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home page");
  } catch (error) {
    res.status(404).send({ msg: "Home page not found" });
  }
};

//---------------------**
//Registration controller logic
//---------------------**
const register = async (req, res) => {
  try {
    //destructuring the req
    const { username, email, phone, password } = req.body;

    const userEmailExist = await User.findOne({ email });
    if (userEmailExist) {
      return res.status(400).send({ msg: "user email already exist" });
    }

    //securing password using bcryp before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password,salt);

    const userData = await User.create({ username, email, phone, password: hashed_password });
    res.status(200).send({ msg: userData });
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
  }
};

//exporting all the controllers
module.exports = { home, register };
