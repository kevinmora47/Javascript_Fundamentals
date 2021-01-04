const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2020;

// Old way
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
console.log(jonas);

//   Template literal
const jonasLiteral = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!`;
console.log(jonasLiteral);
