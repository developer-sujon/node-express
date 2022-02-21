const express = require("express");
const developerRoutes = require("./routes/developerRoutes");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/developers', developerRoutes)

app.get("*", (req, res) => {
  res.send(`<h1>${req.url} page not found</h1>`);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log(`App is running on port ${PORT}`);
});
