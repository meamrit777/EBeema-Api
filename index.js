const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

const multer = require("multer");

dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use("/api/auth", authRoute);
app.listen(5001, () => {
  console.log("Backend is running");
});
