const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB successfully :D");
  } catch (error) {
    console.log("Error occured while connecting to the DB ", error);
  }
};
