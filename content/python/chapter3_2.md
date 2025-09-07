# 3.2 If-statements

Nu we weten hoe we voorwaarden kunnen maken met vergelijkingsoperatoren, kunnen we ons programma beslissingen laten nemen met behulp van if-statements.

## Het if-statement

Een if-statement laat je code uitvoeren als een bepaalde voorwaarde waar (`True`) is. De syntax is als volgt:

```python
if voorwaarde:
    # code die wordt uitgevoerd als de voorwaarde waar is
```

Let op de dubbele punt (`:`) na de voorwaarde en de inspringing van de code die moet worden uitgevoerd!

### Voorbeeld:

```python
leeftijd = 16

if leeftijd >= 16:
    print("Je mag een bromfiets besturen!")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Het if-else statement

Vaak wil je iets anders doen als de voorwaarde niet waar is. Daarvoor gebruik je een if-else statement:

```python
if voorwaarde:
    # code die wordt uitgevoerd als de voorwaarde waar is
else:
    # code die wordt uitgevoerd als de voorwaarde niet waar is
```

### Voorbeeld:

```python
leeftijd = 15

if leeftijd >= 16:
    print("Je mag een bromfiets besturen!")
else:
    print("Je moet nog even wachten met bromfietsen.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Voorbeelden uit de Praktijk

### Voorbeeld 1: Temperatuur

```python
temperatuur = 24

if temperatuur > 25:
    print("Het is warm, vergeet niet om water te drinken!")
else:
    print("De temperatuur is aangenaam.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

### Voorbeeld 2: Punten voor een test

```python
punten = 75

if punten >= 50:
    print("Gefeliciteerd, je bent geslaagd!")
else:
    print("Helaas, je moet de test opnieuw doen.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Geneste if-statements

Je kunt if-statements ook in elkaar nesten (een if-statement binnen een andere if-statement):

```python
leeftijd = 17
heeft_rijbewijs = False

if leeftijd >= 18:
    if heeft_rijbewijs:
        print("Je mag autorijden!")
    else:
        print("Je moet eerst je rijbewijs halen.")
else:
    print("Je moet nog wachten tot je 18 bent.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Meerdere Voorwaarden Combineren

Je kunt meerdere voorwaarden combineren met `and` en `or`:

```python
leeftijd = 19
heeft_ticket = True
heeft_id = True

if leeftijd >= 18 and heeft_ticket and heeft_id:
    print("Welkom bij het evenement!")
else:
    print("Sorry, je hebt geen toegang.")
```

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening: Toegang tot Pretpark

Schrijf een programma dat bepaalt of iemand in een attractie mag. De regels zijn:
- Je moet minstens 12 jaar oud zijn
- Je moet minstens 1.50m lang zijn

Vraag de gebruiker om hun leeftijd en lengte, en print dan of ze in de attractie mogen.

<pre><code># Jouw code hier
</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Tips voor het Schrijven van if-statements

1. **Inspringing is belangrijk**: Python gebruikt inspringing of indentatie om te weten welke code bij welk blok hoort.
2. **Vergeet de dubbele punt niet**: Na elke if of else moet een dubbele punt komen.
3. **Houd het leesbaar**: Als je veel voorwaarden hebt, probeer ze dan op te splitsen in kleinere, duidelijke stukken.
4. **Test je voorwaarden**: Zorg dat je programma werkt voor alle mogelijke situaties.

In het volgende hoofdstuk gaan we oefenen met alles wat we hebben geleerd over voorwaarden en if-statements!
