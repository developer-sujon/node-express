const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv").config();

//routes
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/usersRoutes");

//initialize application
const app = express();
const PORT = 5000;
const URL = "mongodb://0.0.0.0:27017/contacts";
const options = {};

//middleware array
const middleware = [morgan("dev"), express.json()];

//user middleware array
app.use(middleware);

//routes
app.use("/contacts", contactRoutes);
app.use("/users", userRoutes);
app.use('*', (req, res) => {
  res.status(404).send('page not found');
});

//database connection and application listening
(async function () {
  try {
    await mongoose.connect(URL, options);
    console.log("Database connection established");
    app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
})();

//default error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(500).json({ error: "There was server side error" });
  }
  res.json({ message: "All Okay" });
});