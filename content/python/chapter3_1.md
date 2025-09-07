# 3.1 Vergelijkingen en Voorwaarden

In het echte leven nemen we voortdurend beslissingen op basis van voorwaarden: "Als het regent, neem ik een paraplu mee", "Als het warmer is dan 25 graden, ga ik zwemmen". In Python kunnen we onze programma's ook beslissingen laten nemen met behulp van vergelijkingen en voorwaarden.

## Vergelijkingsoperatoren

Python gebruikt verschillende operatoren om waarden te vergelijken. Het resultaat van een vergelijking is altijd een Boolean (`True` of `False`).

| Operator | Betekenis | Voorbeeld | Resultaat |
|----------|-----------|-----------|-----------|
| `==` | Is gelijk aan | `5 == 5` | `True` |
| `!=` | Is niet gelijk aan | `5 != 3` | `True` |
| `>` | Is groter dan | `5 > 3` | `True` |
| `<` | Is kleiner dan | `5 < 3` | `False` |
| `>=` | Is groter dan of gelijk aan | `5 >= 5` | `True` |
| `<=` | Is kleiner dan of gelijk aan | `5 <= 3` | `False` |

Laten we deze operatoren in actie zien:

```python
x = 5
y = 3

print(x == y)  # False
print(x != y)  # True
print(x > y)   # True
print(x < y)   # False
print(x >= y)  # True
print(x <= y)  # False
```


<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Vergelijken van Verschillende Types

### Getallen Vergelijken

Je kunt verschillende types getallen met elkaar vergelijken:

```python
print(5 > 3.14)      # True
print(10 >= 10.0)    # True
print(-1 < 0)        # True
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Meerdere Voorwaarden Combineren

Je kunt meerdere voorwaarden combineren met:
- `and`: beide voorwaarden moeten waar zijn
- `or`: minstens één voorwaarde moet waar zijn
- `not`: keert een voorwaarde om

```python
leeftijd = 16
heeft_toestemming = True

print(leeftijd >= 16 and heeft_toestemming)    # True
print(leeftijd < 16 or heeft_toestemming)      # True
print(not heeft_toestemming)                   # False
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Voorbeelden met `and`

Beide voorwaarden moeten `True` zijn om `True` te krijgen:

```python
x = 5
print(x > 0 and x < 10)    # True (x ligt tussen 0 en 10)
print(x < 0 and x < 10)    # False (x is niet kleiner dan 0)
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Voorbeelden met `or`

Minstens één voorwaarde moet `True` zijn om `True` te krijgen:

```python
leeftijd = 15
lengte = 175

print(leeftijd >= 18 or lengte >= 170)    # True (lang genoeg)
print(leeftijd >= 18 or lengte >= 180)    # False (niet oud en niet lang genoeg)
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening: Vergelijkingen

Probeer te voorspellen wat het resultaat zal zijn van deze vergelijkingen voordat je ze uitvoert:

```python
# Test 1: Getallen
a = 10
b = 5
c = 10.0
print(a == c)    # Wat denk je?
print(a > b)     # Wat denk je?

# Test 2: Combinaties
x = 7
print(x > 5 and x < 10)    # Wat denk je?
print(x < 5 or x > 8)      # Wat denk je?
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In het volgende hoofdstuk gaan we leren hoe we deze voorwaarden kunnen gebruiken om ons programma verschillende dingen te laten doen op basis van deze vergelijkingen!
