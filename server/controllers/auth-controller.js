// controller is used to proces incoming request interacting with models(Data source) and sending back the response to client
//help us to organise the MVC pattern (Model view controller)

//---------------------**
//Home controller logic
//---------------------**

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to home page");
  } catch (error) {
    res.status(404).send({ msg: "Home page not found" });
  }
};

//---------------------**
//Registration controller logic
//---------------------**
const register = async (req, res) => {
  try {
    res.status(200).send("welcome to register page");
  } catch (error) {
    res.status(404).send({ msg: "register page not found" });
  }
};

//exporting all the controllers
module.exports = {home,register}
