const express = require("express");
const router = express.Router();
const services = require("../controllers/service-controller");

//creating service route - for list down all the services
router.route("/service").get(services);

//exporting router being utilised by server.js
module.exports = router;
