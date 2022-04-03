const User = require("../models/User");
const Contact = require("../models/Contact");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("contacts", "name phone status -_id");
    if (users && users.length > 0) {
      res.json({ result: users });
    } else {
      res.status(404).json({ message: "Users Not Found", result: users });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//create new user
exports.createUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    const user = await User({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
      status: req.body.status,
    });
    await user.save();
    res.json({ message: "User created successfully", result: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};

//login user
exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password,
      );

      if (isValidPassword) {
        //generate jsonwebtoken token
        const token = jwt.sign(
          { name: user[0].name, userId: user[0]._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          },
          {
            algorithm: "RS256",
          },
        );

        res.json({ messages: "Login Successfull", token: token });
      } else {
        res.status(401).json({ error: "Unauthorized Credential" });
      }
    } else {
      res.status(404).json({ message: "User Not Found", result: user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "There was  server error" });
  }
};
