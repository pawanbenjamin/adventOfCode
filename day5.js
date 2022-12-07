import { readFile } from "node:fs/promises";

async function supplyStacks(part = 1) {
  const data = await readFile("./data/day5.txt", { encoding: "utf-8" });
  const [stack, moves] = data.split("\n\n");

  const movesArr = moves.split("\n");
  const stackArr = stack.split("\n");

  const stackMap = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  };

  for (let i = 0; i < stackArr.length; i++) {
    const row = stackArr[i];
    const rowArr = row.match(/.{1,4}/g);
    for (let j = 0; j < rowArr.length; j++) {
      if (rowArr[j] === "    " || rowArr[j] === "   ") {
        continue;
      } else {
        stackMap[j + 1].unshift(rowArr[j]);
      }
    }
  }
  for (let key in stackMap) {
    stackMap[key].shift();
  }
  moveCrates(stackMap, movesArr, part);

  let crateString = "";
  for (let key in stackMap) {
    const crate = stackMap[key].pop();
    crateString += crate;
  }
  console.log(crateString);
}

function moveCrates(stackMap, moves, part) {
  for (const move of moves) {
    const [_, amount, _1, from, _2, to] = move.split(" ");
    if (part === 1) {
      handleMove(stackMap, amount, from, to);
    } else if (part === 2) {
      handleMovePt2(stackMap, amount, from, to);
    }
  }
}

function handleMove(stackMap, amount, from, to) {
  for (let i = 0; i < +amount; i++) {
    const poppedThing = stackMap[from].pop();
    stackMap[to].push(poppedThing);
  }
}
function handleMovePt2(stackMap, amount, from, to) {
  const newArr = [];
  for (let i = 0; i < +amount; i++) {
    const poppedThing = stackMap[from].pop();
    newArr.unshift(poppedThing);
  }
  stackMap[to] = [...stackMap[to], ...newArr];
}

supplyStacks();
supplyStacks(2);
