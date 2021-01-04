// Falsy values -> 0, '', undefined, null, NaN.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

// Truthly values
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;

if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job.");
}

let heigh = 1;

if (heigh) {
  console.log("Yeiiii hide is defined!");
} else {
  console.log("it's not defined :c");
}
