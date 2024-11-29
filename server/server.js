const express = require("express");
const app = express();
const router = require("./router/auth-router");

//mount the router
app.use("/api/auth", router);

//home route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Deep Matrix Home page");
});

//register route
app.get("/register", (req, res) => {
  res.status(200).send("Register page ok is working");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is listening at port: ${PORT}`);
});
