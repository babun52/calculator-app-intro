var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

var addResult = add(number1, number2);
var subtractResult = subtract(number1, number2);
var multiplyResult = multiply(number1, number2);
var divideResult = divide(number1, number2);

alert(addResult);
alert(subtractResult);
alert(multiplyResult);
alert(divideResult);
