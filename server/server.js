require("dotenv").config(); //it allow us to use dotenv file key value o be used
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");

//including the corsOptions allowing the origin/methods
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "POST, GET, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

//implementing cors as middleware
app.use(cors(corsOptions));

// json  middleware - to process incoming request having json payload
app.use(express.json());

//mount the auth router
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//admin routes
app.use("/api/admin", adminRoute);

//Integrating error middleware to application
app.use(errorMiddleware);

//listening to port 5000
const PORT = 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is listening at port: ${PORT}`);
  });
});
