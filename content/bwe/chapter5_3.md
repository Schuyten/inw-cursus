## Hoofdstuk 5.3: Data uit Meerdere Tabellen Combineren (JOINs)

De ware kracht van een relationele database ligt in de relaties *tussen* de tabellen. Tot nu toe hebben we enkel queries uitgevoerd op één tabel tegelijk. Om complexe vragen te beantwoorden, zoals "Welke producten heeft klant X gekocht?", moeten we gegevens uit meerdere tabellen combineren. Hiervoor gebruiken we `JOIN`-clausules.

Een `JOIN` combineert rijen uit twee of meer tabellen op basis van een gerelateerde kolom tussen hen.

### 5.3.1 De `INNER JOIN`

De `INNER JOIN` is de meest voorkomende type join. Het selecteert alle rijen uit beide tabellen zolang er een overeenkomstige waarde is in de gemeenschappelijke kolom. Rijen die geen match hebben in de andere tabel, worden weggelaten uit het resultaat.

**Syntax:**
```sql
SELECT tabel1.kolom1, tabel2.kolom2...
FROM tabel1
INNER JOIN tabel2
ON tabel1.gemeenschappelijke_kolom = tabel2.gemeenschappelijke_kolom;
```
*   `ON`-clausule: Hier specificeer je de koppelingsvoorwaarde, meestal de primaire sleutel van de ene tabel en de referentiële sleutel van de andere.
*   `tabelnaam.kolomnaam`: Het is een goede gewoonte om de tabelnaam voor de kolomnaam te plaatsen om duidelijk te maken uit welke tabel de kolom komt, zeker als de kolomnamen in beide tabellen hetzelfde zijn.

**Voorbeeld 1: Klantnamen bij bestellingen tonen**
We willen een lijst van alle bestellingen, maar in plaats van een `klant_id`, willen we de volledige naam van de klant zien.

```sql
-- Setup
CREATE TABLE Klanten (klant_id INTEGER, voornaam TEXT, achternaam TEXT);
CREATE TABLE Bestellingen (bestelling_id INTEGER, klant_id INTEGER, bestel_datum TEXT);
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters'), (2, 'Daan', 'Mertens'), (3, 'Chloé', 'Dubois');
INSERT INTO Bestellingen VALUES (5001, 1, '2024-01-15'), (5002, 3, '2024-02-11'), (5003, 1, '2024-02-12'), (5004, 2, '2024-02-15');

-- Query
SELECT
    B.bestelling_id,
    B.bestel_datum,
    K.voornaam,
    K.achternaam
FROM Bestellingen AS B
INNER JOIN Klanten AS K ON B.klant_id = K.klant_id;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
*Opmerking:* We gebruiken hier tabel-aliassen (`Bestellingen AS B`, `Klanten AS K`) om de query korter en leesbaarder te maken.

### 5.3.2 Meerdere tabellen joinen

Je kunt meer dan twee tabellen in één query joinen. Om de vraag "Welke producten heeft Lotte Peeters besteld?" te beantwoorden, hebben we informatie nodig uit `Klanten`, `Bestellingen`, `Bestelregels` en `Producten`.

**Voorbeeld 2: Een volledige bestelgeschiedenis opvragen**
```sql
-- Setup van de volledige database (zie vorig hoofdstuk)
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, voornaam TEXT, achternaam TEXT);
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL);
CREATE TABLE Bestellingen (bestelling_id INTEGER PRIMARY KEY, klant_id INTEGER);
CREATE TABLE Bestelregels (bestelling_id INTEGER, product_id INTEGER, aantal INTEGER);
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters'), (2, 'Daan', 'Mertens');
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00), (102, 'Draadloze Muis', 75.50), (103, 'Toetsenbord', 180.00);
INSERT INTO Bestellingen VALUES (5001, 1), (5003, 1), (5004, 2);
INSERT INTO Bestelregels VALUES (801, 5001, 101, 1), (802, 5001, 102, 1), (804, 5003, 103, 1), (805, 5004, 102, 1);

-- Query
SELECT
    K.voornaam,
    K.achternaam,
    P.productnaam,
    BR.aantal
FROM Klanten AS K
INNER JOIN Bestellingen AS B ON K.klant_id = B.klant_id
INNER JOIN Bestelregels AS BR ON B.bestelling_id = BR.bestelling_id
INNER JOIN Producten AS P ON BR.product_id = P.product_id
WHERE K.voornaam = 'Lotte' AND K.achternaam = 'Peeters';
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
Deze query doorloopt de relaties: van Klant naar Bestelling, van Bestelling naar Bestelregel, en van Bestelregel naar Product, om zo de volledige keten van informatie te verbinden.

### 5.3.3 Andere soorten JOINs (Overzicht)

Naast `INNER JOIN` zijn er nog andere types, waarvan `LEFT JOIN` de meest voorkomende is.

*   **`LEFT JOIN` (of `LEFT OUTER JOIN`):**
    *   Geeft **alle** rijen van de *linker* tabel terug, en de gematchte rijen van de rechter tabel.
    *   Als er geen match is in de rechter tabel, worden de kolommen van de rechter tabel gevuld met `NULL` (lege) waarden.
    *   **Gebruik:** Handig als je wilt zien welke items in een tabel *geen* corresponderende entry hebben in een andere tabel. Bijvoorbeeld: "Toon alle klanten, en als ze een bestelling hebben, toon die dan ook." Klanten zonder bestellingen worden dan ook getoond.

**Voorbeeld 3: Alle klanten en hun bestellingen (indien aanwezig)**
```sql
-- Setup
CREATE TABLE Klanten (klant_id INTEGER, voornaam TEXT);
CREATE TABLE Bestellingen (bestelling_id INTEGER, klant_id INTEGER);
INSERT INTO Klanten VALUES (1, 'Lotte'), (2, 'Daan'), (3, 'Chloé'), (4, 'Arthur');
INSERT INTO Bestellingen VALUES (5001, 1), (5002, 3), (5003, 1);

-- Query
SELECT K.voornaam, B.bestelling_id
FROM Klanten AS K
LEFT JOIN Bestellingen AS B ON K.klant_id = B.klant_id;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
Let op hoe Daan en Arthur, die geen bestellingen hebben, toch in de lijst voorkomen, met een `NULL` waarde voor `bestelling_id`. Een `INNER JOIN` zou hen hebben weggelaten.

### 5.3.4 Actieve opdracht

Gebruik de volledige TechTrends BV database. Schrijf SQL-queries om de volgende vragen te beantwoorden:

1.  Maak een lijst van alle bestelregels (`Bestelregels`). Toon de productnaam in plaats van de `product_id`.
2.  Toon de voornaam van de klant en de datum voor elke bestelling in de `Bestellingen` tabel.
3.  Gebruik een `LEFT JOIN` om een lijst te maken van alle producten, en toon de `bestelling_id` als dat product ooit besteld is. Producten die nog nooit besteld zijn, moeten ook in de lijst verschijnen.
4.  **Uitdaging:** Bereken het totale bedrag dat elke klant heeft uitgegeven. Toon de voornaam, achternaam en het totaalbedrag. (Hint: Je moet `JOIN`en, `GROUP BY` gebruiken op de klant, en `SUM()` op de prijs * aantal).
