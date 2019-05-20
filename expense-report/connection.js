const mongoose = require("mongoose");

var url = "mongodb+srv://admin:admin@cluster0-7lrxy.mongodb.net/test2?retryWrites=true";

mongoose.connect(url);

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind("Mongo connection error"));

