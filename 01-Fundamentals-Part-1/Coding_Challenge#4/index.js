const lowTip = 0.15;
const highTip = 0.2;
const bill = 40;
const total = 1000;
bill > 50 && bill <= 300
  ? console.log(
      `Bill total: ${bill + bill * lowTip}$, Tip: ${
        bill * lowTip
      }$ Bill: ${bill}$`
    )
  : console.log(
      `Bill total: ${bill + bill * highTip}, Tip: ${bill * highTip} Bill${bill}`
    );
