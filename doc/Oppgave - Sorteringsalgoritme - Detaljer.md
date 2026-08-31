# Sortering: oppgavedetaljer

Dette er selve oppgaven. Omfang, innlevering og vurdering står i **Sortering: om oppgaven**.

## Funksjonene du skal skrive

Du får en delvis ferdig kode i `oppgave/sorting.js`. Der skal du skrive tre funksjoner. Ikke endre navnene, for testene bruker dem.

|Funksjon|Gjør|Del|
|---|---|---|
|`sortNumbers(list)`|Sorterer tall, minst først|A|
|`sortWords(list)`|Sorterer ord alfabetisk|B|
|`sortMixed(list)`|Sorterer lister med både tall og ord|C|

Alle tre skal returnere en **ny** liste. Lista du sendte inn, skal være uendret.

Resten av fila bestemmer du selv. Skriv gjerne flere funksjoner.

## Regler

- Skriv sorteringa selv. Ikke bruk `.sort()`. Unntaket er del D.
- Lista som sendes inn, skal være uendret etterpå.
- **Sorteringa skal stå ett sted, ikke tre.** Del A, B og C skal ikke bli tre nesten like kopier. Hvordan du får det til, bestemmer du.
- All kode på engelsk: funksjoner, variabler og filnavn.
- Testene for del A skal passere. Del B og C tar du så langt du kommer.

## Planlegging

Det du skriver ned nå, er algoritmen din. En algoritme er en oppskrift: en rekke steg som alltid gir samme resultat. Koden kommer etterpå.

Bestem tre ting før du koder:

- Hvilke steg gjør algoritmen din, i rekkefølge?
- Hvordan flytter du elementene så de havner riktig?
- Hvordan vet du at lista er ferdig sortert?

Pseudokode, flytskjema eller punktliste. Du velger.

**Vis planen til lærer før du begynner å kode.**

## Slik kjører du testene

Åpne `test.html` i nettleseren og trykk «Kjør tester».

Testene er delt i tre grupper, én per del. Deler du ikke har begynt på, står som «ikke løst ennå». Det er meningen at ikke alt er OK fra start.

Testene ser ikke inn i koden din. De sender inn en liste og sjekker at

1. lista er riktig sortert
2. alle elementene er med
3. lista du sendte inn, er uendret

Punkt 2 er der fordi en funksjon som returnerer en tom liste, ellers ville bestått punkt 1.

Del A testes også med 1000 tilfeldige tall. Der brukes binærsøket fra forrige oppgave. Det finner bare ting i en liste som er riktig sortert.

## Del A: tall

```js
sortNumbers([5, 3, 9, 1, 7])   // [1, 3, 5, 7, 9]
sortNumbers([])                // []
sortNumbers([4, 4, 1])         // [1, 4, 4]
sortNumbers([-3, 5, 0])        // [-3, 0, 5]
```

Her handler alt om selve algoritmen. Finn en måte å flytte elementer på, så de havner riktig. Pass på at du vet når du er ferdig.

**Ferdig når** testene for del A er OK. Commit og skjermbilde.

## Del B: ord

```js
sortWords(["banan", "eple", "agurk"])   // ["agurk", "banan", "eple"]
sortWords(["ål", "ære", "øy"])          // ["ære", "øy", "ål"]
```

Den siste er vanskeligere enn den ser ut. Kjør testene og finn ut hva som gikk galt. Du må trolig slå opp hvordan man sammenligner tekst i JavaScript.

> **Kopierte du algoritmen fra del A og byttet bare ut sammenligningen?**
> Det er nettopp det regelen over handler om. Det eneste som skiller de to, er hvordan to elementer sammenlignes. Kan du gi algoritmen den forskjellen utenfra? Tips: en funksjon kan ta imot en annen funksjon.

**Ferdig når** testene for del B er OK, og sorteringa ikke står to steder. Commit og skjermbilde.

## Del C: både tall og ord

Regler for blandede lister:

1. Tall før ord
2. Tall fra minst til størst
3. Ord alfabetisk

```js
sortMixed(["banan", 7, "and", 7, -1])   // [-1, 7, 7, "and", "banan"]
```

> Tips: `typeof a === "number"` sier om noe er et tall.

Klarte du del B uten å kopiere, er det lite igjen her.

**Ferdig når** testene for del C er OK. Commit og skjermbilde.

## Del D: frivillig forberedelse til fagsamtalen

Denne delen er frivillig. Oppgavene nedenfor er eksempler på noe du kan bli bedt om i fagsamtalen, og det kan derfor være lurt å prøve dem i forkant.

**1. Snu rekkefølgen.** Sorter tallene fra størst til minst. Hvor lite måtte du endre?

**2. Mål arbeidsmengden.** Tell hvor mange sammenligninger algoritmen gjør. Prøv med 100, 500 og 1000 tilfeldige tall. Hva skjer når lista blir dobbelt så lang? Sammenlign så med `.sort()` og ta tida på begge med `console.time`.

**3. Ødelegg noe med vilje.** Fjern en linje eller snu en betingelse. Gjett hvilken test som ryker. Kjør testene. Fikk du rett? Sett koden tilbake etterpå.

**4. Forklar høyt.** Neste gang noen sjekker et kort for deg, forklar algoritmen uten å se på skjermen. Der du stopper opp, er det noe du bør se på igjen.

## Kortene

Oppgavekortene deler arbeidet opp. Hvert kort har en «ferdig når»-liste.

**Du kan ikke krysse av dine egne kort.** Når du mener et kort er ferdig, ber du en annen elev gå gjennom lista og krysse av. Er noe uklart, får du kortet tilbake.

Dette er det eneste du gjør sammen med noen andre. Koden skriver du selv.

## Dokumentasjon underveis

**Git.** Ta en commit hver gang noe nytt virker. Skriv i meldinga hva som virker. Én stor commit til slutt blir ikke godkjent.

**Skjermbilder.** Ta bilde av testresultatet for hver ferdige del. Ta også bilde når tester feiler. Legg bildene i repoet.

## Spørsmål du kan få i fagsamtalen

- Vis meg linja som bestemmer rekkefølgen. Hvordan kan du snu rekkefølgen?
- Forklar hva som skjer i en runde av løkka.
- Hvorfor returnerer du en ny liste i stedet for å endre den som kom inn?
- Hva er felles for `sortNumbers` og `sortWords` hos deg, og hva er ulikt?
- Hvordan vet du at sorteringa er riktig, utover at testene er OK?
- Hva prøvde du først, hva virket, hva virket ikke?

Forsøkene i del D er øving på disse spørsmålene.
