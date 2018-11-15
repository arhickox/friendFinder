//Requires
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes linking to apiRoutes.js and htmlRoutes.js
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start Server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
