const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const httpErrors = require("http-errors");
const db = require("./models");
const { PersonRouter, StoryRouter } = require("./routers");

require("dotenv").config();

//init web server 
const app = express();

//add middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome web REST API - NodeJS",
  })
});

app.use("/api/person", PersonRouter);
app.use("/api/story", StoryRouter);

app.use(async (req, res, next) => {
  next(httpErrors.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
      "status": err.status || 500,
      "message": err.message
  })
})

//trigger requests to express web server
const port = process.env.PORT || 9999;
const hostName = process.env.HOST_NAME || "localhost";
app.listen(port, hostName, () => {
  console.log(`Server is running at : http://${hostName}:${port}`);
  db.connectDB();
})