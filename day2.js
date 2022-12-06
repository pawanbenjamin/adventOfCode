import { readFile } from "node:fs/promises";

const myMoves = {
  X: 1,
  Y: 2,
  Z: 3,
};

const winConditions = {
  A: "Y",
  B: "Z",
  C: "X",
};

const drawConditions = {
  A: "X",
  B: "Y",
  C: "Z",
};

async function calcScore() {
  let totalScore = 0;

  const data = await readFile("./data/day2.txt", { encoding: "utf8" });
  const dataArr = data.split("\n");
  for (const play of dataArr) {
    const theirMove = play[0];
    const ourMove = play[2];
    console.log({ theirMove, ourMove });
    totalScore += myMoves[ourMove];
    console.log("Our score to be added", myMoves[ourMove]);
    console.log(typeof totalScore);
    if (winConditions[theirMove] === ourMove) {
      totalScore += 6;
    } else if (drawConditions[theirMove] === ourMove) {
      totalScore += 3;
    }
  }
  console.log(totalScore);
}

calcScore();
