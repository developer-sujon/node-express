const express = require("express");
const mongoose = require("mongoose");
const contactRoute = require("./routes/contactRoute");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.use("/contacts", contactRoute);
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.use("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

const PORT = process.env.PORT || 8080;
mongoose
  .connect("mongodb://0.0.0.0:27017/contact", { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER IS RUNNING ON ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
