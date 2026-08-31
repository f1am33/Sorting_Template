// Stillas: sortering
// Fyll inn der det står TODO. Resten av fila bestemmer du selv.
//
// Regler:
// - Skriv sorteringa selv. Ikke bruk .sort()
// - Returner en NY liste. Lista som kom inn, skal være uendret
// - Sorteringa skal stå ett sted, ikke tre

// Del A: tall, minst først
// sortNumbers([5, 3, 9, 1, 7]) -> [1, 3, 5, 7, 9]
function sortNumbers(list) {
  // TODO: lag en kopi av list
  // TODO: flytt elementene til de står i riktig rekkefølge
  // TODO: returner kopien
  return undefined; // slett denne når du begynner
}

// Del B: ord i norsk alfabetrekkefølge
// sortWords(["ål", "ære", "øy"]) -> ["ære", "øy", "ål"]
//
// Kopierte du del A og byttet bare ut sammenligningen? Da står sorteringa
// to steder. Det eneste som skiller dem, er hvordan to elementer
// sammenlignes. Kan du gi algoritmen den forskjellen utenfra?
function sortWords(list) {
  // TODO
  return undefined; // slett denne når du begynner
}

// Del C: både tall og ord
// 1. tall før ord  2. tall minst først  3. ord alfabetisk
// sortMixed(["banan", 7, "and", 7, -1]) -> [-1, 7, 7, "and", "banan"]
//
// Tips: typeof a === "number" sier om noe er et tall.
function sortMixed(list) {
  // TODO
  return undefined; // slett denne når du begynner
}

if (typeof module !== "undefined") {
  module.exports = { sortNumbers, sortWords, sortMixed };
}
