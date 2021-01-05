const age = 15;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💦");
const drink = age >= 19 ? "Wine 🍷" : "Water 🍸";
console.log(drink);

// Old way
let drink2;
if (age >= 18) {
  drink2 = "Wine 🍷";
} else {
  drink2 = "Water 💦";
}
console.log(drink2);

// Use case in a template literal;

console.log(`I like to drink ${age >= 19 ? "Wine 🍷" : "Water 🍸"}`);
