// script 2
let number = prompt("Enter a number to calculate its factorial:");

function factorialize(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

let factorial = factorialize(number);
console.log(`The factorial of ${number} is ${factorial}.`);