# 2.4 Oefeningen: Variabelen en Datatypes

In dit hoofdstuk gaan we de concepten die we hebben geleerd in de vorige twee hoofdstukken in de praktijk brengen. De oefeningen variëren in moeilijkheidsgraad, zodat er voor elke leerling uitdagende opdrachten zijn. Bij sommmige oefeningen, waarbij input gevraagd is, zal geen code-editor beschikbaar zijn. In dat geval kan je de oefeningen in een nieuw `.py`-bestand in VS Code of een andere teksteditor uitwerken. Door de code te **runnen** zal je de mogelijkheid krijgen om input te geven en de output te verifiëren.

Je kan best een bestand aanmaken en de oefeningen uitwerken in VS Code, zodat je ze kan opslaan.

## Oefening 1: Basis variabelen
• Moeilijkheidsgraad: ★☆☆☆☆

Maak drie variabelen: `voornaam`, `achternaam`, en `leeftijd`. Wijs er waarden aan toe en gebruik dan een f-string om een zin te maken die deze informatie bevat. Print de zin.

Verwachte output (met jouw gegevens):
Hallo, ik ben [voornaam] [achternaam] en ik ben [leeftijd] jaar oud.

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 2: String manipulatie
• Moeilijkheidsgraad: ★★☆☆☆

Maak een variabele `zin` met de waarde "Python programmeren is leuk!". Gebruik string methoden om:
1. De zin in hoofdletters te zetten
2. Het woord "leuk" te vervangen door "geweldig"
3. Het aantal karakters in de nieuwe zin te tellen

Print de resultaten van elke stap.

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 3: Rekenen met variabelen
• Moeilijkheidsgraad: ★★☆☆☆

Je hebt €50 in je portemonnee. Een boek kost €12,50 en een tijdschrift kost €3,75. Bereken hoeveel geld je overhoudt als je 2 boeken en 3 tijdschriften koopt. Gebruik variabelen voor alle waarden en print het resultaat met twee decimalen.

Verwachte output: Na het kopen van 2 boeken en 3 tijdschriften heb ik nog €13.75 over.

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 4: Type conversie
• Moeilijkheidsgraad: ★★★☆☆

Een gebruiker geeft zijn geboortejaar als tekst in: ```"2001"```. Bereken hun leeftijd in het jaar 2030. Zorg ervoor dat je rekening houdt met type conversie.

Output: In 2030 zul je 29 jaar oud zijn.

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 5: Boolean logica
• Moeilijkheidsgraad: ★★★☆☆

Maak twee variabelen `a` en `b` en wijs er willekeurige gehele getallen aan toe. Schrijf vervolgens code die het volgende print:
- "a is groter dan b" als a groter is dan b
- "b is groter dan a" als b groter is dan a
- "a en b zijn gelijk" als ze gelijk zijn

Gebruik hiervoor if-statements (die we in een later hoofdstuk in detail zullen bespreken).

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 6: BMI Calculator
• Moeilijkheidsgraad: ★★★☆☆

Schrijf een programma dat de Body Mass Index (BMI) berekent. Vraag de gebruiker om hun gewicht (in kg) en lengte (in meters) in te voeren. De formule voor BMI is: gewicht / (lengte * lengte). Print het resultaat met één decimaal.

Voorbeeld output: Je BMI is 24.5

## Oefening 7: Temperatuur Converter
• Moeilijkheidsgraad: ★★★☆☆

Schrijf een programma dat Fahrenheit naar Celsius converteert. Vraag de gebruiker om een temperatuur in Fahrenheit in te voeren en converteer deze naar Celsius. De formule is: (F - 32) * 5/9 = C. Print het resultaat met één decimaal.

Tip: Je kunt de uitkomst verifiëren door online een weersite te raadplegen en de temperatuur in Fahrenheit om te zetten naar Celsius.

Voorbeeld output: 75°F is gelijk aan 23.9°C

<pre><code># Jouw code hier

</code></pre>

<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 8: Creatieve string formatting
• Moeilijkheidsgraad: ★★★★☆

Schrijf een programma dat een "naamplaatje" genereert. Vraag de gebruiker om hun voornaam, achternaam en functietitel. Maak vervolgens een naamplaatje met de volgende opmaak:

```python
+----------------------+
|      JOHN DOE        |
|    Python Expert     |
+----------------------+
```

Zorg ervoor dat de naam altijd gecentreerd is op de bovenste regel, ongeacht de lengte van de naam. De functietitel moet gecentreerd zijn op de tweede regel. De breedte van het naamplaatje moet dynamisch aangepast worden aan de langste regel (naam of functietitel).

Tip: Gebruik string formatting methoden en de `len()` functie.

## Oefening 9: Valuta Converter
• Moeilijkheidsgraad: ★★★★☆

Schrijf een programma dat euro's naar dollars converteert (en vice versa). Vraag de gebruiker om het bedrag, de bronvaluta (EUR of USD) en de doelvaluta. Gebruik de huidige wisselkoers (je kunt deze opzoeken of een vaste waarde gebruiken, bijvoorbeeld 1 EUR = 1.18 USD). Print het geconverteerde bedrag met twee decimalen.

De concepten die je nodig hebt om deze oefening op te lossen zijn condities en `if`-statements, en worden later in de cursus besproken. Je kan ze alvast opzoeken als je deze oefening wil maken.

Voorbeeld output: 100 EUR is gelijk aan 118.00 USD
