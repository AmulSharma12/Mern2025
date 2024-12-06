require("dotenv").config(); //it allow us to use dotenv file key value o be used
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// json  middleware - to process incoming request having json payload
app.use(express.json());

//mount the auth router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

//Integrating error middleware to application
app.use(errorMiddleware);

//listening to port 5000
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening at port: ${PORT}`);
  });
});
