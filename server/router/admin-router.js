const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth-middleware");
const { adminMiddleware } = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
} = require("../controllers/admin-controller");

//creating routes for admin
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

//exporting the admin router
module.exports = router;
