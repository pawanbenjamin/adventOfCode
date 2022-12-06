import { readFile } from "node:fs/promises";

async function cleaningPairs() {
  const data = await readFile("./data/day4.txt", { encoding: "utf-8" });
  const dataArr = data.split("\n");
  let pairs = 0;
  for (const pair of dataArr) {
    const [elf1, elf2] = pair.split(",");
    const [elf1Start, elf1End] = elf1.split("-");
    const [elf2Start, elf2End] = elf2.split("-");
    if (+elf1Start <= +elf2Start && +elf1End >= +elf2End) {
      pairs++;
    } else if (+elf2Start <= +elf1Start && +elf2End >= +elf1End) {
      pairs++;
    }
  }
  console.log(pairs);
}

async function anyOverlap() {
  const data = await readFile("./data/day4.txt", { encoding: "utf-8" });
  const dataArr = data.split("\n");
  let pairs = 0;
  for (const pair of dataArr) {
    const [elf1, elf2] = pair.split(",");
    const [elf1Start, elf1End] = elf1.split("-");
    const [elf2Start, elf2End] = elf2.split("-");
    let counterStart = +elf1Start > +elf2Start ? elf1Start : elf2Start;
    let counterEnding = +elf1End < +elf2End ? elf1End : elf2End;

    if (+counterStart <= +counterEnding) {
      pairs++;
    }
  }
  console.log(pairs);
}

cleaningPairs();
anyOverlap();
