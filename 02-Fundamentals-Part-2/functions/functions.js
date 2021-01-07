function logger() {
  console.log("My name is Kevin");
}

// Calling, Running, Invoking the function.
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);
