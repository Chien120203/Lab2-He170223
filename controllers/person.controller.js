const db = require("../models");
const Person = db.Person;

// create
const create = async (req, res, next) => {
    try {
        const newPerson = new Person({
            name: req.body.name,
            age: req.body.age,
        });

        await newPerson.save()
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
      name: req.body.name,
      age: req.body.age,
      stories: req.body.stories,
    };

    const result = await Person.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

//list 
const index = async (req, res, next) => {
  try {
    const result = await Person.find().populate({
      path: 'stories',
      select: 'title',
      options: { 
        transform: function(doc) {
          return doc.title;
        }
      }
    }).exec();

    res.status(200).json(result);
  } catch (error) {
      next(error);
  }
}

module.exports = {
  index,
  update,
  create,
}