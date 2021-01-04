//Operators in javaScript.
console.log("-------------------------Operators--------------------------");

// Calculating a name.
const actualYear = 2037;
const ageKevin = actualYear - 1991;
console.log(ageKevin);

// Multiplication.
console.log((ageKevin * 2) / 2);

// Sum
const firstName = "Kevin";
const lastName = "Mora";
// Template strings
console.log(`${firstName} ${lastName}`);

// Assignment operators.
let x = 10 + 5; //-> 15
x += 10; // 15 + 10 -> 25.
x *= 4; //  25*4 -> 100
x++;
x--;
console.log(x);

// Comparison operators.
console.log(ageKevin > 20); //True
console.log(ageKevin >= 18);

// Operators Precedence.
const year = 2020;
const ageAndrey = year - 1999;
const ageEmily = year - 2000;
alert(year - 1999 > year - 2000);
