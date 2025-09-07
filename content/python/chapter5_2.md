# 5.2 Oefeningen: Functies

In dit hoofdstuk gaan we oefenen met het definiëren en gebruiken van functies in Python. Functies helpen ons om onze code te structureren en herbruikbaar te maken.

## Oefening 1: Simpele Groet
* **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een functie genaamd `print_welkom` die de boodschap "Welkom bij de functie oefeningen!" print. Roep de functie daarna aan.

<pre><code># Jouw code hier

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 2: Persoonlijke Groet
* **Moeilijkheidsgraad:** ★☆☆☆☆

Schrijf een functie genaamd `groet_gebruiker` die één parameter `naam` accepteert. De functie moet een gepersonaliseerde groet printen, zoals "Hallo, [naam]!". Roep de functie aan met je eigen naam als argument.

<pre><code># Jouw code hier

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 3: Optellen met Return
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een functie genaamd `som` die twee getallen als parameters (`a` en `b`) accepteert en hun som **teruggeeft** met het `return` sleutelwoord. Roep de functie aan met twee getallen naar keuze en print het resultaat.

<pre><code># Jouw code hier

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 4: Bereken Vierkant
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een functie genaamd `bereken_vierkant` die één getal `x` als parameter neemt en het kwadraat (x * x) ervan teruggeeft. Vraag de gebruiker om een getal in te voeren, roep de functie aan met dat getal en print het resultaat.

## Oefening 5: Maximum in Lijst
* **Moeilijkheidsgraad:** ★★☆☆☆

Schrijf een functie genaamd `vind_maximum` die een lijst van getallen als parameter accepteert en het grootste getal in de lijst teruggeeft. Gebruik geen ingebouwde `max()` functie. Test de functie met een voorbeeldlijst.

*Tip:* Houd een variabele bij voor het huidige maximum en loop door de lijst.

<pre><code># Jouw code hier

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 6: Even Getallen Filteren
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een functie genaamd `filter_even_getallen` die een lijst van getallen als parameter neemt. De functie moet een **nieuwe lijst** teruggeven die alleen de even getallen uit de oorspronkelijke lijst bevat.

<pre><code># Jouw code hier

getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 7: Dobbelsteen Werpen
* **Moeilijkheidsgraad:** ★★★☆☆

Schrijf een functie genaamd `werp_dobbelsteen` die geen parameters nodig heeft. De functie moet een willekeurig getal tussen 1 en 6 (inclusief) teruggeven, wat het resultaat van een dobbelsteenworp simuleert. Roep de functie een paar keer aan en print de resultaten.

*Tip:* Je hebt de `random` module nodig. Zoek op hoe je `import random` gebruikt en welke functie je kunt gebruiken om een willekeurig geheel getal te genereren.

<pre><code># Jouw code hier

</code></pre>
<codapi-snippet sandbox="python" editor="basic"></codapi-snippet>

## Oefening 8: BMI Calculator met Functie
* **Moeilijkheidsgraad:** ★★★★☆

Herneem Oefening 6 uit Hoofdstuk 2.4 (BMI Calculator). Herschrijf het programma zodat de BMI-berekening in een aparte functie `bereken_bmi(gewicht, lengte)` gebeurt. Deze functie neemt gewicht (kg) en lengte (m) als parameters en geeft de berekende BMI terug. Het hoofdprogramma vraagt de gebruiker om invoer, roept de functie aan en print het resultaat.

## Oefening 9: Temperatuur Converter met Functies
* **Moeilijkheidsgraad:** ★★★★☆

Herneem Oefening 7 uit Hoofdstuk 2.4 (Temperatuur Converter). Herschrijf het programma met twee functies:
1.  `fahrenheit_naar_celsius(temp_f)`: Neemt temperatuur in Fahrenheit en geeft Celsius terug.
2.  `celsius_naar_fahrenheit(temp_c)`: Neemt temperatuur in Celsius en geeft Fahrenheit terug.

Het hoofdprogramma vraagt de gebruiker welke conversie hij wil doen en de temperatuur, roept de juiste functie aan en print het resultaat. 