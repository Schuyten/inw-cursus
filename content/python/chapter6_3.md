# 6.3 Meten van Efficiëntie: Big O Notatie

We hebben vastgesteld dat efficiëntie belangrijk is, maar hoe *meten* en *vergelijken* we de efficiëntie van verschillende algoritmen op een gestandaardiseerde manier? Hiervoor gebruiken we de **Big O notatie**.

## Wat is Big O notatie?

Big O notatie is een wiskundige notatie die beschrijft hoe de uitvoeringstijd (tijdcomplexiteit) of het geheugengebruik (ruimtecomplexiteit) van een algoritme **groeit** naarmate de grootte van de input (`n`) toeneemt. 

Het belangrijkste idee is om te focussen op de **orde van grootte** of de **groeisnelheid** van het aantal operaties of het geheugengebruik, vooral als `n` heel groot wordt. Big O negeert:

*   **Constante factoren:** Of een algoritme 100 operaties doet of 10 operaties voor een vaste input, wordt vaak als dezelfde "orde" beschouwd.
*   **Lagere-orde termen:** Als een algoritme \(n^2 + 5n + 10\) operaties doet, is de \(n^2\) term dominant voor grote `n`. De \(5n\) en \(10\) groeien veel langzamer en worden genegeerd in de Big O notatie.

Big O geeft dus een **bovengrens** aan de groei van de benodigde middelen in het **worst-case scenario** (het scenario dat de meeste tijd of ruimte kost).

## Veelvoorkomende Big O complexiteiten

Laten we enkele veelvoorkomende complexiteiten bekijken, gerangschikt van meest efficiënt (snelst groeiend) naar minst efficiënt (langzaamst groeiend) voor grote `n`:

1.  **O(1) - constante tijd**
    *   **Betekenis:** De uitvoeringstijd is *constant* en hangt *niet* af van de grootte van de input (`n`). Het kost altijd ongeveer evenveel tijd.
    *   **Voorbeeld:** Een element opvragen uit een Python lijst via zijn index (`mijn_lijst[5]`). Of het nu een lijst van 10 of 1 miljoen elementen is, toegang via index kost (ongeveer) evenveel tijd.

2.  **O(log n) - logaritmische tijd**
    *   **Betekenis:** De uitvoeringstijd groeit heel langzaam naarmate `n` groeit. Elke keer dat je `n` verdubbelt, neemt de tijd slechts met een constante hoeveelheid toe.
    *   **Voorbeeld:** Binair zoeken in een *gesorteerde* lijst. Je halveert steeds het zoekgebied. Zelfs voor een enorme lijst (miljarden items) heb je maar een klein aantal stappen nodig.

3.  **O(n) - lineaire tijd**
    *   **Betekenis:** De uitvoeringstijd groeit *recht evenredig* met de grootte van de input `n`. Als `n` verdubbelt, verdubbelt de tijd ongeveer ook.
    *   **Voorbeeld:** Een `for`-loop die elk element in een lijst van `n` elementen één keer bezoekt (zoals in ons `vind_grootste` algoritme uit 6.1). Een item zoeken in een ongesorteerde lijst (`x in mijn_lijst`).

4.  **O(n log n) - lineairithmische tijd**
    *   **Betekenis:** Groeit iets sneller dan O(n), maar nog steeds redelijk efficiënt voor de meeste toepassingen.
    *   **Voorbeeld:** Efficiënte sorteeralgoritmen zoals Merge Sort of TimSort (de standaard sorteermethode in Python) hebben vaak deze complexiteit.

5.  **O(n²) - kwadratische tijd**
    *   **Betekenis:** De uitvoeringstijd groeit kwadratisch met `n`. Als `n` verdubbelt, wordt de tijd ongeveer vier keer zo lang. Dit wordt snel traag voor grotere `n`.
    *   **Voorbeeld:** Geneste lussen waarbij beide lussen `n` keer draaien. Bijvoorbeeld, elk element in een lijst vergelijken met elk ander element.

6.  **O(2^n) - exponentiële tijd**
    *   **Betekenis:** De uitvoeringstijd groeit extreem snel. Elke toevoeging aan `n` kan de tijd verdubbelen. Dit is meestal alleen praktisch voor zeer kleine `n`.
    *   **Voorbeeld:** Sommige recursieve algoritmen die een probleem opsplitsen in twee subproblemen van bijna dezelfde grootte (zoals een naïeve berekening van Fibonacci-getallen). Het "brute force" proberen van alle mogelijke combinaties.

## Vergelijken van groeisnelheden

Het is cruciaal om te begrijpen hoe deze functies zich tot elkaar verhouden als `n` groot wordt:

O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n)

Een algoritme met O(n) is *veel* beter dan een met O(n²) voor grote datasets. Zelfs een klein verschil in Big O kan een enorm verschil maken in de praktijk.

<bigochart></bigochart>

**Conceptuele Groei (niet op schaal):**

*   O(1): Blijft vlak.
*   O(log n): Stijgt heel langzaam.
*   O(n): Stijgt als een rechte lijn.
*   O(n log n): Stijgt iets sneller dan O(n).
*   O(n²): Stijgt als een parabool, steeds steiler.
*   O(2^n): Stijgt explosief.

In de volgende sectie gaan we leren hoe we de Big O complexiteit van eenvoudige Python code kunnen analyseren. 