const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validatior");
const { authMiddleware } = require("../middlewares/auth-middleware");

//routes
router.route("/").get(authControllers.home);

router
  .route("/register")
  .post(validate(signupSchema), authControllers.register);

//login route
router.route("/login").post(validate(loginSchema), authControllers.login);

//user route - for fetching the user details
router.route("/user").get(authMiddleware, authControllers.getUserData);

//exporting router module
module.exports = router;
