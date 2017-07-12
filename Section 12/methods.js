var catspace = {};
var dogspace = {}

catspace.speak = function(){
  return "MEOW";
}

dogspace.speak= function(){
  return "WOOF";
}

var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

comments.print = function(){
  this.data.forEach(function(el){
    console.log(el);
  });
}