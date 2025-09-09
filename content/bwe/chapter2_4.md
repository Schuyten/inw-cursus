## Hoofdstuk 2.4: Databases in de praktijk: voorbeelden

De theorie over databases wordt pas echt duidelijk wanneer we zien hoe ze in de praktijk worden toegepast. In dit hoofdstuk bekijken we concrete voorbeelden van hoe een typisch bedrijf—een webshop genaamd "TechTrends BV"—zijn gegevens zou structureren in een relationele database.

### De Datasets voor TechTrends BV

Voor de komende hoofdstukken over SQL gebruiken we een set van vier CSV-bestanden die de database van TechTrends BV voorstellen. Je kunt ze hier downloaden om de data te importeren in een database-tool.

- [Download techtrends_klanten.csv](/downloads/bwe/techtrends_klanten.csv)
- [Download techtrends_producten.csv](/downloads/bwe/techtrends_producten.csv)
- [Download techtrends_bestellingen.csv](/downloads/bwe/techtrends_bestellingen.csv)
- [Download techtrends_bestelregels.csv](/downloads/bwe/techtrends_bestelregels.csv)

### 2.4.1 Casestudy: TechTrends BV

TechTrends BV is een online retailer die elektronica verkoopt. Om hun bedrijfsvoering efficiënt te beheren, hebben ze een database nodig die informatie bijhoudt over hun klanten, de producten die ze verkopen en de bestellingen die geplaatst worden.

Een slechte aanpak zou zijn om alles in één gigantische tabel te stoppen, zoals we in het vorige hoofdstuk zagen. Een goede database-ontwerper splitst de informatie op in logische, samenhangende tabellen.

### 2.4.2 De kerntabellen van TechTrends BV

Hieronder staan de drie belangrijkste tabellen die de basis vormen van de webshop-database:

**1. Klanten Tabel (`Klanten`)**
Deze tabel bevat alle informatie die specifiek is voor een klant, en niets anders.

| **klant_id (PK)** | voornaam | achternaam | email | aanmaak_datum |
|---|---|---|---|---|
| 1 | Lotte | Peeters | lotte.peeters@example.com | 2024-01-15 |
| 2 | Daan | Mertens | daan.mertens@example.com | 2024-01-20 |
| 3 | Chloé | Dubois | chloe.dubois@example.com| 2024-02-10 |

*   **Primaire Sleutel (PK):** `klant_id` identificeert elke klant uniek.

**2. Producten Tabel (`Producten`)**
Deze tabel bevat alle informatie over de producten die TechTrends verkoopt.

| **product_id (PK)** | productnaam | beschrijving | prijs | voorraad |
|---|---|---|---|---|
| 101 | Laptop Pro | Krachtige laptop... | 1200.00 | 50 |
| 102 | Draadloze Muis | Ergonomische muis...| 75.50 | 150 |
| 103 | Mechanisch Toetsenbord | Voor de veeleisende... | 180.00 | 75 |
| 104 | 4K Monitor | Haarscherp beeld... | 450.00 | 40 |

*   **Primaire Sleutel (PK):** `product_id` identificeert elk product uniek.

**3. Bestellingen Tabel (`Bestellingen`)**
Deze tabel legt de transacties vast: welke klant heeft wanneer een bestelling geplaatst.

| **bestelling_id (PK)** | **klant_id (FK)** | bestel_datum | totaalbedrag |
|---|---|---|---|
| 5001 | 1 | 2024-01-15 | 1275.50 |
| 5002 | 3 | 2024-02-11 | 450.00 |
| 5003 | 1 | 2024-02-12 | 180.00 |
| 5004 | 2 | 2024-02-15 | 75.50 |

*   **Primaire Sleutel (PK):** `bestelling_id` identificeert elke bestelling uniek.
*   **Referentiële Sleutel (FK):** `klant_id` linkt elke bestelling aan een klant in de `Klanten`-tabel.

### 2.4.3 De kracht van relaties: het volledige plaatje

De individuele tabellen zijn nuttig, maar de echte kracht van een relationele database komt naar voren wanneer we de relaties gebruiken om complexe vragen te beantwoorden.

**Vraag: Wat heeft Lotte Peeters besteld?**

Om deze vraag te beantwoorden, combineert de database informatie uit alle tabellen:
1.  We zoeken in de `Klanten`-tabel naar "Lotte Peeters" en vinden `klant_id` = 1.
2.  We zoeken in de `Bestellingen`-tabel naar alle bestellingen met `klant_id` = 1. We vinden `bestelling_id` 5001 en 5003.
3.  Maar wat zat er in die bestellingen? Hiervoor hebben we een **tussentabel** nodig, omdat een bestelling meerdere producten kan bevatten en een product in meerdere bestellingen kan voorkomen (een veel-op-veel relatie).

**4. Bestelregels Tabel (`Bestelregels`)**
Deze tabel verbindt producten met bestellingen.

| **bestelregel_id (PK)** | **bestelling_id (FK)** | **product_id (FK)** | aantal | prijs_per_stuk |
|---|---|---|---|---|
| 801 | 5001 | 101 | 1 | 1200.00 |
| 802 | 5001 | 102 | 1 | 75.50 |
| 803 | 5002 | 104 | 1 | 450.00 |
| 804 | 5003 | 103 | 1 | 180.00 |
| 805 | 5004 | 102 | 1 | 75.50 |

Nu kunnen we het volledige verhaal vertellen:
*   Bestelling 5001 (van Lotte Peeters) bevatte een Laptop Pro (`product_id` 101) en een Draadloze Muis (`product_id` 102).
*   Bestelling 5003 (ook van Lotte Peeters) bevatte een Mechanisch Toetsenbord (`product_id` 103).
