// Type convertion es when we manualy conver a data type.
const inputYear = "1991";
// Converting to int values.
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas")); //  Nah -> Not a number, invalidad number.

// Converting to string values.
console.log(typeof String(22));

// Type coertion es when js does it for us.
console.log("I am " + 23 + "years old.");

// The -, /, *, >, <, = operators coverts strings into numbers.
console.log("23" - "10" - 3); // Result -> 10;

let n = "1" + 1; // '11'
n = n - 1; //Is string so the minus operator will convert it into numbers.
console.log(n);
