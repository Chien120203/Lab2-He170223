const db = require("../models");
const Story = db.Story;

// create new user
const create = async (req, res, next) => {
    try {
        const newStory = new Story({
            title: req.body.title,
        });

        await newStory.save()
          .then(newDoc => res.status(201).json(newDoc))
          .catch(error => next(error));
    } catch (error) {
        next(error);
    }
}

// update
const update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = {
      title: req.body.title,
      fans: req.body.fans,
    };

    const result = await Story.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  update,
  create,
}