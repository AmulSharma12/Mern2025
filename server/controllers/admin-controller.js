const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async (req, res, next) => {
  try {
    //fetching all the users except password field
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "user not found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(`Admin route - getAllUsers method: ${error}`);
    next(error);
  }
};

//deleting user by their id
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    console.log(`AdminController deleteUserById :${error}`);
    next(error);
  }
};

//getAllContacts functionality
const getAllContacts = async (req, res, next) => {
  try {
    //fetching all the contacts
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "contacts not found" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    console.log(`Admin route - getAllContacts method: ${error}`);
    next(error);
  }
};

// update functionality - getting user by id
const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`error - ${error}`);
    next(error);
  }
};

//update functionality - updating user through their id
const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id; //getting id from the url
    const updatedUserData = req.body; //data sent from the frontend
    const updatedUser = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    ); //filter out then update using $set
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(`Admin update functionality - ${error}`);
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
};
