const hasDriverLicence = true;
const hasGoodVision = true;

// console.log(hasDriverLicence && hasGoodVision);
// console.log(hasDriverLicence || hasGoodVision);

// const shouldDrive = hasDriverLicence && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sara is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false;
// console.log(hasDriverLicence || hasGoodVision || isTired);

if (hasGoodVision && hasDriverLicence && !isTired) {
  console.log("Sara is able to drive");
} else {
  console.log("Someone else should drive");
}
