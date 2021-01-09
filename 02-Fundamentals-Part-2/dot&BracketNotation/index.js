// Object literal expression.
const kevin2 = {
  firstName: "Kevin",
  lastName: "Mora",
  age: 21,
  job: "teacher",
  friends: ["Emily", "Sofia"],
};
// The order of an object is sorted alphabetically.

// Dot Notation.
console.log(kevin.lastName);

// Bracket notation, useful example.
const interestedIn = prompt(`What do you like to know about me?
1-First name.
2-Last name.
3-Age.
4.Job.
5.Friends.`);
console.log(jonas[interestedIn]); // This will display the property that the user typed.
// Adding new attributes to an object.
kevin.location = "Costa Rica";
kevin["instagram"] = "AndreyMora04";
console.log(kevin);

// Challenge.
// Kevin has 3 friends, and his best friend is called Emily.

const kevin = {
  firstName: "Kevin",
  lastName: "Mora",
  age: 21,
  job: "teacher",
  friends: ["Emily", "Sofia"],
};
console.log(
  `${kevin.firstName}, has ${kevin.friends.length} friends, and his best friend is called: ${kevin.friends[0]}`
);
