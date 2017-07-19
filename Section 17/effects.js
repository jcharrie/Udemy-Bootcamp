$("button").on("click", function(){
  // $("div").fadeToggle(500);
  $("div").slideToggle(1000, function(){
    $(this).remove();
  });
});