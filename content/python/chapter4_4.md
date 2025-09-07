# 4.4 Dictionaries (Woordenboeken)

In de vorige hoofdstukken hebben we gewerkt met lijsten, een geordende verzameling van elementen die we kunnen aanroepen via hun index. In dit hoofdstuk introduceren we een ander belangrijke datastructuur in Python: dictionaries (woordenboeken).

## Wat zijn Dictionaries?

Een dictionary is een verzameling van **sleutel-waarde paren**. In tegenstelling tot lijsten, waar elementen worden aangeroepen via hun numerieke index, worden elementen in een dictionary aangeroepen via hun sleutel. Dit maakt dictionaries bijzonder nuttig wanneer je gegevens wilt organiseren op basis van een unieke identificator.

## Kenmerken van Dictionaries

- **Ongeordend:** Tot Python 3.7 waren dictionaries ongeordend. Vanaf Python 3.7 behouden dictionaries de volgorde waarin items zijn toegevoegd.
- **Veranderlijk (Mutable):** Net als lijsten kunnen dictionaries worden gewijzigd na creatie.
- **Sleutels moeten uniek zijn:** Elke sleutel in een dictionary moet uniek zijn. Als je een waarde toevoegt met een bestaande sleutel, wordt de oude waarde overschreven.
- **Sleutels moeten onveranderlijk (immutable) zijn:** Alleen onveranderlijke datatypes zoals strings, getallen en tuples kunnen worden gebruikt als sleutels.

## Een Dictionary Aanmaken

Een dictionary wordt aangemaakt met accolades `{}` en bevat sleutel-waarde paren gescheiden door komma's. Elke sleutel en waarde worden gescheiden door een dubbele punt `:`.

```python
# Een lege dictionary
leeg_woordenboek = {}

# Een dictionary met sleutel-waarde paren
student = {
    "naam": "Friso",
    "leeftijd": 17,
    "klas": "5BCW",
    "vakken": ["Wiskunde", "Informatica", "Nederlands"]
}
```

## Toegang tot Waarden in een Dictionary

Je kunt de waarde van een specifieke sleutel opvragen door de sleutel tussen vierkante haken te plaatsen.

```python
student = {
    "naam": "Lobna",
    "leeftijd": 17,
    "klas": "5BCW"
}

print(student["naam"])  # Output: Lobna
print(student["leeftijd"])  # Output: 17
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Als je probeert een sleutel te benaderen die niet bestaat, krijg je een `KeyError`. Om dit te voorkomen, kun je de `get()` methode gebruiken, die een standaardwaarde teruggeeft als de sleutel niet bestaat.

```python
student = {
    "naam": "Ananke",
    "leeftijd": 17,
    "klas": "5BCW"
}

# Dit geeft een KeyError als "adres" niet bestaat
# print(student["adres"])

# Dit geeft None als "adres" niet bestaat
print(student.get("adres"))

# Dit geeft "Onbekend" als "adres" niet bestaat
print(student.get("adres", "Onbekend"))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Wijzigen van een Dictionary

### Waarden Toevoegen of Wijzigen

Je kunt een nieuwe sleutel-waarde paar toevoegen of een bestaande waarde wijzigen door de sleutel tussen vierkante haken te plaatsen en een waarde toe te wijzen.

```python
student = {
    "naam": "Moussa",
    "leeftijd": 17,
    "klas": "5BCW"
}

# Een nieuwe sleutel-waarde paar toevoegen
student["adres"] = "Schoolstraat 1"

# Een bestaande waarde wijzigen
student["leeftijd"] = 18

print(student)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Waarden Verwijderen

Je kunt een sleutel-waarde paar verwijderen met de `del` statement of de `pop()` methode.

```python
student = {
    "naam": "Pepe",
    "leeftijd": 17,
    "klas": "5BCW",
    "adres": "Schoolstraat 1"
}

# Verwijderen met del
del student["adres"]
print(student)

# Verwijderen met pop() (geeft de verwijderde waarde terug)
leeftijd = student.pop("leeftijd")
print(f"Verwijderde leeftijd: {leeftijd}")
print(student)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Itereren over een Dictionary

### Itereren over Sleutels

De standaard manier om over een dictionary te itereren is over de sleutels.

```python
student = {
    "naam": "Omar",
    "leeftijd": 17,
    "klas": "5BCW"
}

# Itereren over sleutels
for sleutel in student:
    print(sleutel)

# Alternatief: expliciet de keys() methode gebruiken
for sleutel in student.keys():
    print(sleutel)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Itereren over Waarden

Je kunt ook alleen over de waarden itereren met de `values()` methode.

```python
student = {
    "naam": "Rania",
    "leeftijd": 17,
    "klas": "5BCW"
}

for waarde in student.values():
    print(waarde)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Itereren over Sleutel-Waarde Paren

Om over zowel sleutels als waarden te itereren, gebruik je de `items()` methode.

```python
student = {
    "naam": "Winke",
    "leeftijd": 17,
    "klas": "5BCW"
}

for sleutel, waarde in student.items():
    print(f"{sleutel}: {waarde}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Combineren van For Loops en Dictionaries

Dictionaries en for loops vormen samen een krachtige combinatie om data te verwerken en te transformeren.

### Filteren van Dictionaries

Je kunt een for loop gebruiken om een nieuwe dictionary te maken die alleen bepaalde sleutel-waarde paren bevat op basis van een conditie.

```python
scores = {
    "Nederlands": 7,
    "Wiskunde": 8,
    "Engels": 6,
    "Informatica": 9,
    "Geschiedenis": 5
}

# Maak een nieuwe dictionary met alleen vakken met een voldoende (≥ 6)
voldoendes = {}
for vak, cijfer in scores.items():
    if cijfer >= 6:
        voldoendes[vak] = cijfer

print(voldoendes)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Transformeren van Dictionaries

Je kunt een for loop gebruiken om een nieuwe dictionary te maken die is afgeleid van een bestaande dictionary, maar met getransformeerde waarden.

```python
prijzen = {
    "appel": 0.80,
    "banaan": 1.20,
    "sinaasappel": 1.50,
    "kiwi": 2.00
}

# Verhoog alle prijzen met 10%
nieuwe_prijzen = {}
for product, prijs in prijzen.items():
    nieuwe_prijzen[product] = round(prijs * 1.10, 2)

print(nieuwe_prijzen)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>


## Geneste Dictionaries

Dictionaries kunnen complexe datastructuren bevatten, inclusief andere dictionaries.

```python
school = {
    "5BCW": {
        "klasleraar": "P. Janssens",
        "lokaal": "B12",
        "studenten": ["Kemon", "Fiebe", "Daan", "Karsten"]
    },
    "5WWI": {
        "klasleraar": "D. Peeters",
        "lokaal": "C03",
        "studenten": ["Marjotte", "Jolan", "Nona", "Rosie"]
    }
}

# Toegang tot geneste waarden
print(school["5BCW"]["klasleraar"])  # Output: Mevr. Janssens
print(school["5WWI"]["studenten"][1])   # Output: Thomas
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Praktische Toepassingen van Dictionaries

### 1. Frequentietelling

Dictionaries zijn ideaal voor het tellen van frequenties, bijvoorbeeld het aantal keren dat elk woord in een tekst voorkomt.

```python
tekst = "dit is een test dit is slechts een test"
woorden = tekst.split()

frequentie = {}
for woord in woorden:
    if woord in frequentie:
        frequentie[woord] += 1
    else:
        frequentie[woord] = 1

print(frequentie)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### 2. Gegevens Groeperen

Dictionaries kunnen worden gebruikt om gegevens te groeperen op basis van een gemeenschappelijk kenmerk.

```python
studenten = [
    {"naam": "Saloua", "klas": "5BCW"},
    {"naam": "Piet", "klas": "5WWI"},
    {"naam": "Bas", "klas": "5BCW"},
    {"naam": "Sophie", "klas": "5WWI"}
]

per_klas = {}
for student in studenten:
    klas = student["klas"]
    if klas not in per_klas:
        per_klas[klas] = []
    per_klas[klas].append(student["naam"])

print(per_klas)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### 3. Lookup Tabellen

Dictionaries zijn uitstekend voor het maken van lookup tabellen, waar je snel een waarde kunt opzoeken op basis van een sleutel.

```python
landcodes = {
    "BE": "België",
    "NL": "Nederland",
    "DE": "Duitsland",
    "FR": "Frankrijk",
    "UK": "Verenigd Koninkrijk"
}

code = input("Voer een landcode in (bijv. BE, NL): ")
land = landcodes.get(code, "Onbekende code")
print(f"De landcode {code} staat voor: {land}")
```

## Vergelijking met Lijsten

| Eigenschap | Lijst | Dictionary |
|------------|-------|------------|
| Toegang tot elementen | Via index (0, 1, 2, ...) | Via sleutel (kan elk onveranderlijk type zijn) |
| Volgorde | Geordend | Geordend (vanaf Python 3.7) |
| Duplicaten | Toegestaan | Sleutels moeten uniek zijn |
| Gebruik | Wanneer volgorde belangrijk is | Wanneer je gegevens wilt opzoeken op basis van een unieke identificator |

## Conclusie

Dictionaries zijn een krachtig hulpmiddel in Python voor het organiseren en manipuleren van gegevens. Ze bieden een efficiënte manier om waarden op te slaan en op te halen op basis van unieke sleutels, wat ze ideaal maakt voor veel praktische toepassingen zoals het bijhouden van frequenties, het groeperen van gegevens en het maken van lookup tabellen.

In het volgende hoofdstuk zullen we kennismaken met while-loops, een andere belangrijke controlestructuur in Python die je in staat stelt om code herhaaldelijk uit te voeren zolang aan een bepaalde voorwaarde wordt voldaan. 