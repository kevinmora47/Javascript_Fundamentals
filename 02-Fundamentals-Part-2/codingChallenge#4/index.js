// let  = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let bills = [25, 25, 25, 25];
let tips = [];
let totals = [];

let calcTip = (bill) => {
  for (let i = 0; i < tips.length; i++) {
    let billPercentage = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    tips.push(billPercentage);
    console.log("Looping the tips array.");
    console.log(tips[i]);
    for (let j = 0; j < bills.length; j++) {
      console.log("Looping bills array.");
      console.log(bills[i]);
      totals.push(tips[i] + bills[j]);
    }
  }
  console.log(
    "---------------------------------------------------Results---------------------------------------------------"
  );
  console.log(tips);
  console.log(totals);
};
for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

const calcAverage = (...bills) => {
  let totalAvg = [];
  for (let i = 0; i < bills.length; i++) {
    console.log("Calculating average function.");
    console.log(bills[i]);
    console.log(bills.length);
    totalAvg.push(bills[i] + bills.length);
  }
  return totalAvg;
};

console.log(calcTip());

console.log(calcAverage(bills));
