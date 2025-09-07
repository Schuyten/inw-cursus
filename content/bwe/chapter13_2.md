# Introductie tot Tabellen en Gegevensorganisatie met Excel

In dit hoofdstuk leren we de basisprincipes van gegevensorganisatie met behulp van Microsoft Excel. We zullen een eenvoudige tabel met leerlinggegevens gebruiken om de verschillende concepten te illustreren.

## Basisprincipes van Excel-spreadsheets

Excel is een krachtig programma voor het organiseren, analyseren en visualiseren van gegevens. Een Excel-bestand bestaat uit één of meerdere werkbladen, die elk een raster van cellen bevatten.

## Maken en beheren van tabellen

Laten we beginnen met een eenvoudige tabel met leerlinggegevens:

| Leerlingnaam   | Wiskunde | Nederlands | Engels | Geschiedenis | Gemiddelde |
|----------------|----------|------------|--------|--------------|------------|
| Jan Janssen    | 7.5      | 6.8        | 8.2    | 7.0          |            |
| Piet Pietersen | 6.2      | 5.5        | 6.0    | 6.3          |            |
| Marie de Vries | 8.8      | 9.0        | 8.5    | 8.7          |            |
| Sofie de Jong  | 5.8      | 7.2        | 6.5    | 6.8          |            |
| Ahmed Boulahri | 7.0      | 7.8        | 7.3    | 7.5          |            |

## Rijen, kolommen, cellen en gegevenstypen

- **Rijen**: Horizontale reeksen cellen, hier vertegenwoordigen ze individuele leerlingen.
- **Kolommen**: Verticale reeksen cellen, hier vertegenwoordigen ze verschillende vakken en het gemiddelde.
- **Cellen**: Individuele gegevenspunten waar rijen en kolommen elkaar kruisen.
- **Gegevenstypen**: In deze tabel hebben we voornamelijk te maken met tekst (namen) en getallen (cijfers).

## Basisformules en functies voor gegevensinvoer- en manipulatie

Laten we het gemiddelde berekenen voor elke leerling:

1. Selecteer cel F2 (de eerste cel in de Gemiddelde-kolom).
2. Voer de volgende formule in: `=GEMIDDELDE(B2:E2)`
3. Druk op Enter. Je zou nu het gemiddelde voor Jan Janssen moeten zien.
4. Kopieer deze formule naar de andere cellen in de Gemiddelde-kolom.

De formule `GEMIDDELDE` berekent het gemiddelde van een reeks getallen. `B2:E2` is de reeks cellen waarover het gemiddelde wordt berekend.

## Sorteren en filteren van gegevens

Je kunt de gegevens sorteren om ze beter te analyseren:

1. Selecteer de hele tabel.
2. Ga naar het tabblad "Gegevens" en klik op "Sorteren".
3. Kies "Gemiddelde" als kolom en "Van hoog naar laag" als sorteervolgorde.

Je kunt ook filteren om alleen bepaalde gegevens te zien:

1. Selecteer de hele tabel.
2. Ga naar het tabblad "Gegevens" en klik op "Filter".
3. Klik op het pijltje in de kolomkop "Wiskunde" en selecteer alleen cijfers boven de 7.

## Basisprincipes van gegevensvisualisatie met grafieken

Laten we een eenvoudige grafiek maken om de prestaties van de leerlingen te visualiseren:

1. Selecteer de hele tabel.
2. Ga naar het tabblad "Invoegen" en kies voor een kolomdiagram.
3. Excel zal automatisch een grafiek genereren die de cijfers voor elk vak per leerling weergeeft.

Je kunt de grafiek aanpassen door titels toe te voegen, kleuren te wijzigen, of het type grafiek te veranderen.

Door deze basisprincipes te beheersen, kun je Excel effectief gebruiken om gegevens te organiseren, te analyseren en te presenteren. In de volgende hoofdstukken zullen we zien hoe deze concepten zich vertalen naar meer geavanceerde systemen voor gegevensbeheer.