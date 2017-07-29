var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
    {name: "Granite Hill", image: "https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg"},
    {name: "Mountain Goat's Nest", image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
  ]
  
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, function(){
  console.log("YelpCamp has started");
});