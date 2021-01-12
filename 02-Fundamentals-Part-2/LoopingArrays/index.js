const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2021 - 1999,
  "teacher",
  ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i = 0; jonasArray.length >= i; i++) {
  console.log(jonasArray[i]);
  // Filling types array.
  // types[i] = typeof jonasArray[i];

  // Cleaner way to do it.
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);
