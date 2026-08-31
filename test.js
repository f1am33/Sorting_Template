// Kjør: node test.js
// Eller: åpne test.html i nettleser og trykk "Kjør tester".
//
// Testene ser ikke inn i koden din. De sender inn en liste og sjekker at
// 1. lista er riktig sortert
// 2. alle elementene er med
// 3. lista du sendte inn, er uendret
//
// Du skal ikke endre denne fila.

// Binærsøket fra forrige oppgave. Brukes i den store testen i del A.
// Det finner bare ting i en liste som er riktig sortert.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

// --- hjelpere -------------------------------------------------------------

function show(x) {
  return typeof x === "string" ? `"${x}"` : String(x);
}

function showList(list) {
  if (!Array.isArray(list)) return String(list);
  if (list.length > 8) return `[${list.slice(0, 8).map(show).join(", ")}, ...]`;
  return `[${list.map(show).join(", ")}]`;
}

function sameOrder(a, b) {
  if (!Array.isArray(a) || a.length !== b.length) return false;
  return a.every((x, i) => Object.is(x, b[i]));
}

// Er det de samme elementene, uansett rekkefølge?
function sameElements(a, b) {
  if (!Array.isArray(a) || a.length !== b.length) return false;
  const count = new Map();
  const key = (x) => typeof x + ":" + String(x);
  for (const x of a) count.set(key(x), (count.get(key(x)) || 0) + 1);
  for (const x of b) {
    const k = key(x);
    if (!count.get(k)) return false;
    count.set(k, count.get(k) - 1);
  }
  return true;
}

// --- testene ---------------------------------------------------------------

const partA = [
  { input: [5, 3, 9, 1, 7], expected: [1, 3, 5, 7, 9] },
  { input: [], expected: [] },
  { input: [42], expected: [42] },
  { input: [4, 4, 1], expected: [1, 4, 4] },
  { input: [-3, 5, 0], expected: [-3, 0, 5] },
  { input: [1, 2, 3], expected: [1, 2, 3] },
  { input: [3, 2, 1], expected: [1, 2, 3] },
];

const partB = [
  { input: ["banan", "eple", "agurk"], expected: ["agurk", "banan", "eple"] },
  { input: [], expected: [] },
  { input: ["ål", "ære", "øy"], expected: ["ære", "øy", "ål"] },
  { input: ["and", "ape", "æsj", "øl", "ål"], expected: ["and", "ape", "æsj", "øl", "ål"] },
  { input: ["ål", "and", "øl", "æsj", "ape"], expected: ["and", "ape", "æsj", "øl", "ål"] },
  { input: ["b", "a", "b"], expected: ["a", "b", "b"] },
];

const partC = [
  { input: ["banan", 7, "and", 7, -1], expected: [-1, 7, 7, "and", "banan"] },
  { input: [], expected: [] },
  { input: [3, "a"], expected: [3, "a"] },
  { input: ["a", 3], expected: [3, "a"] },
  { input: ["øy", 2, "and", -5, 0], expected: [-5, 0, 2, "and", "øy"] },
];

// Én test: kall funksjonen og sjekk de tre tingene.
function runCase(fn, input, expected) {
  const copy = input.slice();
  let got;
  try {
    got = fn(copy);
  } catch (e) {
    return { ok: false, line: `krasjet på ${showList(input)}: ${e.message}` };
  }

  const checks = [
    [sameOrder(got, expected), `feil rekkefølge, fikk ${showList(got)}`],
    [sameElements(got, input), "elementer mangler eller er kommet til"],
    [sameOrder(copy, input), `lista som ble sendt inn, ble endret til ${showList(copy)}`],
  ];

  const feil = checks.filter(([ok]) => !ok).map(([, msg]) => msg);
  if (feil.length > 0) {
    return { ok: false, line: `${showList(input)} -> ${feil.join("; ")}` };
  }
  return { ok: true, line: `${showList(input)} -> ${showList(got)}` };
}

// Den store testen i del A: 1000 tilfeldige tall, sjekket med binærsøk.
function runBigCase(fn) {
  const input = [];
  for (let i = 0; i < 1000; i++) input.push(Math.floor(Math.random() * 5000) - 2500);

  const copy = input.slice();
  let got;
  try {
    got = fn(copy);
  } catch (e) {
    return { ok: false, line: `1000 tilfeldige tall: krasjet: ${e.message}` };
  }

  if (!sameElements(got, input)) {
    return { ok: false, line: "1000 tilfeldige tall: elementer mangler eller er kommet til" };
  }
  if (!sameOrder(copy, input)) {
    return { ok: false, line: "1000 tilfeldige tall: lista som ble sendt inn, ble endret" };
  }
  for (const target of input.slice(0, 50)) {
    if (binarySearch(got, target) === -1) {
      return { ok: false, line: `1000 tilfeldige tall: binærsøket fant ikke ${target}, så lista er ikke riktig sortert` };
    }
  }
  return { ok: true, line: "1000 tilfeldige tall: binærsøket fant alle det lette etter" };
}

// Har eleven begynt på denne delen i det hele tatt?
function notStarted(fn, cases) {
  if (typeof fn !== "function") return true;
  try {
    return fn(cases[0].input.slice()) === undefined;
  } catch (e) {
    return false; // krasj er noe annet enn ikke påbegynt
  }
}

// Kjører alt. Returnerer linjer og antall feil.
function runAll(impl) {
  const parts = [
    { title: "Del A: tall", fn: impl.sortNumbers, cases: partA, big: true },
    { title: "Del B: ord", fn: impl.sortWords, cases: partB, big: false },
    { title: "Del C: både tall og ord", fn: impl.sortMixed, cases: partC, big: false },
  ];

  const lines = [];
  let feil = 0;
  let ferdige = 0;

  for (const part of parts) {
    lines.push({ text: part.title, status: "tittel" });

    if (notStarted(part.fn, part.cases)) {
      lines.push({ text: "ikke løst ennå", status: "vent" });
      lines.push({ text: "", status: "tom" });
      continue;
    }

    let feilHer = 0;
    for (const { input, expected } of part.cases) {
      const r = runCase(part.fn, input, expected);
      if (!r.ok) feilHer++;
      lines.push({ text: r.line, status: r.ok ? "ok" : "feil" });
    }
    if (part.big) {
      const r = runBigCase(part.fn);
      if (!r.ok) feilHer++;
      lines.push({ text: r.line, status: r.ok ? "ok" : "feil" });
    }

    feil += feilHer;
    if (feilHer === 0) ferdige++;
    lines.push({ text: "", status: "tom" });
  }

  if (feil > 0) {
    lines.push({ text: `${feil} test(er) feilet.`, status: "feil" });
  } else if (ferdige === 0) {
    lines.push({ text: "Ingen deler er påbegynt ennå.", status: "vent" });
  } else {
    lines.push({ text: `Alle tester som ble kjørt, passerte. Ferdige deler: ${ferdige} av 3.`, status: "ok" });
  }

  return { lines, feil };
}

if (typeof module !== "undefined") module.exports = { runAll };

// Node: kjør med én gang.
if (typeof module !== "undefined" && require.main === module) {
  const impl = require("./oppgave/sorting");
  const { lines } = runAll(impl);
  const merke = { ok: "OK   ", feil: "FEIL ", vent: "     ", tittel: "\n== ", tom: "" };
  for (const l of lines) {
    console.log(l.status === "tittel" ? `${merke.tittel}${l.text} ==` : `${merke[l.status] || ""}${l.text}`);
  }
}
