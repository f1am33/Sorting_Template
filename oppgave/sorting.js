// Stillas: sortering
// Fyll inn der det står TODO. Resten av fila bestemmer du selv.
//
// Regler:
// - Skriv sorteringa selv. Ikke bruk .sort()
// - Returner en NY liste. Listen som kom inn, skal være uendret
// - Sorteringa skal stå ett sted, ikke tre

// Del A: tall, minst først
// sortNumbers([5, 3, 9, 1, 7]) -> [1, 3, 5, 7, 9]
sortNumbers([5, 3, 9, 1, 7]);
function sortNumbers(list) {
  let arr = [...list];
  let endret;

  do {
    endret = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        endret = true;
      }
    }
  } while (endret);
  return arr;
}


if (typeof module !== "undefined") {
  module.exports = { sortNumbers, sortWords, sortMixed };
}
