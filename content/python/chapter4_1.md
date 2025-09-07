# 4.1 Lijsten

In Python zijn lijsten een van de meest gebruikte datastructuren. Een lijst is een geordende verzameling van items die eventueel kunnen worden gewijzigd. Lijsten stellen je in staat om meerdere gerelateerde waarden in één enkele variabele op te slaan.

## Kenmerken van Lijsten

- **Geordende Verzameling:** Lijsten bewaren elementen in een specifieke volgorde. Elk element heeft een unieke positie, of index, binnen de lijst.
- **Indexering:** Elementen in een lijst kunnen worden benaderd via hun index. In Python begint de indexering bij **0**.
- **Veranderlijk (Mutable):** Lijsten zijn veranderlijke datastructuren; dit betekent dat hun inhoud kan worden aangepast na creatie door elementen toe te voegen, te verwijderen of te wijzigen.
- **Heterogene Elementen:** Een lijst kan elementen van verschillende datatypen bevatten, zoals getallen, strings, booleans, of zelfs andere lijsten.

## Basisbewerkingen op Lijsten

### Aanmaken van een Lijst

Een lijst kan worden aangemaakt door elementen binnen vierkante haken `[]` te plaatsen, gescheiden door komma's.


### Een lege lijst

```python
lege_lijst = []
```

### Een lijst met elementen

```python
cijfers = [1, 2, 3, 4, 5]
```

### Een lijst met verschillende datatypes

```python
lijst = [1, "Hallo", True, 3.14, [1, 2, 3]]
```

### Toegang tot Elementen

Elementen kunnen worden opgevraagd via hun index.

```python
cijfers = [1, 2, 3, 4, 5]
eerste_cijfer = cijfers[0]  # Geeft 1
derde_cijfer = cijfers[2]  # Geeft 3
laatste_cijfer = cijfers[-1]  # Geeft 5
```


### Wijzigen van Elementen

Je kunt de waarde van een element wijzigen door de index te specificeren.

```python
cijfers = [1, 2, 3, 4, 5]
cijfers[0] = 10  # Wijzigt het eerste element naar 10
print(cijfers)  # Output: [10, 2, 3, 4, 5]
```


### Elementen Toevoegen

- **Aan het Einde Toevoegen:**
  
  ```python
  cijfers.append(6)
  # Nu is cijfers: [10, 2, 3, 4, 5, 6]
  ```

- **Op een Specifieke Positie Invoegen:**
  
  ```python
  cijfers.insert(1, 15)  # Voegt 15 in op index 1
  # Nu is cijfers: [10, 15, 2, 3, 4, 5, 6]
  ```

### Elementen Verwijderen

- **Verwijderen op Waarde:**
  
  ```python
  cijfers.remove(15)
  # Nu is cijfers: [10, 2, 3, 4, 5, 6]
  ```

- **Verwijderen op Index:**
  
  ```python
  verwijderd_element = cijfers.pop(0)
  print(verwijderd_element)  # Output: 10
  # Nu is cijfers: [2, 3, 4, 5, 6]
  ```

- **Laatste Element Verwijderen:**
  
  ```python
  cijfers.pop()
  # Nu is cijfers: [2, 3, 4, 5]
  ```

### Lengte van een Lijst

Gebruik de `len()` functie om het aantal elementen in een lijst te bepalen.

```python
cijfers = [7, 23, 3, 100, 29]
lengte = len(cijfers)  # output: 5
```

### Lijsten samenvoegen

Twee lijsten kunnen worden samengevoegd met de `+` operator.

```python
lijst_1 = [1, 2, 3]
lijst_2 = [4, 5, 6]
lijst_3 = lijst_1 + lijst_2  
print(lijst_3) # output: [1, 2, 3, 4, 5, 6]
```


## Belangrijke Concepten

### Mutable vs. Immutable

- **Mutable (Veranderlijk):** Lijsten zijn veranderlijk; je kunt hun inhoud wijzigen na creatie.
- **Immutable (Onveranderlijk):** Datastructuren zoals tuplen zijn onveranderlijk; eenmaal gecreëerd, kunnen ze niet worden gewijzigd.

### Geneste Lijsten

Lijsten kunnen andere lijsten bevatten, wat leidt tot geneste of multidimensionale structuren.

```python
genest = [[1, 2], [3, 4], [5, 6]]
print(genest[0]) # Output: [1, 2]
print(genest[0][1]) # Output: 2
```


## Toepassingen van Lijsten

- **Dataopslag:** Voor het opslaan van verzamelingen van gegevens, zoals lijsten van namen, nummers, of objecten.
- **Iteratie en Manipulatie:** Herhaaldelijk uitvoeren van bewerkingen op elk element.
- **Algoritmen en Datastructuren:** Implementeren van stacks, queues, grafen, en andere datastructuren.

## Best Practices

- **Consistente Datatypen:** Hoewel lijsten heterogeen kunnen zijn, is het vaak nuttig om elementen van hetzelfde type te gebruiken voor consistentie.
- **Vermijd Wijzigingen tijdens Iteratie:** Pas op met het toevoegen of verwijderen van elementen terwijl je over een lijst iterereert.
- **Gebruik Betekenisvolle Namen:** Geef lijsten namen die hun inhoud duidelijk beschrijven.

## Conclusie

Lijsten zijn een essentieel onderdeel van programmeren en vormen de basis voor veel complexere datastructuren en algoritmen. Ze bieden flexibiliteit en gemak bij het opslaan en manipuleren van groepen gegevens. Een goed begrip van hoe lijsten werken en hoe je ze effectief kunt gebruiken, is cruciaal voor succesvolle softwareontwikkeling.

Hoewel we in dit hoofdstuk Python hebben gebruikt om de concepten te illustreren, gelden deze principes voor bijna alle programmeertalen. Het is belangrijk om te begrijpen dat de specifieke syntax kan verschillen, maar de onderliggende ideeën blijven geldig.
