//  takes a single number and returns true if the input number is even and false otherwise
function isEven(num) {
  return !(num % 2);
}

// console.log(isEven(10));

// takes a single numeric argument and returns the factorial of that number
function factorial(num){
    var j = 1;

    for(var i = 1; i <= num; i++){
      j = i * j;
    }
  return j;
}

// takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(kebab){
  var snake = kebab;
  snake = snake.replace(/-/g , "_");

  return snake;
}