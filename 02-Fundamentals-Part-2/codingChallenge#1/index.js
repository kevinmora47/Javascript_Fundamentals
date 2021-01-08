"use strict";
const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const avgKoalasResult = calcAverage(50, 50, 50);
const avgDolphinsResult = calcAverage(50, 50, 10);
function checkWinner(avgKoalas, avgDolphins) {
  if (avgKoalasResult >= 2 * avgDolphinsResult) {
    console.log(
      `The dolphin team wins with a difference of: ${avgDolphinsResult}`
    );
  } else {
    console.log(
      `The koalas team wins with a difference of: ${avgKoalasResult}`
    );
  }
}
checkWinner(avgKoalasResult, avgDolphinsResult);
