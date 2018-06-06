const express = require("express");
const mongoose = require("mongojs");

const app = express();

var db = mongojs("mongodb://mongo:27017", ["collection"]);

db.collection.insert({name: "codemancers"}, () => {
  console.log("saved");
});

app.get("/", (req, res) => {
  db.collection.find({}, (err, names) => {
    res.send(names);
  });
});

app.listen(3000, () => {
  console.log("Listening");
});
