require("dotenv").config();
require("./config/database");
const cors = require("cors");
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);

app.listen(7000, () => console.log("Server connected smoothly..."));