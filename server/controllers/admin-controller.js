const User = require("../models/user-model");
const Contact = require("../models/contact-model");
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
  }
};

//getAllContacts functionality
const getAllContacts = async (req, res, next) => {
  try {
    //fetching all the contacts
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "contacts not found" });
    }

    return res.status(200).json(contacts);
  } catch (error) {
    console.log(`Admin route - getAllContacts method: ${error}`);
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById };
