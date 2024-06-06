const express = require("express");
const bodyParser = require("body-parser");
const storyRouter = express.Router();
const { StoryController } = require("../controllers");

//router middleware
storyRouter.use(bodyParser.json());

//routes
storyRouter.put("/edit/:id", StoryController.update);
storyRouter.post("/add", StoryController.create);

module.exports = storyRouter;
