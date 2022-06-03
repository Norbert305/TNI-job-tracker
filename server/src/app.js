const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(cors());
app.use(express.json());

// routes



// not found
app.use(notFound);

// errors
app.use(errorHandler);

module.exports = app;