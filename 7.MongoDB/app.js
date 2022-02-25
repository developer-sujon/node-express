const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const contactRoute = require("./routes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/contact", contactRoute);

const PORT = process.env.PORT || 8080;
mongoose
  .connect("mongodb://0.0.0.0:27017/test", { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((err) => console.log("Error occured"));
