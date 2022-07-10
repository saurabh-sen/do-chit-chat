const { validate, User, generateAuthToken } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const router = require("express").Router();

router.post("/register", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ Email: req.body.Email });

    if (user)
      return res
        .status(409)
        .send({ message: "User with the given email id already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.Password, salt);

    await new User({ ...req.body, Password: hashPassword }).save();

    res.status(201).send({ message: "New User created!" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

const loginValidate = (data) => {
  return Joi.object({
    Email: Joi.string().email().required().label("Email"),
    Password: Joi.string().required().label("Password"),
  }).validate(data);
};
router.post("/login", async (req, res) => {
  try {
    const { error } = loginValidate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ Email: req.body.Email });
    console.log(user);
    if (!user)
      return res.status(401).send({ message: "Invalid Password or Email" });

    const validPassword = await bcrypt.compare(
      req.body.Password,
      user.Password
    );

    console.log({ validPassword });
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Password or Email" });

    const token = generateAuthToken(user);

    console.log({ token });
    return res.status(200).send({
      data: token,
      user: user.Username,
      message: "Logged in Successfully",
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
});

module.exports = router;
