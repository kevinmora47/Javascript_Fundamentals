const MarkMiller = {
  fullName: "MarkMiller",
  mass: 67,
  height: 1.76,
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const JohnMiller = {
  fullName: "John Miller",
  mass: 90,
  height: 1.95,
  calculateBMI: function () {
    return this.mass / this.height ** 2;
  },
};

console.log(
  `${JohnMiller.calculateBMI() > MarkMiller.calculateBMI()}?${
    JohnMiller.fullName
  } BMI'S ${JohnMiller.calculateBMI()} is higher than ${
    MarkMiller.fullName
  } BMI'S ${MarkMiller.calculateBMI()}`
);
