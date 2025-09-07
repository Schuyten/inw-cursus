# 4.5 While Loops

In het vorige hoofdstuk hebben we kennisgemaakt met for-loops, die ons in staat stellen om over een reeks elementen te itereren. In dit hoofdstuk introduceren we een ander type lus: de while-loop. Terwijl for-loops worden gebruikt om over een bekende reeks elementen te itereren, worden while-loops gebruikt om code herhaaldelijk uit te voeren zolang aan een bepaalde voorwaarde wordt voldaan.

## Wat is een While Loop?

Een while-loop is een controlestructuur die een blok code herhaaldelijk uitvoert zolang een bepaalde voorwaarde waar (True) is. De algemene syntax is als volgt:

```python
while voorwaarde:
    # Code die wordt uitgevoerd zolang de voorwaarde waar is
```

De uitvoering van een while-loop verloopt als volgt:
1. De voorwaarde wordt geëvalueerd.
2. Als de voorwaarde waar (True) is, wordt de code binnen de lus uitgevoerd.
3. Na uitvoering van de code wordt de voorwaarde opnieuw geëvalueerd.
4. Dit proces herhaalt zich totdat de voorwaarde onwaar (False) wordt.

## Eenvoudige While Loop

Hier is een eenvoudig voorbeeld van een while-loop die telt van 1 tot 5:

```python
teller = 1
while teller <= 5:
    print(teller)
    teller += 1  # Verhoog de teller met 1
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In dit voorbeeld:
- We beginnen met `teller = 1`.
- De voorwaarde `teller <= 5` wordt gecontroleerd. Aangezien 1 <= 5 waar is, wordt de code binnen de lus uitgevoerd.
- We printen de waarde van `teller` en verhogen deze met 1.
- Dit proces herhaalt zich totdat `teller` de waarde 6 bereikt, waarna de voorwaarde `teller <= 5` onwaar wordt en de lus eindigt.

## Oneindige Loops en Break Statement

Een while-loop waarvan de voorwaarde altijd waar is, wordt een oneindige lus genoemd. Dit kan opzettelijk zijn of het gevolg van een programmeerfout. Om een oneindige lus te verlaten, kunnen we het `break` statement gebruiken.

```python
teller = 1
while True:  # Dit is een oneindige lus
    print(teller)
    teller += 1
    if teller > 5:
        break  # Verlaat de lus als teller groter is dan 5
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In dit voorbeeld:
- De voorwaarde `True` is altijd waar, dus de lus zou oneindig doorgaan.
- We gebruiken `break` om de lus te verlaten wanneer `teller` groter is dan 5.

## Continue Statement

Het `continue` statement wordt gebruikt om de huidige iteratie van de lus over te slaan en door te gaan met de volgende iteratie.

```python
teller = 0
while teller < 10:
    teller += 1
    if teller % 2 == 0:  # Als teller even is
        continue  # Sla de rest van de code in deze iteratie over
    print(teller)  # Dit wordt alleen uitgevoerd als teller oneven is
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In dit voorbeeld:
- We verhogen `teller` van 0 tot 10.
- Als `teller` even is, gebruiken we `continue` om de rest van de code in die iteratie over te slaan.
- Als gevolg hiervan worden alleen oneven getallen afgedrukt.

## While Loop met Else Clause

Net als bij for-loops kan een while-loop een `else` clause hebben die wordt uitgevoerd nadat de lus is voltooid (d.w.z., wanneer de voorwaarde onwaar wordt).

```python
teller = 1
while teller <= 5:
    print(teller)
    teller += 1
else:
    print("De lus is voltooid!")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In dit voorbeeld:
- De while-loop telt van 1 tot 5.
- Nadat de lus is voltooid (wanneer `teller` de waarde 6 bereikt), wordt de code in de `else` clause uitgevoerd.

Het is belangrijk op te merken dat de `else` clause niet wordt uitgevoerd als de lus wordt verlaten met een `break` statement.

```python
teller = 1
while teller <= 5:
    print(teller)
    if teller == 3:
        break  # Verlaat de lus vroegtijdig
    teller += 1
else:
    print("Dit wordt niet afgedrukt omdat de lus wordt verlaten met break")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Praktische Toepassingen van While Loops

### 1. Gebruikersinvoer Valideren

While-loops zijn handig voor het valideren van gebruikersinvoer, waarbij je blijft vragen om invoer totdat deze aan bepaalde criteria voldoet.

```python
while True:
    leeftijd = input("Voer je leeftijd in (of 'q' om te stoppen): ")
    
    if leeftijd.lower() == 'q':
        break
    
    try:
        leeftijd = int(leeftijd)
        if leeftijd < 0 or leeftijd > 120:
            print("Ongeldige leeftijd. Probeer opnieuw.")
        else:
            print(f"Je leeftijd is {leeftijd}.")
            break
    except ValueError:
        print("Ongeldige invoer. Voer een getal in of 'q' om te stoppen.")
```

### 2. Spellen en Simulaties

While-loops worden vaak gebruikt in spellen en simulaties die doorgaan totdat aan een bepaalde voorwaarde wordt voldaan.

```python
import random

geheim_getal = random.randint(1, 100)
pogingen = 0

print("Raad het geheime getal tussen 1 en 100!")

while True:
    pogingen += 1
    gok = int(input("Jouw gok: "))
    
    if gok < geheim_getal:
        print("Te laag!")
    elif gok > geheim_getal:
        print("Te hoog!")
    else:
        print(f"Gefeliciteerd! Je hebt het geheime getal {geheim_getal} geraden in {pogingen} pogingen.")
        break
```

### 3. Dataverwerking

While-loops kunnen worden gebruikt voor het verwerken van gegevens totdat een bepaalde voorwaarde wordt bereikt.

```python
getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
index = 0
som = 0

while index < len(getallen) and som < 20:
    som += getallen[index]
    index += 1

print(f"Som: {som}, Aantal getallen: {index}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## For Loop vs. While Loop

| For Loop | While Loop |
|----------|------------|
| Gebruikt voor iteratie over een bekende reeks elementen | Gebruikt voor iteratie zolang aan een voorwaarde wordt voldaan |
| Aantal iteraties is meestal bekend vooraf | Aantal iteraties kan onbekend zijn |
| Eenvoudiger voor het doorlopen van reeksen, lijsten, etc. | Flexibeler voor complexe voorwaarden |
| Minder gevoelig voor oneindige lussen | Vereist zorgvuldige controle om oneindige lussen te voorkomen |

## Wanneer Gebruik je een While Loop?

Gebruik een while-loop wanneer:
- Het aantal iteraties niet vooraf bekend is.
- Je wilt itereren totdat aan een bepaalde voorwaarde wordt voldaan.
- Je gebruikersinvoer wilt valideren.
- Je een proces wilt herhalen totdat het een gewenst resultaat oplevert.

## Conclusie

While-loops zijn een krachtig hulpmiddel in Python voor het herhaaldelijk uitvoeren van code zolang aan een bepaalde voorwaarde wordt voldaan. Ze bieden flexibiliteit voor situaties waarin het aantal iteraties niet vooraf bekend is of afhankelijk is van dynamische voorwaarden. Door while-loops te combineren met statements zoals `break` en `continue`, kun je complexe iteratiepatronen creëren die voldoen aan specifieke vereisten.

In het volgende hoofdstuk zullen we oefeningen doen om je begrip van dictionaries en while-loops te versterken. 