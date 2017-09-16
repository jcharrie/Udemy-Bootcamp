var mongoose    = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus eros, rhoncus accumsan finibus non, cursus vitae turpis. Aliquam commodo ligula ut odio vulputate tristique. Quisque molestie fermentum tortor placerat rutrum. Nunc vehicula dignissim turpis, in vehicula orci dignissim eget. Sed blandit lectus eget mollis euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquam viverra mi, vitae porta tellus varius ac. Integer posuere fringilla lectus vehicula accumsan. Morbi mattis porttitor ligula, in fermentum urna malesuada eget. Donec semper consequat mi vitae bibendum. Duis sodales purus ac gravida eleifend. Cras efficitur lectus id quam ultricies convallis."
  },
  {
    name: "The Lonely Tree",
    image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus eros, rhoncus accumsan finibus non, cursus vitae turpis. Aliquam commodo ligula ut odio vulputate tristique. Quisque molestie fermentum tortor placerat rutrum. Nunc vehicula dignissim turpis, in vehicula orci dignissim eget. Sed blandit lectus eget mollis euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquam viverra mi, vitae porta tellus varius ac. Integer posuere fringilla lectus vehicula accumsan. Morbi mattis porttitor ligula, in fermentum urna malesuada eget. Donec semper consequat mi vitae bibendum. Duis sodales purus ac gravida eleifend. Cras efficitur lectus id quam ultricies convallis."
  },
  {
    name: "Canyon Floor",
    image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus eros, rhoncus accumsan finibus non, cursus vitae turpis. Aliquam commodo ligula ut odio vulputate tristique. Quisque molestie fermentum tortor placerat rutrum. Nunc vehicula dignissim turpis, in vehicula orci dignissim eget. Sed blandit lectus eget mollis euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquam viverra mi, vitae porta tellus varius ac. Integer posuere fringilla lectus vehicula accumsan. Morbi mattis porttitor ligula, in fermentum urna malesuada eget. Donec semper consequat mi vitae bibendum. Duis sodales purus ac gravida eleifend. Cras efficitur lectus id quam ultricies convallis."
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