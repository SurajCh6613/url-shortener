const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/url-shortener")
      .then(() => console.log("DB Connected"));
  } catch (error) {
    console.log("DB Connection Fail");
  }
};

module.exports = ConnectDB;
