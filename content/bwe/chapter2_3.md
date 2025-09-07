# 2.3 Celformattering in Excel

In deze les gaan we dieper in op het formatteren van cellen in Excel, waarbij we gebruik maken van een realistisch dataset van het fictieve e-commerce bedrijf TechTrends BV. We zullen leren hoe we gegevens kunnen presenteren op een manier die relevant is voor bedrijfsanalyse en besluitvorming.

## 2.3.1 Het Dataset

Open het bestand 'TechTrends_Verkopen_2023.xlsx'. Dit bestand bevat verkoopgegevens van TechTrends BV voor het jaar 2023. Laten we eerst de structuur van het dataset bekijken:

- Order_ID: Uniek identificatienummer voor elke bestelling
- Datum: De datum van de verkoop
- Product_Categorie: Het type product dat is verkocht
- Verkoopprijs: De prijs per eenheid van het verkochte product
- Aantal: Het aantal verkochte eenheden in deze bestelling
- Klant_Type: Of de klant een particuliere of zakelijke klant is
- Betaalmethode: De gebruikte betaalmethode
- Klanttevredenheid: Een score van 1-5 die de tevredenheid van de klant aangeeft
- Totale_Verkoopwaarde: De totale waarde van de bestelling

## 2.3.2 Basisformattering

Laten we beginnen met het verbeteren van de leesbaarheid van ons dataset:

1. **Kolomkoppen opmaken**:
   - Selecteer rij 1 (de kolomkoppen) door op het cijfer 1 links van de rij te klikken.
   - Ga naar het tabblad 'Start' in het lint bovenaan.
   - Klik op de knop 'Vet' (B) in de groep 'Lettertype' om de tekst vet te maken.
   - Klik op de pijl naast 'Opvulkleur' en kies een lichtblauwe kleur.
   - In de groep 'Uitlijning', klik op de knoppen voor 'Horizontaal centreren' en 'Verticaal centreren'.

2. **Randen toevoegen**:
   - Selecteer alle cellen met data door op de linkerbovenhoek van het werkblad te klikken (waar rij- en kolomkoppen elkaar kruisen).
   - Ga naar het tabblad 'Start' en zoek de knop 'Randen' in de groep 'Lettertype'.
   - Klik op de pijl naast 'Randen' en kies 'Alle randen'.

**Oefening 1**: 
Pas de opmaak van de tabel aan zoals hierboven beschreven.

## 2.3.3 Getalnotaties

Nu gaan we de getalnotaties aanpassen om de data beter leesbaar te maken:

1. **Valuta-opmaak**:
   - Selecteer de kolommen 'Verkoopprijs' en 'Totale_Verkoopwaarde' door op de kolomletters te klikken terwijl je de Ctrl-toets ingedrukt houdt.
   - Ga naar het tabblad 'Start' en zoek de groep 'Getal'.
   - Klik op de pijl naast 'Valuta' en kies de €-notatie.

2. **Datumnotatie**:
   - Selecteer de kolom 'Datum'.
   - In de groep 'Getal', klik op de pijl naast 'Korte datumnotatie' en kies een notatie die dag, maand en jaar weergeeft.

3. **Percentages**:
   - Voeg een nieuwe kolom 'Winstmarge' toe naast 'Totale_Verkoopwaarde' door rechts te klikken op de kolomkop en 'Invoegen' te kiezen.
   - In de eerste cel van deze nieuwe kolom, typ de formule: =20%*[cel met Totale_Verkoopwaarde]
   - Sleep de formule naar beneden om deze voor alle rijen toe te passen.
   - Selecteer de hele kolom en klik op het %-teken in de groep 'Getal' om de percentagenotatie toe te passen.

**Oefening 2**:
Voer de bovenstaande formattering uit en bereken de winstmarge.

## 2.3.4 Voorwaardelijke opmaak

Voorwaardelijke opmaak kan helpen om snel inzichten te krijgen in de data:

1. **Klanttevredenheid visualiseren**:
   - Selecteer de kolom 'Klanttevredenheid'.
   - Ga naar het tabblad 'Start' en klik op 'Voorwaardelijke opmaak' in de groep 'Stijlen'.
   - Kies 'Regels voor markeren van cellen' > 'Groter dan' en vul 3 in. Kies groen als opmaak.
   - Herhaal dit proces voor 'Kleiner dan of gelijk aan 2' (rood) en 'Gelijk aan 3' (geel).

2. **Hoge verkoopwaarden markeren**:
   - Selecteer de kolom 'Totale_Verkoopwaarde'.
   - Ga naar 'Voorwaardelijke opmaak' > 'Regels voor markeren van cellen' > 'Groter dan'.
   - Vul 1000 in en kies een lichtgroene opmaak.

**Oefening 3**:
Pas de voorwaardelijke opmaak toe zoals hierboven beschreven.

## 2.3.5 Aangepaste getalnotaties

Voor meer geavanceerde presentatie kunnen we aangepaste getalnotaties gebruiken:

1. **Aangepaste productcategorie-weergave**:
   - Selecteer de kolom 'Product_Categorie'.
   - Klik met de rechtermuisknop en kies 'Celeigenschappen'.
   - Ga naar het tabblad 'Getal' en kies 'Aangepast'.
   - In het veld 'Type', voer in: "Categorie: "@
   
2. **Klanttevredenheid met sterren**:
   - Selecteer de kolom 'Klanttevredenheid'.
   - Ga naar 'Celeigenschappen' > 'Getal' > 'Aangepast'.
   - In het veld 'Type', voer in: [=1]"★☆☆☆☆";[=2]"★★☆☆☆";[=3]"★★★☆☆";[=4]"★★★★☆";[=5]"★★★★★"

**Oefening 4**:
Pas deze aangepaste getalnotaties toe op de relevante kolommen.

## 2.3.6 Celstijlen en thema's

Tot slot kunnen we de algehele look van ons werkblad verbeteren:

1. Selecteer alle data en ga naar het tabblad 'Start' > 'Opmaken als tabel'. Kies een stijl die je aantrekkelijk vindt.
2. Ga naar het tabblad 'Pagina-indeling' > 'Thema's' en experimenteer met verschillende opties.

**Oefening 5**:
Pas een tabelstijl toe en kies een thema dat past bij de professionele uitstraling van TechTrends BV.

## Conclusie

In deze les heb je geleerd hoe je een realistisch bedrijfsdataset kan formatteren om het leesbaarder en informatiever te maken. Deze vaardigheden zijn cruciaal voor het presenteren van data in een bedrijfscontext en vormen de basis voor verdere analyse en visualisatie, die we in komende lessen zullen behandelen.