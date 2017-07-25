function average(array){
  // var total = 0;
  // var num = 0;
  // for (i = 0; i < array.length; i++){
  //   total += array[i];
  //   num++;
  // }
  // console.log(Math.round(total/num));
  
  var total = 0;
  array.forEach(function(score){
    total += score;
  });
  var avg = total/array.length;
  return Math.round(avg);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));