import { MersenneTwister19937, integer } from "random-js";

const engine = MersenneTwister19937.autoSeed();

function sorter(a, b) {
  return a - b;
}

function randomRange(min, max) {
  const distribution = integer(min, max);
  return distribution(engine);
}

function generateRandomNumbers({ min, max, length }) {
  const generated = new Set();

  while (generated.size < length) {
    generated.add(randomRange(min, max));
  }

  return [...generated].sort(sorter);
}

export function generateRandomNumbersWithoutRepeating({
  retry = 100,
  count = 1,
  history,
  ...randomProps
}) {
  let retryCount = 0;
  const mapped = {};

  if (history) {
    history.forEach((h) => {
      const sorted = h.sort(sorter);
      mapped[JSON.stringify(sorted)] = sorted;
    });
  }

  while (Object.keys(mapped).length < count && retryCount <= retry) {
    const combination = generateRandomNumbers(randomProps);
    const key = JSON.stringify(combination);
    if (!mapped[key]) mapped[key] = combination;
    retryCount += 1;
  }

  return Object.values(mapped);
}
