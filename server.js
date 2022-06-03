const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");
require("dotenv/config");

const app = express();
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT, "127.0.0.1", console.log("Server is running"));

mongoose.connect(process.env.DB_LINK, console.log("DB connected"));
