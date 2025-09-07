# 4.2 Itereren over Lijsten

In het programmeren is iteratie een fundamenteel concept dat verwijst naar het herhaaldelijk uitvoeren van een set instructies over een verzameling gegevens. Bij lijsten betekent dit dat we over elk element in de lijst gaan en er een bewerking op uitvoeren. In dit hoofdstuk bespreken we de algemene concepten van het itereren over lijsten en hoe dit efficiënt kan worden gedaan. De algemene principes zijn van toepassing op vrijwel alle programmeertalen.

## Wat is Iteratie?

Iteratie is het proces waarbij een reeks instructies meerdere keren wordt uitgevoerd, meestal één keer voor elk element in een collectie zoals een lijst. Dit stelt ons in staat om herhalende taken uit te voeren zonder de code telkens opnieuw te schrijven.

## Manieren om over Lijsten te Itereren

Er zijn verschillende manieren om over de elementen van een lijst te itereren:

### 1. Gebruik van een `for`-lus

De meest gebruikelijke manier om over een lijst te itereren is met een `for`-lus. Hierbij wordt elk element in de lijst één voor één benaderd.

**Voorbeeld:**
```python
cijfers = [1, 2, 3, 4, 5]
for cijfer in cijfers:
  print(cijfer)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

**Uitleg:**

- `for cijfer in cijfers:` betekent dat de lus over elk element in de lijst `cijfers` loopt.
- `cijfer` is een variabele die bij elke iteratie de waarde van het huidige element in de lijst aanneemt.
- `print(cijfer)` voert een actie uit met het huidige element. In dit geval wordt het getal uitgeprint.

Het code blok (dat de bewerkingen bevat die in de lus op elk element uitgevoerd moeten worden) komt steeds na het dubbele punt en moet je altijd indenteren. D.w.z. dat het code blok altijd naar rechts geschoven moet worden. We gebruiken hier twee spaties voor de indentatie.

### 2. Itereren over Geneste Lijsten

Bij lijsten die andere lijsten bevatten (geneste lijsten) kunnen we geneste lussen gebruiken om over alle elementen te itereren.

**Voorbeeld:**
```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for rij in matrix:
    for element in rij:
        print(element)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

**Uitleg:**

- De eerste `for`-lus itereert over elke rij in de matrix.
- De tweede `for`-lus itereert over elk element in de huidige rij.

### 3. Gebruik van `for`-lus met `range()`functie

Naast het direct itereren over de elementen van een lijst, kun je ook itereren over een reeks indexen of getallen. De range() functie in Python genereert een reeks getallen die je kunt gebruiken in een for-lus. Dit is vooral handig wanneer je de index van elk element nodig hebt tijdens het itereren.

**Introductie van range():**
De range() functie produceert een reeks gehele getallen. De meest eenvoudige vorm is range(stop), die getallen genereert van 0 tot stop - 1.
**Voorbeeld:**
```python
for i in range(5):
    print(i)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


**Uitleg:**

- `range(5)` genereert de getallen `0, 1, 2, 3, 4`.
- In elke iteratie neemt de variabele `i` de volgende waarde in de reeks aan.
- Dit wordt vaak gebruikt wanneer je een bepaald aantal keren wilt herhalen of toegang wilt tot de indexen van een lijst.


**Itereren over een lijst met indexen:**
Als je zowel de index als het bijbehorende element van een lijst nodig hebt, kun je `range()` combineren met de `len()` functie.

```python
woorden = ["appel", "banaan", "kers"]

for i in range(len(woorden)):
    print(f"Index {i}: {woorden[i]}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


**Uitleg:**


- `len(woorden)` geeft het aantal elementen in de lijst `woorden`, in dit geval `3`.
- `range(len(woorden))` genereert de reeks `0, 1, 2`.
- Tijdens elke iteratie kun je zowel de index `i` als het bijbehorende element `woorden[i]` gebruiken.

### 4. Itereren over Karakters in een String

Strings in Python kunnen worden gezien als een reeks karakters, en je kunt er op dezelfde manier over itereren als over een lijst.

**Voorbeeld:**
```python
woord = "Python"
for karakter in woord:
    print(karakter)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

**Uitleg:**
- Elke letter in de string wordt één voor één doorlopen
- De variabele `karakter` bevat bij elke iteratie één letter uit de string
- Je kunt ook de index gebruiken als je wilt weten op welke positie een karakter staat:

```python
woord = "Python"
for i in range(len(woord)):
    print(f"Positie {i}: {woord[i]}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Veelvoorkomende Toepassingen van Iteratie

- **Gegevenstransformatie:** Toepassen van een functie of bewerking op elk element in de lijst.

  ```python
  getallen = [1, 2, 3, 4]
  kwadraten = []

  for num in getallen:
      kwadraten.append(num ** 2)

  print(kwadraten)  # Output: [1, 4, 9, 16]
  ```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

- **Filteren:** Selecteren van elementen die aan een bepaalde voorwaarde voldoen.

  ```python
  getallen = [1, 2, 3, 4, 5, 6]
  even_getallen = []

  for num in getallen:
      if num % 2 == 0:
          even_getallen.append(num)

  print(even_getallen)  # Output: [2, 4, 6]
  ```


- **Sommeren:** Berekenen van de som van alle elementen in de lijst.

  ```python
  getallen = [1, 2, 3, 4, 5]
  som = 0

  for num in getallen:
      som += num

  print(som)
```