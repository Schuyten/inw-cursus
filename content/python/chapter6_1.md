# 6.1 Wat is een Algoritme?

Welkom bij Hoofdstuk 6! In de vorige hoofdstukken hebben we de basis van Python programmeren geleerd: variabelen, datatypes, controle structuren zoals `if` en loops (`for`, `while`), lijsten, dictionaries en functies. Nu gaan we een stap verder en kijken we naar het *ontwerpen* van oplossingen voor problemen. Dit doen we met behulp van **algoritmen**.

## Definitie van een algoritme

Wat is een algoritme precies?

> Een **algoritme** is een eindige reeks van ondubbelzinnige instructies die, startend vanuit een gegeven begintoestand, leiden tot een beoogd doel of de oplossing van een probleem.

Denk erover na als een gedetailleerd stappenplan of een recept. Het beschrijft exact *wat* je moet doen en in *welke volgorde* om een specifieke taak uit te voeren.

## Eigenschappen van een goed algoritme

Niet elk stappenplan is een goed algoritme. Goede algoritmen hebben meestal de volgende eigenschappen:

1.  **Correctheid:** Het algoritme moet het *juiste* resultaat opleveren voor alle mogelijke geldige inputs.
2.  **Eindigheid:** Het algoritme moet gegarandeerd stoppen na een eindig aantal stappen. Het mag niet in een oneindige lus terechtkomen.
3.  **Ondubbelzinnigheid (Duidelijkheid):** Elke stap in het algoritme moet precies gedefinieerd zijn; er mag geen ruimte zijn voor interpretatie over wat er moet gebeuren.
4.  **Input:** Een algoritme heeft nul of meer duidelijk gedefinieerde inputs (gegevens waarmee het start).
5.  **Output:** Een algoritme produceert één of meer duidelijk gedefinieerde outputs (het resultaat).
6.  **Efficiëntie:** Hoewel niet strikt noodzakelijk voor de *definitie*, is het in de praktijk cruciaal dat een algoritme de taak uitvoert binnen een redelijke tijd en met een redelijk gebruik van middelen (zoals geheugen). Hier gaan we in de volgende secties dieper op in.

## Voorbeelden buiten code

We gebruiken constant algoritmen in ons dagelijks leven, vaak zonder het te beseffen:

*   **Een recept:** Een kookrecept is een perfect voorbeeld. Het heeft ingrediënten (input), duidelijke stappen (instructies) en een eindgerecht (output). Als je de stappen volgt, krijg je (hopelijk) het gewenste resultaat.
*   **IKEA bouwinstructies:** De stapsgewijze handleidingen met tekeningen om meubels in elkaar te zetten zijn algoritmen.
*   **Je ochtendroutine:** Tanden poetsen, aankleden, ontbijten... De volgorde en de acties vormen een algoritme om jezelf klaar te maken voor de dag.

## Een eenvoudig programmeervoorbeeld: grootste getal vinden

Laten we een eenvoudig programmeerprobleem nemen: vind het grootste getal in een lijst. Hoe zou een algoritme hiervoor eruit kunnen zien?

**Input:** Een lijst met getallen (bijvoorbeeld `[3, 9, 1, 6, 4]`).
**Output:** Het grootste getal in de lijst.

**Algoritme (in woorden):**

1.  **Initialisatie:** Bekijk het *eerste* getal in de lijst en onthoud dit voorlopig als het "grootste getal tot nu toe".
2.  **Iteratie:** Loop door de *rest* van de getallen in de lijst (vanaf het tweede getal).
3.  **Vergelijking:** Vergelijk voor elk getal in de rest van de lijst dit getal met het "grootste getal tot nu toe".
4.  **Update:** Als het huidige getal *groter* is dan het "grootste getal tot nu toe", vergeet dan het oude "grootste getal tot nu toe" en onthoud het *huidige* getal als het nieuwe "grootste getal tot nu toe".
5.  **Einde:** Nadat je alle getallen in de lijst hebt bekeken, is het laatst onthouden "grootste getal tot nu toe" het antwoord.

Laten we dit toepassen op `[3, 9, 1, 6, 4]`:

1.  Start: "grootste tot nu toe" is `3`.
2.  Bekijk `9`: `9` is groter dan `3`. Nieuw "grootste tot nu toe" is `9`.
3.  Bekijk `1`: `1` is niet groter dan `9`. "Grootste tot nu toe" blijft `9`.
4.  Bekijk `6`: `6` is niet groter dan `9`. "Grootste tot nu toe" blijft `9`.
5.  Bekijk `4`: `4` is niet groter dan `9`. "Grootste tot nu toe" blijft `9`.
6.  Einde lijst: Het grootste getal is `9`.

Dit stappenplan voldoet aan de eisen van een algoritme: het is correct, eindig, ondubbelzinnig, heeft input en output. In Python zouden we dit implementeren met een functie en een loop, zoals we in eerdere hoofdstukken hebben gezien.

```python
def vind_grootste(getallen_lijst):
  """Vindt het grootste getal in een lijst."""
  if not getallen_lijst: # Check voor lege lijst
    return None 
  
  grootste_tot_nu_toe = getallen_lijst[0] # Stap 1: Initialisatie
  
  for getal in getallen_lijst[1:]: # Stap 2: Iteratie (vanaf tweede element)
    if getal > grootste_tot_nu_toe: # Stap 3 & 4: Vergelijking & Update
      grootste_tot_nu_toe = getal
      
  return grootste_tot_nu_toe # Stap 5: Einde

mijn_lijst = [3, 9, 1, 6, 4]
resultaat = vind_grootste(mijn_lijst)
print(f"Het grootste getal in {mijn_lijst} is {resultaat}") 
```
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

In de volgende secties gaan we dieper in op hoe we de *efficiëntie* van dit soort algoritmen kunnen beoordelen. 