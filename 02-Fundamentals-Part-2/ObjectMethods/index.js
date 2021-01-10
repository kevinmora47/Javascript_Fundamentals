const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  //   First version
  /*
calculateAge: function() {
    return 2037 - birthYear;
}
*/

  // Second Version
  /*
calculateAge: function(){
    return 2037 - this.birthYear;
}
*/
  // Creating a new property in the object.
  calculateAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calculateAge());
// Jonas is a 46 years old teacher, and he has a drivers licence.

console.log(
  `${jonas.firstName}, is a ${jonas.calculateAge()} old ${jonas.job}, and he ${
    jonas.hasDriverLicense
      ? "Has driver license"
      : "does not have driver licence"
  }`
);
