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
    res.status(500).send({ msg: "Internal server error " });
  }
};

//---------------------**
//User login logic
//---------------------**
const login = async (req, res) => {
  const {email, password} = req.body;

  //checking whether the mail exist or not
  const userExist = await User.findOne({ email });

  //if no user exist with this email
  if (!userExist) {
    return res.status(401).send({ msg: "Invalid credentials" });
  }

  //if user exist compare the password entered by the user and the existing password
  const isValidPassword = await userExist.isValidPasswordEntered(password);

  //if it is the valid password entered then the login is successfull otherwise invalid credentials
  if (isValidPassword) {
    return res.status(201).send({
      msg: "Login successfull",
      token: await userExist.generateToken(),
      userId: userExist._id,
    });
  } else {
    return res
      .status(401)
      .send({ msg: "Invalid username or password,Please try again" });
  }
};

//exporting all the controllers
module.exports = { home, register, login };
