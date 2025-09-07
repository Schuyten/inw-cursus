# 2.4 Excel Oefeningen: Toepassing van Basisvaardigheden

In dit hoofdstuk gaan we de kennis die je hebt opgedaan in de voorgaande lessen toepassen op een nieuwe dataset. We zullen werken met gegevens van TechTrends BV's voorraad- en verkoopbeheer voor het jaar 2023.

## 2.4.1 De Dataset

Open het bestand 'TechTrends_Voorraad_2023.xlsx'. Dit bestand bevat de volgende kolommen:
- Datum: De datum van de verkoop
- Product: Het verkochte product
- Leverancier: De leverancier van het product
- Inkoopprijs: De prijs waarvoor TechTrends het product heeft ingekocht
- Verkoopprijs: De prijs waarvoor TechTrends het product heeft verkocht
- Aantal_Verkocht: Het aantal verkochte eenheden
- Vestiging: De vestiging waar de verkoop plaatsvond

## 2.4.2 Basisformattering en Gegevensorganisatie

**Oefening 1**: 
1. Pas basisformattering toe op de tabel:
   - Maak de kolomkoppen vet en geef ze een lichtblauwe achtergrond.
   - Voeg randen toe aan alle cellen met data.
   - Pas de juiste getalnotaties toe (valuta voor prijzen, gehele getallen voor Aantal_Verkocht, datumnotatie voor Datum).

2. Sorteer de data op Datum (oudste naar nieuwste) en dan op Product (alfabetisch).

## 2.4.3 Berekeningen en Functies

**Oefening 2**:
1. Voeg een kolom 'Winst' toe en bereken de winst per verkoop (Verkoopprijs - Inkoopprijs) * Aantal_Verkocht.
2. Gebruik de SOM-functie om de totale winst te berekenen.
3. Gebruik de GEMIDDELDE-functie om de gemiddelde verkoopprijs per product te berekenen.
4. Gebruik de MAX- en MIN-functies om de hoogste en laagste winst per verkoop te vinden.

## 2.4.4 Voorwaardelijke Opmaak

**Oefening 3**:
1. Pas voorwaardelijke opmaak toe op de 'Winst' kolom:
   - Groen voor winst boven €1000
   - Rood voor verlies (negatieve winst)
   - Geel voor winst tussen €0 en €1000
2. Gebruik kleurenschalen om de 'Aantal_Verkocht' kolom visueel weer te geven.

## 2.4.5 Filteren en Sorteren

**Oefening 4**:
1. Filter de data om alleen verkopen in Amsterdam en Rotterdam te tonen.
2. Sorteer deze gefilterde data op 'Verkoopprijs' van hoog naar laag.
3. Gebruik vervolgens een aangepast filter om alleen producten te tonen die meer dan 20 keer zijn verkocht.

## 2.4.6 Geavanceerde Functies

**Oefening 5**:
1. Gebruik de ALS-functie om een nieuwe kolom 'Prestatie' te maken:
   - "Goed" als de winst meer dan 30% van de inkoopprijs is
   - "Gemiddeld" als de winst tussen 10% en 30% van de inkoopprijs is
   - "Slecht" als de winst minder dan 10% van de inkoopprijs is
2. Gebruik de VERTICAAL.ZOEKEN-functie om een aparte tabel te maken met de best presterende producten (hoogste totale winst) voor elke vestiging.

## 2.4.7 Celverwijzingen en Autofill

**Oefening 6**:
1. Maak een nieuwe kolom 'Winstmarge' en bereken deze als (Winst / (Inkoopprijs * Aantal_Verkocht)) * 100%.
2. Gebruik absolute celverwijzingen om een kolom 'Verschil met Gemiddelde Prijs' te maken, die het verschil berekent tussen de verkoopprijs van elk product en de gemiddelde verkoopprijs van alle producten.
3. Gebruik de Autofill-functie om deze formules naar alle rijen te kopiëren.

## Conclusie

Door deze oefeningen uit te voeren, heb je de belangrijkste Excel-vaardigheden geoefend die je hebt geleerd in de voorgaande hoofdstukken. Je hebt gewerkt met een realistisch bedrijfsdataset en technieken toegepast die vaak worden gebruikt in bedrijfsanalyse. In de volgende hoofdstukken zullen we voortbouwen op deze kennis en meer geavanceerde concepten introduceren.