const express = require("express");
const productRoute = require("./routes/productRoute")

const app = express();

app.use(express.json());
app.use('/api', productRoute)


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`app is listening on ${PORT}`));