const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");


const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const jobsRouter = require("./jobs/jobs.router");
const interactionsRouter = require("./interactions/interactions.router");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/jobs", jobsRouter);
app.use("/interactions", interactionsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
