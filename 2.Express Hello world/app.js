const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send('404');
});

app.listen(PORT, (req, res) => {
  console.log(`server is running ${PORT}`);
});
