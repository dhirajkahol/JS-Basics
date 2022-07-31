let result;
let operator = prompt("Enter operator (+, -, *, /)");

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(`${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`${result}`);
    break;
  case "/":
    result = num1 / num2;
    console.log(`${result}`);
    break;
  default:
    console.log("Invalid operator");
}
