// Control Structure.

const age = 15;

if (age >= 18) {
  console.log("Sara can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young, wait another ${yearsLeft} years!`);
}

// Example #2.

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);