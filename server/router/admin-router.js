const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin-controller");

//creating routes for admin
router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

//exporting the admin router
module.exports = router;
