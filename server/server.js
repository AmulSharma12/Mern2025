const express = require("express");
const app = express();
const router = require("./router/auth-router");

//mount the auth router
app.use("/api/auth", router);


//listening to port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is listening at port: ${PORT}`);
});
