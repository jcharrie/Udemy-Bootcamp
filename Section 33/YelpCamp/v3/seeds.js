var mongoose    = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
    description: "Blah blah blah"
  },
  {
    name: "The Lonely Tree",
    image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
    description: "Blah blah blah"
  },
  {
    name: "Canyon Floor",
    image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
    description: "Blah blah blah"
  }
]

function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    } else{
      console.log("removed campgrounds");
      // add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else{
            console.log("added a campground");
            // create a few comments
            Comment.create(
              {
                text: "This place is great, but I wish there was internet",
                author: "Homer"
              }, function(err, comment){
                if(err){
                  console.log(err);
                } else{
                  campground.comments.push(comment);
                  campground.save();
                  console.log("created new comment");
                }
              });
          }
        });
      });
    }
  });
}

module.exports = seedDB;