// Require express module
var express = require("express");
var app = express();

// Require body-parser module
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

app.get("/", function(req, res) {

    res.render("index");
});

// Set up a static directory for CSS
app.use(express.static(__dirname + "/static"));

// Use express to display files in a "views"
// directory that are server side
app.set("views", __dirname + "/views");

// Set the view engine so that express knows are are using ejs
app.set("view engine", "ejs");

// Redirect to "result.ejs" on a form submit
// FROM the home page
app.post("/result", function(req, res) {

    // Create an object and
    // pass in properties with form post values
    var dojo_user_form = {
        name: req.body.name,
        dojo_location: req.body.dojo_location,
        fav_language: req.body.fav_language,
        comment: req.body.comment

    };

    console.log(dojo_user_form);

    // Pass in the dojo_user_form object as a
    // property value of a
    // made up object dojo_user
    res.render("result", {dojo_user: dojo_user_form});
});

// When on the "result" page & clicking on the
// "Go Back" form button go to the home page
app.post("/gohome", function(req, res) {

    res.redirect("/");


});





// Show message in command line
app.listen(8000, function() {
    console.log("Express.js running on localhost:8000");
});
