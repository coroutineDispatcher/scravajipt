const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { registrationValidation, loginValidation } = require("../validation");
const jwt = require("jsonwebtoken");

router.post("/register", async (request, response) => {
  //validate first
  const { error } = registrationValidation(request.body);
  if (error)
    return response.status(400).send({
      message: error.details[0].message,
    });

  // check if already exists
  const emailExists = await User.findOne({ email: request.body.email });
  if (emailExists)
    return response.status(400).send({
      message: "Email already exists",
    });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  const user = new User({
    name: request.body.name,
    email: request.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    response.send(savedUser);
  } catch (err) {
    response.status(400).send({
      message: err,
    });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error)
    return res.status(400).send({
      message: error.details[0].message,
    });

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).send({
      message: "Email or password is wrong",
    });

  const password = await bcrypt.compare(req.body.password, user.password);
  if (!password)
    return res.status(400).send({
      message: "Email or password is wrong",
    });

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth-token", token).send({ token: token });
});

module.exports = router;
