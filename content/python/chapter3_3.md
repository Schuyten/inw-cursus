# 3.3 Oefeningen: Vergelijkingen en If-statements

In dit hoofdstuk ga je oefenen met het maken van vergelijkingen en het gebruiken van if-statements in Python. Deze oefeningen helpen je om de concepten uit de vorige lessen beter te begrijpen en toe te passen.

Je kunt de oefeningen uitwerken in een nieuw `.py`-bestand in VS Code of een andere teksteditor. Door de code te **uitvoeren** kun je de output verifiëren en controleren of je oplossingen correct zijn.

---

## Oefening 1: Even of Oneven

- **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een programma dat een geheel getal van de gebruiker vraagt en bepaalt of het getal even of oneven is. Gebruik een if-else statement en print het resultaat.

**Voorbeeldoutput:**

```
Voer een geheel getal in: 7
Het getal 7 is oneven.
```

---

## Oefening 2: Toegang Tot Een Film

- **Moeilijkheidsgraad:** ★★☆☆☆

Een bioscoop hanteert de volgende regels voor toegang tot een film:

- De film is geschikt voor 16 jaar en ouder.
- Personen jonger dan 16 mogen alleen naar binnen onder begeleiding van een volwassene.

Schrijf een programma dat de leeftijd van de gebruiker vraagt en of ze met een volwassene zijn. Gebruik deze informatie om te bepalen of de gebruiker naar de film mag.

**Voorbeeldoutput 1:**

```
Wat is je leeftijd? 15
Ben je met een volwassene? (ja/nee): ja
Je mag naar de film.
```

**Voorbeeldoutput 2:**

```
Wat is je leeftijd? 15
Ben je met een volwassene? (ja/nee): nee
Sorry, je mag niet naar de film.
```

---

## Oefening 3: Getal Raden

- **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een programma dat een geheim getal opslaat (bijvoorbeeld 7). Vraag de gebruiker om een getal te raden en geef feedback:

- Als het geraden getal gelijk is aan het geheime getal, print "Gefeliciteerd, je hebt het getal geraden!"
- Zo niet, print "Helaas, dat is niet correct. Probeer het nog eens."

**Voorbeeldoutput:**

```
Raad het geheime getal tussen 1 en 10: 5
Helaas, dat is niet correct. Probeer het nog eens.
```

---

## Oefening 4: Positief, Negatief of Nul

- **Moeilijkheidsgraad:** ★★☆☆☆

Vraag de gebruiker om een getal in te voeren en bepaal of het getal positief, negatief of nul is. Gebruik if-elif-else statements om dit te bepalen en print het resultaat.

**Voorbeeldoutput:**

```
Voer een getal in: -3
Het getal is negatief.
```

**Let op:** Hoewel we `elif` hier introduceren, hoef je je geen zorgen te maken; het is een combinatie van `else` en `if` en wordt in een later hoofdstuk verder besproken.

---

## Oefening 5: Meerdere Voorwaarden

- **Moeilijkheidsgraad:** ★★★☆☆

Een student moet aan de volgende voorwaarden voldoen om te slagen voor een vak:

- Het cijfer moet 50 of hoger zijn.
- De aanwezigheid moet 80% of hoger zijn.

Schrijf een programma dat het cijfer en de aanwezigheid van de student vraagt en bepaalt of de student geslaagd is.

**Voorbeeldoutput:**

```
Wat is je cijfer? 65
Wat is je aanwezigheid in procenten? 85
Gefeliciteerd, je bent geslaagd voor het vak!
```

---

## Oefening 6: Schrikkeljaar

- **Moeilijkheidsgraad:** ★★★★☆

Schrijf een programma dat bepaalt of een gegeven jaar een schrikkeljaar is. Een jaar is een schrikkeljaar als:

- Het deelbaar is door 4 **en niet** deelbaar is door 100, **of**
- Het deelbaar is door 400.

**Voorbeeldoutput:**

```
Voer een jaartal in: 2020
2020 is een schrikkeljaar.
```

**Tip:** Gebruik modulus `%` om te bepalen of een getal deelbaar is.

---

## Oefening 7: Getal in Interval

- **Moeilijkheidsgraad:** ★★★★☆

Vraag de gebruiker om een getal tussen 1 en 100. Controleer of het getal binnen deze range valt. Als dat zo is, print "Het getal ligt binnen het interval." Zo niet, print "Het getal ligt buiten het interval."

**Voorbeeldoutput:**

```
Voer een getal tussen 1 en 100 in: 150
Het getal ligt buiten het interval.
```


---

## Oefening 8: Kortingscalculator

- **Moeilijkheidsgraad:** ★★★★☆

Een winkel geeft een korting op basis van het aankoopbedrag:

- Als het bedrag hoger is dan €100, krijgt de klant 10% korting.
- Als het bedrag hoger is dan €50 maar minder dan of gelijk aan €100, krijgt de klant 5% korting.
- Anders krijgt de klant geen korting.

Schrijf een programma dat het aankoopbedrag vraagt en de uiteindelijke prijs na korting berekent en print.

**Voorbeeldoutput:**

```
Voer het aankoopbedrag in: 120
Je krijgt 10% korting.
De uiteindelijke prijs is: €108.0
```

**Let op:** Hoewel we hier meerdere condities hebben, kun je dit oplossen met geneste if-else statements.

---

Veel succes met de oefeningen! Probeer ze eerst zelf op te lossen voordat je de code uitvoert. Als je vastloopt, bekijk dan de voorbeelden uit de vorige hoofdstukken nog eens.
