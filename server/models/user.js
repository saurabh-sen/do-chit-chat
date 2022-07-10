const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
});

const generateAuthToken = (user) => {
  console.log({ user });
  console.log(process.env.JWT_PRIVATE_KEY);
  try {
    const token = jwt.sign(user.toJSON(), process.env.JWT_PRIVATE_KEY, {
      expiresIn: "7d",
    });

    console.log({ token });
    return token;
  } catch (error) {
    console.log({ error });
  }
};
const User = mongoose.model("user", userSchema);

const validate = (data) => {
  return joi
    .object({
      Username: joi.string().required().label("Username"),
      Email: joi.string().email().required().label("Email"),
      Password: passwordComplexity().required().label("Password"),
    })
    .validate(data);
};

module.exports = { User, validate, generateAuthToken };
