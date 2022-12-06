import { readFile } from "node:fs/promises";

async function readText() {
  const contents = await readFile("./day1Data.txt", { encoding: "utf8" });
  const elves = contents.split("\n\n");
  let mostCalories = 0;
  for (const elf of elves) {
    let currentTotalCals = 0;
    const meals = elf.split("\n");
    for (const meal of meals) {
      currentTotalCals += +meal;
    }
    if (currentTotalCals >= mostCalories) {
      mostCalories = currentTotalCals;
    }
  }
  console.log(mostCalories);
}

readText();
