// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5, 1000];

// 1) Understanding the problem
// What is temperature amplitude? Answer: difference beetwen highest and lowest temp.
// How to compute the max-min temoperatures.
// What's a sensor errors, and what to do?

// 2) Breaking up into sub-problems
// How to ignore errrors?
// Find max value in temperature and min value in array.
// Subtract min from max (amplitude) and retun it.

const caclTempAmplitutde = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = caclTempAmplitutde(temperatures);
console.log(amplitude);

// Problem #2, function should recieve 2 arrays.
// 2) Breaking up into sub-problems
// -How to merge 2 arrays.
const caclTempAmplitutdeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitudeNew = caclTempAmplitutdeNew(temperatures, temperatures2);
console.log(amplitude);
