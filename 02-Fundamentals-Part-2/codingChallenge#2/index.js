const tips = [];
const bill = [];
let totalBills = [];

const calcTip = (bills) => {
  const tipPercentage =
    bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  bill.push(bills);
  console.log(`Today's bills are: ${bill}`);
  tips.push(tipPercentage);
  console.log(`The total tips values are: ${tips}`);
  totalBills.push(tips);
  totalBills.push(bills);
  console.log(`The total bills and tips are: ${totalBills}`);
};
console.log(calcTip(125));
console.log(calcTip(555));
console.log(calcTip(44));
