const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth-middleware");
const { adminMiddleware } = require("../middlewares/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
} = require("../controllers/admin-controller");

//creating routes for admin
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);

//exporting the admin router
module.exports = router;
