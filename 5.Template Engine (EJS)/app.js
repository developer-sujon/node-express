const express = require("express");
const morgan = require("morgan");
const data = require("./data/data.json")
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("bicycles", {bicycles:data});
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const bicycle = data.find(b => b.id === id);
    res.render("overview", {bicycle});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`app is running ${PORT}`);
});
