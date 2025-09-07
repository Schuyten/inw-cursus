# 5.1 Functies

In de vorige hoofdstukken hebben we code geschreven die stap voor stap wordt uitgevoerd. Naarmate onze programma's complexer worden, merken we dat we soms dezelfde stukken code meerdere keren moeten schrijven. Ook kunnen lange programma's onoverzichtelijk worden. Functies bieden hier een oplossing!

## Wat zijn Functies?

Een functie is een **blok code** dat een specifieke taak uitvoert en een naam heeft. Je kunt een functie zien als een mini-programma binnen je hoofdprogramma. Het grote voordeel is dat je dit blok code kunt **hergebruiken** door simpelweg de naam van de functie aan te roepen. Dit maakt je code:

- **Modulair:** Je kunt complexe problemen opdelen in kleinere, beheersbare taken (functies).
- **Herbruikbaar:** Je hoeft dezelfde logica niet telkens opnieuw te schrijven (DRY - Don't Repeat Yourself).
- **Leesbaarder:** Goed benoemde functies maken duidelijk wat een stuk code doet.
- **Onderhoudbaar:** Als je een aanpassing moet maken in de logica, hoef je dit maar op één plek te doen (in de functie).

## Een Functie Definiëren

In Python definieer je een functie met het `def` sleutelwoord, gevolgd door de functienaam, haakjes `()`, en een dubbele punt `:`. De code die bij de functie hoort, moet ingesprongen zijn.

```python
def groet():
  print("Hallo daar!")
```

Dit definieert een functie genaamd `groet`. De code binnen de functie (`print("Hallo daar!")`) wordt pas uitgevoerd als we de functie aanroepen.

## Een Functie Aanroepen

Om de code in een functie uit te voeren, roep je de functie aan door haar naam te typen gevolgd door haakjes `()`.

```python
def begroet():
  print("Hallo daar!")

# Roep de functie aan
begroet()
begroet() # Je kunt de functie meerdere keren aanroepen
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Parameters en Argumenten

Functies kunnen gegevens ontvangen om mee te werken. Deze gegevens geef je mee via **parameters** (variabelen tussen de haakjes bij de definitie) en **argumenten** (de waarden die je meegeeft bij het aanroepen).

```python
def begroet_persoon(naam): # 'naam' is een parameter
  print(f"Hallo, {naam}!")

begroet_persoon("Alice") # "Alice" is een argument
begroet_persoon("Bob")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Een functie kan meerdere parameters hebben, gescheiden door komma's.

```python
def tel_op(getal1, getal2):
  som = getal1 + getal2
  print(f"De som van {getal1} en {getal2} is {som}")

tel_op(5, 3)
tel_op(10, -2)
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Return Waarden

Functies kunnen niet alleen acties uitvoeren (zoals printen), maar ook een resultaat **teruggeven** aan het deel van het programma dat de functie aanriep. Dit doe je met het `return` sleutelwoord.

```python
def tel_op(getal1, getal2):
  som = getal1 + getal2
  return som # Geef de berekende som terug

resultaat = tel_op(10, 5) # Vang de return waarde op in een variabele
print(f"Het resultaat is: {resultaat}")
print(f"Nog een berekening: {tel_op(1, 2)}") # Gebruik de return waarde direct
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Zodra een `return` statement wordt uitgevoerd, stopt de functie onmiddellijk en wordt de opgegeven waarde teruggestuurd. Een functie kan ook meerdere waarden teruggeven (meestal als een tuple).

```python
def bereken_omtrek_en_oppervlakte(breedte, hoogte):
  omtrek = 2 * (breedte + hoogte)
  oppervlakte = breedte * hoogte
  return omtrek, oppervlakte # Geeft een tuple terug

afmetingen = bereken_omtrek_en_oppervlakte(5, 4)
print(f"Omtrek en oppervlakte: {afmetingen}") # Output: Omtrek en oppervlakte: (18, 20)
print(f"Omtrek: {afmetingen[0]}")
print(f"Oppervlakte: {afmetingen[1]}")

# Je kunt de waarden ook direct uitpakken
o, opp = bereken_omtrek_en_oppervlakte(10, 2)
print(f"Omtrek: {o}, Oppervlakte: {opp}")
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Scope van Variabelen

Variabelen die binnen een functie worden gedefinieerd, zijn **lokaal** voor die functie. Ze bestaan alleen binnen die functie en zijn niet toegankelijk van buitenaf. Variabelen die buiten alle functies worden gedefinieerd, zijn **globaal**.

```python
globale_var = "Ik ben globaal"

def mijn_functie():
  lokale_var = "Ik ben lokaal"
  print(lokale_var)
  print(globale_var) # Globale variabelen zijn wel toegankelijk binnen functies

mijn_functie()

print(globale_var)
# print(lokale_var) # Dit zou een NameError geven, lokale_var bestaat hier niet
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Het is over het algemeen beter om gegevens aan functies door te geven via parameters en resultaten terug te geven via `return` dan om te vertrouwen op globale variabelen.

## Docstrings

Het is een goede gewoonte om je functies te documenteren met een **docstring**. Dit is een string literal die direct na de `def` regel komt en beschrijft wat de functie doet.

```python
def tel_op(getal1, getal2):
  \"\"\"
  Deze functie telt twee getallen bij elkaar op.

  Args:
    getal1: Het eerste getal.
    getal2: Het tweede getal.

  Returns:
    De som van getal1 en getal2.
  \"\"\"
  som = getal1 + getal2
  return som

# Docstrings kunnen vaak automatisch worden weergegeven door programmeertools
# help(tel_op) # In een Python interpreter
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

Functies zijn een essentieel onderdeel van programmeren in Python (en vele andere talen). Ze helpen je om je code georganiseerd, efficiënt en leesbaar te houden. In het volgende hoofdstuk gaan we oefenen met het schrijven en gebruiken van functies. 