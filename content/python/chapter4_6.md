# 4.6 Oefeningen: Dictionaries en While Loops

In dit hoofdstuk ga je de concepten die je hebt geleerd over dictionaries en while-loops in de praktijk brengen. De oefeningen variëren in moeilijkheidsgraad, zodat er voor elke leerling uitdagende opdrachten zijn. Je kunt de oefeningen uitwerken in een nieuw `.py`-bestand in VS Code of een andere teksteditor.

## Oefeningen met Dictionaries

### Oefening 1: Basisoperaties met Dictionaries
* **Moeilijkheidsgraad:** ★☆☆☆☆

Maak een dictionary genaamd `persoon` met de volgende sleutel-waarde paren:
- "naam": jouw naam
- "leeftijd": jouw leeftijd
- "school": naam van je school
- "hobby's": een lijst met ten minste twee hobby's

Voer vervolgens de volgende bewerkingen uit:
1. Print de waarde van de sleutel "naam".
2. Voeg een nieuwe sleutel "woonplaats" toe met jouw woonplaats als waarde.
3. Wijzig de waarde van "leeftijd" naar je huidige leeftijd + 1.
4. Verwijder de sleutel "school" uit de dictionary.
5. Print de uiteindelijke dictionary.

---

### Oefening 2: Woordfrequentie
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat de gebruiker vraagt om een zin in te voeren. Tel vervolgens hoe vaak elk woord in de zin voorkomt en sla dit op in een dictionary. Print de resultaten in het formaat "woord: aantal".

Voorbeeld:
```
Voer een zin in: dit is een test dit is slechts een test
Woordfrequentie:
dit: 2
is: 2
een: 2
test: 2
slechts: 1
```

*Tip:* Gebruik de `split()` methode om de zin in woorden te splitsen.

---

### Oefening 3: Telefoonboek
* **Moeilijkheidsgraad:** ★★★☆☆

Maak een eenvoudig telefoonboek met behulp van een dictionary. Het programma moet de volgende functionaliteiten hebben:
1. Een contact toevoegen (naam en telefoonnummer)
2. Een contact opzoeken op naam
3. Een contact verwijderen
4. Alle contacten weergeven
5. Het programma afsluiten

Gebruik een menu om de gebruiker te laten kiezen welke actie ze willen uitvoeren.

Voorbeeld:
```
Telefoonboek Menu:
1. Contact toevoegen
2. Contact opzoeken
3. Contact verwijderen
4. Alle contacten weergeven
5. Afsluiten
Kies een optie: 1

Naam: Jan
Telefoonnummer: 0612345678
Contact toegevoegd!

Telefoonboek Menu:
...
```

---

### Oefening 4: Cijferanalyse
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat een dictionary gebruikt om punten bij te houden. Gebruik de volgende data:

```python
cijfers = {
    "Nederlands": 7,
    "Engels": 6,
    "Wiskunde": 8,
    "Informatica": 9,
    "Geschiedenis": 5,
    "Aardrijkskunde": 7,
    "Biologie": 6
}
```

Het programma moet de volgende analyses uitvoeren en weergeven:
1. Het gemiddelde cijfer (afgerond op 1 decimaal)
2. Het hoogste cijfer en bijbehorende vak
3. Het laagste cijfer en bijbehorende vak
4. Een lijst van alle vakken met een voldoende (cijfer ≥ 6)
5. Een lijst van alle vakken met een onvoldoende (cijfer < 6)

Gebruik for loops om door de dictionary te itereren.

---

### Oefening 5: Dictionary Transformatie
* **Moeilijkheidsgraad:** ★★★☆☆

Maak een programma dat een dictionary met producten en prijzen transformeert op verschillende manieren:

```python
producten = {
    "appel": 0.75,
    "banaan": 1.20,
    "sinaasappel": 1.50,
    "kiwi": 2.00,
    "druiven": 2.50,
    "mango": 1.95,
    "ananas": 3.25
}
```

Het programma moet de volgende transformaties uitvoeren en telkens het resultaat weergeven:

1. Verhoog alle prijzen met 5% (gebruik een gewone for loop)
2. Maak een nieuwe dictionary met alleen producten die duurder zijn dan €1.50 (gebruik een for loop met conditie)
3. Maak een nieuwe dictionary waarbij alle sleutels in hoofdletters staan

---

### Oefening 6: Woordenboekvertaler
* **Moeilijkheidsgraad:** ★★★☆☆

Maak een eenvoudige woordenboekvertaler met behulp van een geneste dictionary. De vertaler moet woorden kunnen vertalen van Nederlands naar Engels, Frans en Duits.

Voorbeeld:
```python
woordenboek = {
    "hallo": {"Engels": "hello", "Frans": "bonjour", "Duits": "hallo"},
    "wereld": {"Engels": "world", "Frans": "monde", "Duits": "welt"},
    # Voeg meer woorden toe
}
```

Het programma moet de gebruiker vragen om:
1. Een Nederlands woord
2. De doeltaal (Engels, Frans of Duits)

Vervolgens moet het programma de vertaling weergeven of een bericht dat het woord niet in het woordenboek staat.

---

### Oefening 7: Studentenbeheer
* **Moeilijkheidsgraad:** ★★★★☆

Maak een programma voor studentenbeheer met behulp van dictionaries. Elke student heeft een uniek studentnummer en de volgende gegevens:
- Naam
- Leeftijd
- Studierichting
- Cijfers (een dictionary met vakken als sleutels en cijfers als waarden)

Het programma moet de volgende functionaliteiten hebben:
1. Een student toevoegen
2. Studentgegevens weergeven op basis van studentnummer
3. Een cijfer toevoegen voor een vak
4. Het gemiddelde cijfer van een student berekenen
5. Alle studenten weergeven die een bepaalde studierichting volgen
6. Het programma afsluiten

*Uitbreiding:* Voeg de mogelijkheid toe om de gegevens op te slaan in een bestand en te laden bij het starten van het programma.

## Oefeningen met While Loops

### Oefening 8: Aftellen
* **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een programma dat aftelt van 10 naar 1 en vervolgens "Start!" print. Gebruik een while-loop.

---

### Oefening 9: Raad het Getal
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat een willekeurig getal genereert tussen 1 en 100. De gebruiker moet dit getal raden. Na elke gok moet het programma aangeven of het getal te hoog, te laag of correct is. Het programma moet doorgaan totdat de gebruiker het juiste getal heeft geraden of opgeeft door 'q' in te voeren.

*Tip:* Gebruik de `random` module om een willekeurig getal te genereren.

---

### Oefening 10: Wachtwoordvalidatie
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een programma dat de gebruiker vraagt om een wachtwoord in te voeren. Het wachtwoord moet aan de volgende criteria voldoen:
- Minimaal 8 karakters lang
- Bevat ten minste één hoofdletter
- Bevat ten minste één cijfer
- Bevat ten minste één speciaal karakter (bijv. !@#$%^&*)

Het programma moet blijven vragen om een wachtwoord totdat aan alle criteria is voldaan.

*Tip:* Gebruik de `any()` functie en list comprehensions om te controleren of aan de criteria wordt voldaan.

---

### Oefening 11: Rekenmachine
* **Moeilijkheidsgraad:** ★★★☆☆

Maak een eenvoudige rekenmachine die de gebruiker vraagt om twee getallen en een operator (+, -, *, /). Het programma moet de berekening uitvoeren en het resultaat weergeven. Gebruik een while-loop om het programma te laten doorgaan totdat de gebruiker besluit te stoppen.

Voorbeeld:
```
Voer het eerste getal in: 5
Voer de operator in (+, -, *, /): *
Voer het tweede getal in: 3
Resultaat: 5 * 3 = 15

Wil je nog een berekening uitvoeren? (ja/nee): ja
...
```

---

### Oefening 12: Fibonacci-reeks
* **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat de Fibonacci-reeks genereert tot een door de gebruiker opgegeven limiet. De Fibonacci-reeks begint met 0 en 1, en elk volgend getal is de som van de twee voorgaande getallen (0, 1, 1, 2, 3, 5, 8, 13, ...).

Gebruik een while-loop om de reeks te genereren en sla de getallen op in een lijst. Print vervolgens de volledige reeks.

---

### Oefening 13: Priemgetallen
* **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat alle priemgetallen vindt tot een door de gebruiker opgegeven limiet. Een priemgetal is een getal groter dan 1 dat alleen deelbaar is door 1 en zichzelf.

Gebruik een while-loop voor de hoofditeratie en een geneste loop om te controleren of een getal een priemgetal is.

*Uitbreiding:* Implementeer de Zeef van Eratosthenes voor een efficiëntere berekening van priemgetallen.

## Gecombineerde Oefeningen

### Oefening 14: Woordenspel
* **Moeilijkheidsgraad:** ★★★★☆

Maak een woordenspel waarbij de computer een willekeurig woord kiest uit een lijst en de gebruiker dit woord moet raden. De gebruiker raadt één letter per keer. Als de letter in het woord voorkomt, wordt deze onthuld; zo niet, dan verliest de gebruiker een leven.

Gebruik een dictionary om bij te houden welke letters al zijn geraden en een while-loop om het spel te laten doorgaan totdat de gebruiker het woord heeft geraden of alle levens heeft verloren.

Voorbeeld:
```
Woord: _ _ _ _ _
Levens: 6
Raad een letter: a
Goed geraden!
Woord: _ a _ _ _
Levens: 6
Raad een letter: z
Helaas, de letter z komt niet voor in het woord.
Woord: _ a _ _ _
Levens: 5
...
```

---

### Oefening 15: Quiz
* **Moeilijkheidsgraad:** ★★★★★

Maak een quizprogramma met behulp van dictionaries en while-loops. De quiz moet meerdere vragen bevatten, elk met meerdere antwoordopties. De gebruiker moet het juiste antwoord kiezen.

Gebruik een dictionary om de vragen, antwoordopties en juiste antwoorden op te slaan. Gebruik een while-loop om door de vragen te itereren en de score bij te houden.

Voorbeeld:
```python
quiz = {
    "Wat is de hoofdstad van Frankrijk?": {
        "opties": ["A. Londen", "B. Parijs", "C. Berlijn", "D. Rome"],
        "antwoord": "B"
    },
    # Meer vragen
}
```

Het programma moet:
1. De vragen in willekeurige volgorde stellen
2. De score bijhouden
3. Aan het einde de totale score weergeven
4. De mogelijkheid bieden om de quiz opnieuw te spelen