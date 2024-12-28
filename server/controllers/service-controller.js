const Service = require("../models/service-model");
const services = async (req, res) => {
  try {
    const data = await Service.find();
    if (!data) {
      return res.status(404).json({ msg: "No services found" });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.log(`Error fetching the services ${error}`);
    return res
      .status(500)
      .json({ msg: `Error fetching the services:- ${error}` });
  }
};

module.exports = services;
