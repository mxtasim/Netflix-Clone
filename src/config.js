// for database connection

const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017");

// check if the database online 

connect.then(() => {
    console.log("database connected successfully");
})
.catch(() => {
    console.log("database failed connecting");
});

// create a schema 
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection port
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;