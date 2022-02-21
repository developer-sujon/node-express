const express = require("express");
const app = express();
const userRoute = require("./userRoute");
const postRoute = require("./postRoute");

//user rout
app.use("/user", userRoute);
app.use("/posts", postRoute);


app.use("*", (req, res) => {
  res.send("404 not found");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`Server is Running ${PORT}`);
});
