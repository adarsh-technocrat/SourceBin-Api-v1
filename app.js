const express = require("express");

const app = express();

require("dotenv").config({ path: "config/config.env" });

// using middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing [Routes]
const postBin = require("./routes/sourceBin");

// using  [Routes]
app.use("/api/v1", postBin);

module.exports = app;
