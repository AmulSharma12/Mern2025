const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");

//route for contact and their logic
router.route("/contact").post(contactForm);

module.exports = router;
