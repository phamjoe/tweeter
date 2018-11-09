"use strict";

// Basic express setup:
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 8080;
}
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const dotenv        = require('dotenv').config();
const {MongoClient} = require("mongodb");
const MONGODB_URI   = "mongodb://localhost:27017/tweeter";

//const MONGODB_URI   = process.env.MONGODB_URI; /*Heroku Deployment*/


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.
//const db = require("./lib/in-memory-db");
// MongoClient.connect(MONGODB_URI, (err, db) => {
// console.log(`Connected to mongodb: ${MONGODB_URI}`);

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
console.log(`Connected to mongodb: ${MONGODB_URI}`);
const DataHelpers = require("./lib/data-helpers.js")(db);
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // We have a connection to the "tweeter" db, starting here.

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:


// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log( "Tweeter app listening on port " + PORT);
});
})
