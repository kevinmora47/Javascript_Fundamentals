// Function declaration.
function calcAge1(birthYear) {
  return 2020 - birthYear;
}

const calcAge = calcAge1(1999);
console.log(calcAge);

// Function expression or anonymous function.
const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};

const calcAge20 = calcAge2(1999);

console.log(calcAge, calcAge20);

// We can't call a function expression before this is written.
// As a good practice is better to use function expression.
