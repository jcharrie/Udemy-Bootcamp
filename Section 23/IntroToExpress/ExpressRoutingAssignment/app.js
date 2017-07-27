var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/:routeName", function(req, res){
  var routeName = req.params.routeName;
  res.send("This is the " + routeName + " route");
});

app.get("/speak/:animal", function(req, res){
  // var animals = [{id: "pig", sound: "Oink"}, {id: "cow", sound: "Moo"}, {id: "dog", sound: "Woof Woof!"}];
  // var animal = req.params.animal;

  // animals.forEach(function(e){
  //   if(e.id === animal){
  //     sound = e.sound;
  //   }
  // });

  // This is the solution code down here
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "I hate you human",
    goldfish: "..."
  }

  animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];


  res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:phrase/:amount", function(req, res){
  var phrase = req.params.phrase;
  var amount = Number(req.params.amount);
  var repeated = "";

  for (i = 0; i < amount; i++){
    repeated += phrase + " ";
  }

  res.send(repeated);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function(){
  console.log("Server has started!!!");
});