const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2021 - 1999,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

// Loop inside a loop.
for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`--Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`${exercise}: Lifting weight repetition ${rep}`);
  }
}
