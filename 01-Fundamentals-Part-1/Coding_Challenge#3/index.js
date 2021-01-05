const dolphinTeam = (100, 108, 89) / 3;
const koalasTeam = 88 + 91 + 110 / 3;
const minimumScore = 100;

if (dolphinTeam > koalasTeam && dolphinTeam >= 100) {
  console.log("Dolphins won the trophy-⚡");
} else if (koalasTeam > dolphinTeam && koalasTeam >= 100) {
  console.log("Koalas won the trophy ⚡");
} else if (
  dolphinTeam === koalasTeam &&
  dolphinTeam >= 100 &&
  koalasTeam >= 100
) {
  console.log("Both with the trophy⚡");
} else {
  console.log("Nobody wins 😢😭");
}
