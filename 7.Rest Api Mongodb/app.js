const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//app initialization
const app = express();

//todo routes
const todoRoute = require("./routes/todoRoute");

//middleware array
const middleware = [express.json(), morgan("dev")];

//use middleware
app.use(middleware);

//routers
app.use('/todo', todoRoute)

//database connection and server created
const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/todos");
    console.log("Database Connection is established");
    app.listen("5000", () => console.log("Server listening on port 5000"));
  } catch (error) {
    console.log(error);
  }
};
databaseConnection()

//default error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  } else {
    res.status(500).json({ error: "There is a Server side error" });
  }
});
