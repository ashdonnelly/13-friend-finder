// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// set up body parser
var jsonParser = bodyParser.json();

// for URLs parser
var urlParser = bodyParser.urlencoded({ extended: false })

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTER

// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
