import { readFile } from "node:fs/promises";

const alpha = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

async function sumPriorities() {
  const data = await readFile("./data/day3.txt", { encoding: "utf-8" });
  const dataArr = data.split("\n");
  let sum = 0;
  for (const rucksack of dataArr) {
    const midpoint = Math.ceil(rucksack.length / 2);
    const compA = rucksack.slice(0, midpoint);
    const compB = rucksack.slice(midpoint);
    const intersection = findIntersection(compA, compB);
    sum += alpha.indexOf(intersection);
  }
  console.log(sum);
}

function findIntersection(str1, str2) {
  let smallerString = str1.length > str2.length ? str2 : str1;
  let largerStr = str1.length > str2.length ? str1 : str2;
  let intersection;
  largerStr.split("").forEach((letter) => {
    if (smallerString.includes(letter)) {
      intersection = letter;
    }
  });
  return intersection;
}

sumPriorities();
