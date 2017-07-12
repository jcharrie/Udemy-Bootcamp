// each movie has a title, rating, and haswatched property
// iterates through the array and prints

var movies = [
  {hasWatched: true, title: "In Bruges", rating: "5"},
  {hasWatched: false, title: "Frozen", rating: "4.5"},
  {hasWatched: true, title: "Mad Max Fury Road", rating: "5"},
  {hasWatched: false, title: "Les Miserables", rating: "3.5"}
];

function showMovies(arr){
  arr.forEach(function(data) {
    console.log(buildString(data));
  });
}

function buildString(data){
  var result = "You have ";
  if(data.hasWatched){
    result += "watched ";
  } else{
    result += "not watched ";
  }
  result += "\"" + data.title + "\" - ";
  result += data.rating + " stars";
  return result;
}