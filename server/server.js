require("dotenv").config(); //it allow us to use dotenv file key value o be used
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/db");

// json  middleware - to process incoming request having json payload
app.use(express.json());

//mount the auth router
app.use("/api/auth", router);

//listening to port 5000
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening at port: ${PORT}`);
  });
});
