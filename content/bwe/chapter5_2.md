## Hoofdstuk 5.2: Aggregatiefuncties en Groeperen

Tot nu toe hebben onze queries individuele rijen teruggegeven. De echte kracht van data-analyse komt echter naar voren wanneer we gegevens kunnen samenvatten en groeperen. SQL biedt hiervoor krachtige **aggregatiefuncties** en de `GROUP BY`-clausule.

### 5.2.1 Aggregatiefuncties

Een aggregatiefunctie voert een berekening uit op een set van waarden en geeft één enkele waarde als resultaat. De meest gebruikte aggregatiefuncties zijn:

*   **`COUNT()`**: Telt het aantal rijen.
*   **`SUM()`**: Berekent de som van een numerieke kolom.
*   **`AVG()`**: Berekent het gemiddelde van een numerieke kolom.
*   **`MIN()`**: Vindt de kleinste waarde in een kolom.
*   **`MAX()`**: Vindt de grootste waarde in een kolom.

**Voorbeeld 1: Aantal producten tellen**
Hoeveel producten verkoopt TechTrends in totaal?

```sql
-- Setup
CREATE TABLE Producten (product_id INTEGER, productnaam TEXT);
INSERT INTO Producten VALUES (101, 'Laptop Pro'), (102, 'Draadloze Muis'), (103, 'Toetsenbord'), (104, '4K Monitor');

-- Query
SELECT COUNT(product_id) AS Aantal_Producten
FROM Producten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
*Opmerking:* `COUNT(*)` telt alle rijen, terwijl `COUNT(kolomnaam)` het aantal rijen telt waar die specifieke kolom een waarde heeft (geen NULL).

**Voorbeeld 2: Totale voorraadwaarde berekenen**
Wat is de totale waarde van alle producten die we op voorraad hebben?

```sql
-- Setup
CREATE TABLE Producten (prijs REAL, voorraad INTEGER);
INSERT INTO Producten VALUES (1200.00, 50), (75.50, 150), (180.00, 75);

-- Query
SELECT SUM(prijs * voorraad) AS Totale_Voorraadwaarde
FROM Producten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 5.2.2 Data groeperen met `GROUP BY`

Aggregatiefuncties zijn het nuttigst wanneer ze worden gecombineerd met de `GROUP BY`-clausule. `GROUP BY` groepeert rijen met dezelfde waarden in gespecificeerde kolommen tot samenvattende rijen.

De aggregatiefunctie wordt dan toegepast op elke groep afzonderlijk.

**Syntax:**
```sql
SELECT kolom_die_groepeert, AGGREGATE_FUNCTIE(kolom)
FROM tabelnaam
GROUP BY kolom_die_groepeert;
```
**Belangrijke Regel:** Wanneer je `GROUP BY` gebruikt, moeten alle kolommen in je `SELECT`-lijst ofwel in de `GROUP BY`-clausule staan, ofwel binnen een aggregatiefunctie worden gebruikt.

**Voorbeeld 3: Aantal bestellingen per klant**
We willen zien hoeveel bestellingen elke klant heeft geplaatst.

```sql
-- Setup
CREATE TABLE Bestellingen (bestelling_id INTEGER, klant_id INTEGER);
INSERT INTO Bestellingen VALUES (5001, 1), (5002, 3), (5003, 1), (5004, 2);

-- Query
SELECT
    klant_id,
    COUNT(bestelling_id) AS Aantal_Bestellingen
FROM Bestellingen
GROUP BY klant_id;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 5.2.3 Groepen filteren met `HAVING`

We weten al hoe we rijen kunnen filteren met `WHERE`. Maar wat als we de *resultaten van onze groepen* willen filteren? Hiervoor kunnen we `WHERE` niet gebruiken, omdat `WHERE` wordt uitgevoerd *vóór* het groeperen.

De `HAVING`-clausule is speciaal ontworpen om groepen te filteren op basis van de resultaten van aggregatiefuncties. `HAVING` wordt altijd na `GROUP BY` geplaatst.

**Voorbeeld 4: Klanten met meerdere bestellingen**
We willen alleen de klanten zien die meer dan één bestelling hebben geplaatst.

```sql
-- Setup (zelfde als Voorbeeld 3)
CREATE TABLE Bestellingen (bestelling_id INTEGER, klant_id INTEGER);
INSERT INTO Bestellingen VALUES (5001, 1), (5002, 3), (5003, 1), (5004, 2);

-- Query
SELECT
    klant_id,
    COUNT(bestelling_id) AS Aantal_Bestellingen
FROM Bestellingen
GROUP BY klant_id
HAVING COUNT(bestelling_id) > 1;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

**Volgorde van uitvoering in een query:**
1.  `FROM` (welke tabel)
2.  `WHERE` (welke rijen filteren)
3.  `GROUP BY` (rijen groeperen)
4.  `HAVING` (groepen filteren)
5.  `SELECT` (welke kolommen tonen)
6.  `ORDER BY` (hoe sorteren)

### 5.2.4 Actieve opdracht

Gebruik de volledige TechTrends BV database. Schrijf SQL-queries om de volgende vragen te beantwoorden:

1.  Bereken de gemiddelde prijs van alle producten.
2.  Vind de duurste en goedkoopste productprijs in het assortiment.
3.  Toon per `product_id` hoe vaak dat product in totaal is besteld (hint: gebruik de `Bestelregels` tabel en `SUM(aantal)`).
4.  Breid de vorige query uit om alleen de producten te tonen die in totaal meer dan 1 keer zijn besteld.
