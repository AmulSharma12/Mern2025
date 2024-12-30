const express = require("express");
const router = express.Router();
const getAllUsers = require("../controllers/admin-controller");

//creating routes for admin
router.route("/users").get(getAllUsers);

//exporting the admin router
module.exports = router;
