const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//static file
app.use(express.static(`${__dirname}/public/`));

//middlewares
//app.use(express.json());
//app.use(express.text());
//app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
  res.send(req.body);
});

app.get("/", (req, res) => {
  res.send("this is nome page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is contact page");
});

app.get("*", (req, res) => {
  res.send("this is 404 page");
});

app.listen(PORT, (req, res) => {
  console.log(`server is running ${PORT}`);
});
