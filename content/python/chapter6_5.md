# 6.5 Oefeningen: Analyse en Vergelijking

Nu is het tijd om zelf aan de slag te gaan met het analyseren van de tijdcomplexiteit van Python code.

## Oefening 1: analyseer de code snippets

Bepaal de tijdcomplexiteit (met Big O notatie) van de volgende codefragmenten. Ga ervan uit dat `n` de grootte van de input is (bijvoorbeeld de lengte van een lijst `lst`). Leg kort uit waarom.

**Snippet A:**
```python
def snippet_a(n):
    totaal = 0
    for i in range(n):
        totaal += i
    print(totaal)
```
*Jouw analyse:* ...

**Snippet B:**
```python
def snippet_b(lst):
    if len(lst) > 0:
        print(lst[0])
    else:
        print("Lege lijst")
```
*Jouw analyse:* ...

**Snippet C:**
```python
def snippet_c(n):
    for i in range(n):
        for j in range(n):
            print(i * j)
```
*Jouw analyse:* ...

**Snippet D:**
```python
def snippet_d(lst):
    for item in lst:
        print(item)
    for item in lst:
        print(item)
```
*Jouw analyse:* ...

**Snippet E:**
```python
def snippet_e(n):
    i = 1
    while i < n:
        print(i)
        i *= 2 # Let op: i verdubbelt elke keer
```
*Jouw analyse (denk goed na!):* ...

## Oefening 2: zoeken naar een element

Bekijk de volgende functie die controleert of een specifiek element `zoek_waarde` aanwezig is in een lijst `data`.

```python
def lineair_zoeken(data, zoek_waarde):
    gevonden = False
    for element in data:
        if element == zoek_waarde:
            gevonden = True
            break # Stop zodra gevonden
    return gevonden

mijn_lijst = list(range(1000))

print(lineair_zoeken(mijn_lijst, 500))
print(lineair_zoeken(mijn_lijst, 1001))
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

1.  Wat is de tijdcomplexiteit van deze `lineair_zoeken` functie in het **worst-case** scenario (het element staat niet in de lijst of staat helemaal achteraan)? Druk dit uit in Big O notatie en leg uit waarom.
2.  Wat is de tijdcomplexiteit in het **best-case** scenario (het element staat vooraan in de lijst)?
3.  Is de Big O notatie die we typisch gebruiken gebaseerd op het best-case of worst-case scenario? Waarom denk je dat dit zo is?

## Oefening 3: vergelijken van oplossingen - duplicaten vinden

Stel, je wilt controleren of een lijst duplicaten bevat (dus of er een element minstens twee keer voorkomt).

Hier zijn twee mogelijke implementaties:

**Oplossing 1: Geneste Lussen**
```python
def heeft_duplicaten_v1(lst):
    n = len(lst)
    for i in range(n):
        for j in range(i + 1, n): # Vergelijk met elementen na i
            if lst[i] == lst[j]:
                return True # Duplicaat gevonden
    return False # Geen duplicaten gevonden

lijst1 = [1, 2, 3, 4, 5]
lijst2 = [1, 2, 3, 4, 2]

print(f"Lijst 1 duplicaten? {heeft_duplicaten_v1(lijst1)}")
print(f"Lijst 2 duplicaten? {heeft_duplicaten_v1(lijst2)}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

**Oplossing 2: Gebruik van een Set**
```python
def heeft_duplicaten_v2(lst):
    gezien = set() # Een set kan alleen unieke elementen bevatten
    for element in lst:
        if element in gezien: # Zoeken in een set is gemiddeld O(1)
            return True # Duplicaat gevonden
        gezien.add(element) # Toevoegen aan set is gemiddeld O(1)
    return False # Geen duplicaten gevonden

lijst1 = [1, 2, 3, 4, 5]
lijst2 = [1, 2, 3, 4, 2]

print(f"Lijst 1 duplicaten? {heeft_duplicaten_v2(lijst1)}")
print(f"Lijst 2 duplicaten? {heeft_duplicaten_v2(lijst2)}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

1.  Analyseer de tijdcomplexiteit van `heeft_duplicaten_v1` met Big O notatie. Leg je redenering uit.
2.  Analyseer de tijdcomplexiteit van `heeft_duplicaten_v2` met Big O notatie. Houd rekening met de complexiteit van operaties op sets (`in` en `add` zijn gemiddeld O(1)). Leg je redenering uit.
3.  Welke oplossing is efficiënter voor grote lijsten? Waarom? 