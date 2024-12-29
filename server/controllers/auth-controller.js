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
//User registration logic
//---------------------**
const register = async (req, res, next) => {
  try {
    //destructuring the req
    const { username, email, phone, password } = req.body;

    const userEmailExist = await User.findOne({ email });
    if (userEmailExist) {
      return res.status(400).send({ message: "user email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).send({
      msg: "user registred successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
    // res.status(500).send({ msg: "Internal server error " });
  }
};

//---------------------**
//User login logic
//---------------------**
const login = async (req, res, next) => {
  const { email, password } = req.body;

  //checking whether the mail exist or not
  const userExist = await User.findOne({ email });

  //if no user exist with this email
  if (!userExist) {
    const status = 401;
    const message = "Invalid credentials";
    const extraDetails = "user doesn't exist for this credentials";
    const error = { status, message, extraDetails };
    next(error);
  }
  let isValidPassword;
  //if user exist compare the password entered by the user and the existing password
  if(userExist) {
    isValidPassword = await userExist.isValidPasswordEntered(password);
  }
  //if it is the valid password entered then the login is successfull otherwise invalid credentials
  if (isValidPassword) {
    return res.status(201).send({
      msg: "Login successfull",
      token: await userExist.generateToken(),
      userId: userExist._id,
    });
  } else {
    const status = 401;
    const message = "Invalid credentials";
    const extraDetails = "Invalid username or password.Please, try again";
    const error = { status, message, extraDetails };
    next(error);
  }
};

//---------------------**
//getUserData logic - for fetching the user data using the token
//---------------------**

const getUserData = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(201).json({ userData });
  } catch (error) {
    console.log(`auth-controller user route issue ${error}`);
    return res.status(201).json({ msg: "not working fine" });
  }
};

//exporting all the controllers
module.exports = { home, register, login, getUserData };
