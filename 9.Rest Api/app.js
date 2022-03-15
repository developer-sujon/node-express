import express from "express";
import mongoose from "mongoose";
import { userRoutes } from "./routes/userRoutes";

const URL = "mongodb://0.0.0.0:27017/parcelkoi";
const options = {};
const app = express();

//middleware array
app.use(express.json());

userRoutes(app);

const PORT = process.env.PORT || 8080;
(async function () {
  try {
    await mongoose.connect(URL, options);
    app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));
    console.log(`Database is stablish`);
  } catch (error) {
    console.log(error);
  }
})();
