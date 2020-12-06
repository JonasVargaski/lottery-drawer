/* eslint-disable no-plusplus */

function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

export default function generate({ cards, dozens, ignored = [], min, max }) {
  const config = { cards, dozens, ignored, min, max, loops: 2000 };

  let i = 0;
  const result = [];

  for (i = 0; i < config.cards; i++) {
    if (!result[i]) result[i] = [];

    let loop = 0;

    while (result[i].length < config.dozens) {
      const newNumber = getRandomInt(config.min - 1, config.max);
      const relevancy = {};

      if (
        !config.ignored.find((x) => x === newNumber) &&
        !result[i].find((x) => x === newNumber)
      ) {
        result.forEach((x) => {
          x.forEach((y) => {
            if (!relevancy[y]) relevancy[y] = 1;
            else relevancy[y] += 1;
          });
        });

        if (!relevancy[newNumber]) {
          result[i].push(newNumber);
        } else {
          const used = [
            ...Object.keys(relevancy).map((x) => Number(x)),
            ...config.ignored,
          ].map((x) => Number(x));
          const faltantes = [
            ...Array.from(Array(config.max + 1).keys()),
          ].filter((x) => x >= config.min && !used.includes(x));

          let comparator = {
            dezena: 0,
            length: config.max,
          };

          Object.keys(relevancy).forEach((key) => {
            if (relevancy[key] < comparator.length)
              comparator = { dezena: Number(key), length: relevancy[key] };
          });

          if (faltantes.length === 0) {
            if (newNumber === comparator.dezena) {
              result[i].push(newNumber);
            } else loop += 1;
            if (loop >= config.loops) {
              result[i].push(newNumber);
            }
          }
        }
      }
    }
  }

  return result;
}
