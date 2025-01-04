const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth-middleware");
const { adminMiddleware } = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
} = require("../controllers/admin-controller");

//creating routes for admin
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

//for update - getting user by id
router.route("/users/:id").get(authMiddleware, adminMiddleware, getUserById);

//exporting the admin router
module.exports = router;
