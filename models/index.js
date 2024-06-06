const mongoose = require('mongoose');
const Person = require('./person.model');
const Story = require('./story.model');

mongoose.Promise = global.Promise;

// khai bao doi tuong dai dien co so du lieu can lm vc cua mongodb server
const db = {};
db.Person = Person;
db.Story = Story;

const monggoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
const databaseName = process.env.DB_NAME || "SE1740_DB";

db.connectDB = async () => {
    mongoose.connect(monggoURI, {
        dbName: databaseName,
    })
    .then(() => console.log("Connect mongoDB successfully."))
    .catch(error => {
        console.error(error.message);
        process.exit();
    }) 
}

module.exports = db;