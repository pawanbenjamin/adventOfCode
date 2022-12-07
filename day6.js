import { readFile } from "node:fs/promises";

async function bufferStream() {
  const data = await readFile("./data/day6.txt", { encoding: "utf-8" });

  let left = 0;
  let right = 4;
  while (right <= data.length) {
    const chunk = data.slice(left, right);

    const map = {};
    for (let i = 0; i < chunk.length; i++) {
      if (!map[chunk[i]]) {
        map[chunk[i]] = 1;
      } else {
        map[chunk[i]]++;
      }
    }
    if (Object.keys(map).length === 4) {
      console.log(right);
      return;
    }
    left++;
    right++;
  }
}

async function bufferStream2() {
  const data = await readFile("./data/day6.txt", { encoding: "utf-8" });

  let left = 0;
  let right = 14;
  while (right <= data.length) {
    const chunk = data.slice(left, right);

    const map = {};
    for (let i = 0; i < chunk.length; i++) {
      if (!map[chunk[i]]) {
        map[chunk[i]] = 1;
      } else {
        map[chunk[i]]++;
      }
    }
    if (Object.keys(map).length === 14) {
      console.log(right);
      return;
    }
    left++;
    right++;
  }
}

bufferStream();
bufferStream2();
