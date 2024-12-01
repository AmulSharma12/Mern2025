const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

//routes
router.route("/").get(authControllers.home);

router.route("/register").post(authControllers.register);

//login route
router.route("/login").post(authControllers.login);

//exporting router module
module.exports = router;
