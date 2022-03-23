const userRoutes = require("express").Router();
const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/userControllers");

//get all users
userRoutes.get("/all", getUsers);

//get a users
userRoutes.post("/create", createUser);

//login User
userRoutes.post("/login", loginUser);

module.exports = userRoutes;