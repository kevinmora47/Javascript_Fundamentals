const friends = ["Kevin", "Emily"];
// Push elements to the end.
const newLength = friends.push("Jay");
// Print element with new element.
console.log(friends);
console.log(newLength);

// Unshift, add elements in the begining of the array.
friends.unshift("Sofia");
console.log(friends);

// Remove last element.
const removedElement = friends.pop();
console.log(friends);
console.log(removedElement);

// Remove first element.
friends.shift();
console.log(friends);

// Returns value position in the array.
console.log(friends.indexOf("Kevin"));

// Returns a true if the value is include and false if it doesn't find it.
// The comparative is made with strict comparison.
console.log(friends.includes("Kevin"));

if (friends.includes("Kevin")) {
  console.log("Kevin is here");
} else {
  console.log("Kevin isn't here");
}
