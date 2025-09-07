# 2.3 Gebruikersinvoer

Tot nu toe hebben we waarden rechtstreeks in onze code geschreven. Maar wat als we willen dat ons programma interactief wordt en reageert op wat de gebruiker invoert? Dat is waar de `input()` functie van pas komt.

## De `input()` functie

De `input()` functie laat je programma pauzeren en wachten tot de gebruiker iets intypt en op Enter drukt. Wat de gebruiker invoert, wordt opgeslagen als een string.

```python
naam = input("Wat is je naam? ")
print(f"Hallo, {naam}!")
```

Probeer deze code uit te voeren in de terminal of in VS Code. Je zult zien dat het programma je vraagt om je naam in te voeren. Nadat je je naam hebt ingevoerd en op Enter hebt gedrukt, zal het programma je begroeten met je naam.

## `input()` geeft altijd een string

Het is belangrijk om te onthouden dat de `input()` functie altijd een string retourneert, zelfs als de gebruiker een getal invoert. Als je wilt rekenen met de invoer van de gebruiker, moet je deze eerst converteren naar het juiste datatype, bijvoorbeeld met `int()` of `float()`.

```python
leeftijd = input("Wat is je leeftijd? ")
leeftijd = int(leeftijd)  # Converteren naar een integer
print(f"Volgend jaar ben je {leeftijd + 1} jaar oud.")
```

## `input()` in de terminal en in `.py` bestanden

Je kunt de `input()` functie zowel gebruiken wanneer je Python code direct in de terminal uitvoert, als wanneer je code schrijft en opslaat in een `.py` bestand. Het gedrag is hetzelfde: het programma zal pauzeren en wachten op invoer van de gebruiker.

## Oefening

Schrijf een programma dat de gebruiker vraagt om twee getallen in te voeren. Converteer de invoer naar integers, tel de getallen bij elkaar op en print het resultaat.

**Tip:** Vergeet niet om duidelijke instructies te geven aan de gebruiker over wat hij/zij moet invoeren! 