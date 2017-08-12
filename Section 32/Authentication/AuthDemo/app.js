var express = require("express"),
    mongoose = require("mongoose");

mongoose.Promise = global.Promise; 
mongoose.connect("mongodb://localhost/auth_demo_app", {useMongoClient: true});

var app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("home");
});

app.get("/secret", function(req, res){
  res.render("secret");
});

app.listen(3000, function(){
  console.log("server started");
});