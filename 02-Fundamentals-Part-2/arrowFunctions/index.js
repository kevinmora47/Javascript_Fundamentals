const calcAge = function (birthYear) {
  return 2020 - birthYear;
};

// Arrow function.
const calcAge3 = (birthYear) => 2020 - birthYear;
console.log(calcAge(21));

// Example #2.
const yearUntilRetirement = (birthYear) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearUntilRetirement(1991));
