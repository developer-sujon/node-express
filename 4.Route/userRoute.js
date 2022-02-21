const userRoute = require("express").Router();

//routes
userRoute.get("/login", (req, res) => {
  res.send("<h1>I'am login page</h1>");
});

userRoute.get("/logout", (req, res) => {
  res.send("<h1>I'am logout page</h1>");
});

userRoute.get("/singup", (req, res) => {
  res.send("<h1>I'am singup page</h1>");
});

module.exports = userRoute;