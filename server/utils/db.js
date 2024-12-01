const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.error(error);
    console.log("Db connection failed");
  }
};

module.exports = connectDB;