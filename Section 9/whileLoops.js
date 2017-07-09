// Print all numbers between -10 and 19
console.log("Number 1");
var num = -10;

while (num < 20){
  console.log(num);
  num++;
}

// Print all even numbers between 10 and 40
console.log("Number 2");
var even = 10;

while (even <= 40){
  if(even % 2 == 0)
    console.log(even);
  even++;
}

// Print all odd numbers between 300 and 333
console.log("Number 3");
var odd = 300;

while (odd <= 333){
  if (odd % 2)
    console.log(odd);
  odd++;
}

// Print all numbers divisible by 5 AND 3 betwen 5 and 50
console.log("Number 4");
var divisible = 5;

while (divisible <= 50){
  if(divisible % 5 == 0 && divisible % 3 == 0)
    console.log(divisible);
  divisible++;
}