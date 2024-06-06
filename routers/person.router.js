const express = require("express");
const bodyParser = require("body-parser");
const personRouter = express.Router();
const { PersonController } = require("../controllers");

//router middleware
personRouter.use(bodyParser.json());

//routes
personRouter.get("/list", PersonController.index);
personRouter.put("/edit/:id", PersonController.update);
personRouter.post("/add", PersonController.create);

module.exports = personRouter;
