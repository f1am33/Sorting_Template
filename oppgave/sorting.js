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

sortWords(["ål", "ære", "øy"])
function sortWords(list) {
  let arr = [...list]
  let n = list.length;

  for (let i=0; i < n - 1; i++) {
    for (let j=0; j < n - i - 1; j++) {
      if (arr[j].localeCompare(arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  } return arr;
}



// Del C: både tall og ord
// 1. tall før ord  2. tall minst først  3. ord alfabetisk
// sortMixed(["banan", 7, "and", 7, -1]) -> [-1, 7, 7, "and", "banan"]
//
// Tips: typeof a === "number" sier om noe er et tall.
function sortMixed(list) {
  let arr = [...list];
  let n = list.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let a = arr[j];
      let b = arr[j + 1];
      let aIsNum = typeof a === "number";
      let bIsNum = typeof b === "number";
      let skalBytte = false;
      
      if (aIsNum && !bIsNum) {
        skalBytte = false;
      } else if (!aIsNum && bIsNum) {
        skalBytte = true;
      } else if (aIsNum && bIsNum) {
        if (a > b) skalBytte = true;
      } else {
        if (a.localeCompare(b, 'no') > 0) skalBytte = true;
      }

      if (skalBytte) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  } 
  return arr;
}

console.log(sortMixed(["banan", 7, "and", 7, -1])); 


if (typeof module !== "undefined") {
  module.exports = { sortNumbers, sortWords, sortMixed };
}
