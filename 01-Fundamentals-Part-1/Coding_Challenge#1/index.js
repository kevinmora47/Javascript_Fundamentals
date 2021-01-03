let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

const johnBMI = johnWeight / johnHeight ** 2;
const markBMI = markWeight / markHeight ** 2;

let markHigherBMI = johnBMI > markBMI;

console.log(`John has more BMI than Mark?
The answer is: ${markHigherBMI}
Mark's BMI: ${markBMI},
Jonh's BMI: ${johnBMI}`);
