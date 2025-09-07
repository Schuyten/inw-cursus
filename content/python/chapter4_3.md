# 4.3 Oefeningen: Lijsten en Iteratie

In dit hoofdstuk ga je de concepten die je hebt geleerd over lijsten en iteratie in de praktijk brengen. De oefeningen variëren in moeilijkheidsgraad, zodat er voor elke leerling uitdagende opdrachten zijn. Je kunt de oefeningen uitwerken in een nieuw `.py`-bestand in VS Code of een andere teksteditor. Door de code te **runnen** kun je de output verifiëren.

## Oefening 1: Basislijstbewerkingen
* **Moeilijkheidsgraad:** ★☆☆☆☆

Maak een lijst genaamd `favoriete_kleuren` met ten minste drie van je favoriete kleuren. Voeg vervolgens nog een kleur toe aan de lijst en verwijder de eerste kleur. Print tot slot de uiteindelijke lijst.

---

## Oefening 2: Toegang tot lijstitems
* **Moeilijkheidsgraad:** ★☆☆☆☆

Gegeven de lijst `dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"]`, schrijf code om:
1. De eerste dag te printen.
2. De laatste dag te printen.
3. De middense dag (vierde dag) te printen.

---

## Oefening 3: Som van getallen in een lijst
* **Moeilijkheidsgraad:** ★★☆☆☆

Maak een lijst `getallen` met de waarden `[5, 10, 15, 20, 25]`. Gebruik een for-lus om de som van de getallen in de lijst te berekenen en print het resultaat.

Verwachte output: De som van de getallen is 75.


---

## Oefening 4: Bereken het gemiddelde
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat het gemiddelde berekent van een lijst getallen ingevoerd door de gebruiker. Vraag de gebruiker om het aantal getallen, en vervolgens om elk getal afzonderlijk in te voeren. Sla de getallen op in een lijst, bereken het gemiddelde en print het resultaat met twee decimalen.

Voorbeeld:
Hoeveel getallen wil je invoeren? 4
Voer getal 1 in: 10
Voer getal 2 in: 20
Voer getal 3 in: 30
Voer getal 4 in: 40
Het gemiddelde is: 25.00

---

## Oefening 5: Woorden omkeren
* **Moeilijkheidsgraad:** ★★☆☆☆

Gegeven een lijst met woorden `woorden = ["Python", "is", "leuk"]`, gebruik een for-lus om elk woord om te keren en sla de omgekeerde woorden op in een nieuwe lijst. Print vervolgens de nieuwe lijst.

Verwachte output: ['nohtyP', 'si', 'kuel']

---

## Oefening 6: Even en oneven getallen
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat alle getallen van 1 tot 20 in een lijst plaatst. Gebruik vervolgens een for-lus om twee nieuwe lijsten te maken: één met even getallen en één met oneven getallen. Print beide lijsten.

Verwachte output:
Even getallen: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
Oneven getallen: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

---

## Oefening 7: Lijst van kwadraten
* **Moeilijkheidsgraad:** ★★★☆☆

Gebruik een for-lus en de functie `range()` om een lijst te maken die de kwadraten bevat van de getallen van 1 tot en met 10. Print de resulterende lijst.

Verwachte output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

---

## Oefening 8: Rechthoek tekenen
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat een rechthoek tekent met sterretjes (*). Vraag de gebruiker om de hoogte en breedte van de rechthoek. Gebruik nested loops om het patroon te maken.

Voorbeeld:
Voer de hoogte in: 3
Voer de breedte in: 4

Output:
****
****
****

*Tip:* Gebruik een for-loop voor de rijen en een geneste for-loop voor de kolommen.

---

## Oefening 9: Driehoek tekenen
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat een rechthoekige driehoek tekent met sterretjes (*). Vraag de gebruiker om de hoogte van de driehoek en teken vervolgens het patroon.

Voorbeeld:
Voer de hoogte in: 5

Output:
*
**
***
****
*****

*Tip:* Je kunt de rijnummer gebruiken om te bepalen hoeveel sterretjes er op elke rij moeten komen.

---

## Oefening 10: Zoek het maximum en minimum
* **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat een lijst van 10 willekeurige gehele getallen tussen 1 en 100 genereert (gebruik hiervoor de `random` module). Gebruik vervolgens een for-lus om het maximum en minimum getal in de lijst te vinden zonder de ingebouwde functies `max()` en `min()` te gebruiken. Print de lijst, het maximum en het minimum.

Voorbeeld output:
De lijst is: [23, 67, 12, 89, 34, 56, 78, 45, 9, 100]
Maximum: 100
Minimum: 9


*Tip:* Begin met het instellen van het eerste element en het huidige maximum als minimum.

---

## Oefening 11: Priemgetallen tussen 1 en 50
* **Moeilijkheidsgraad:** ★★★★☆

Maak een programma dat alle priemgetallen tussen 1 en 50 vindt en opslaat in een lijst. Print vervolgens de lijst met priemgetallen.

Verwachte output:
Priemgetallen tussen 1 en 50: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]


*Tip:* Een priemgetal is een getal groter dan 1 dat alleen deelbaar is door 1 en zichzelf.

---

## Oefening 12: Studentengemiddelde
* **Moeilijkheidsgraad:** ★★★★★

Stel je voor dat je de cijfers van studenten voor een examen hebt. Schrijf een programma dat:

1. De gebruiker vraagt om het aantal studenten.
2. Voor elke student vraagt om hun naam en hun cijfer (op 20).
3. De gegevens opslaat in twee lijsten: een lijst voor namen en een corresponderende lijst voor cijfers.
4. Het gemiddelde cijfer berekent en print.
5. De namen van de studenten die boven het gemiddelde hebben gescoord, print.

Voorbeeld:
Hoeveel studenten zijn er? 3
Naam van student 1: Alice
Cijfer van Alice: 16
Naam van student 2: Bob
Cijfer van Bob: 12
Naam van student 3: Charlie
Cijfer van Charlie: 18
Het gemiddelde cijfer is 15.33
Studenten die boven het gemiddelde scoorden: Alice, Charlie

*Uitbreiding:* Sorteer de studenten op basis van hun cijfer in aflopende volgorde en print de rangorde.

## Oefening 13: Frequentie van woorden
* **Moeilijkheidsgraad:** ★★★★★

Schrijf een programma dat een zin van de gebruiker vraagt en bepaalt hoe vaak elk woord in de zin voorkomt. Gebruik een lijst om de woorden op te slaan en gebruik vervolgens iteratie om de frequentie te tellen. Print een overzicht van elk woord en het aantal keren dat het voorkomt.

Voorbeeld:
Voer een zin in: Dit is een test en dit is slechts een test
Frequentie van woorden:
Dit: 2
is: 2
een: 2
test: 2
en: 1
slechts: 1

*Tip:* Je kunt de methode `split()` op strings gebruiken om de woorden te verkrijgen.
