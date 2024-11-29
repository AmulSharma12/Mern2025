const express = require("express");
const router = express.Router();

//One way to create route
router.get("/", (req, res) => {
  res.status(200).send("Welcome to Deep matrix");
});

//second way tto create route
router.route("/").get((req, res) => {
  res.status(200).send("welcome to deep matrix");
});

router.route("/register").get((req, res) => {
  res.status(200).send("register page");
});



//exporting router module
module.exports = router;
