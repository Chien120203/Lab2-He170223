const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  stories: {
    type: [Schema.Types.ObjectId],
    ref: "story",
    default: [],
  },
});

const Person = mongoose.model("person", personSchema);

module.exports = Person;
