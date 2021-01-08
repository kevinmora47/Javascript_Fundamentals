calcAge = function (birthYear) {
  return 2020 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  }
  return -1;
  //   return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1999, "Kevin"));
console.log(yearsUntilRetirement(1950, "Kevin"));
