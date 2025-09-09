## Hoofdstuk 4.4: Data Filteren en Sorteren

Tot nu toe hebben we alle rijen uit een tabel opgehaald. In de praktijk wil je echter bijna altijd een specifieke subset van je gegevens zien. SQL biedt krachtige clausules om je data te filteren (`WHERE`) en de resultaten te sorteren (`ORDER BY`).

### 4.4.1 Rijen filteren met de `WHERE`-clausule

De `WHERE`-clausule wordt direct na de `FROM`-clausule geplaatst en stelt je in staat om rijen te selecteren die aan een bepaalde voorwaarde voldoen.

De basis syntax is:
```sql
SELECT kolomnaam1, kolomnaam2
FROM tabelnaam
WHERE voorwaarde;
```

**Vergelijkingsoperatoren**
De `WHERE`-clausule maakt gebruik van vergelijkingsoperatoren om voorwaarden op te stellen:
*   `=` : Gelijk aan
*   `!=` of `<>` : Ongelijk aan
*   `>` : Groter dan
*   `<` : Kleiner dan
*   `>=` : Groter dan of gelijk aan
*   `<=` : Kleiner dan of gelijk aan

**Voorbeeld 1: Producten boven een bepaalde prijs**
We willen alle producten zien die meer dan € 200 kosten.

```sql
-- Setup van de database
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL);
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50);
INSERT INTO Producten VALUES (103, 'Mechanisch Toetsenbord', 180.00);
INSERT INTO Producten VALUES (104, '4K Monitor', 450.00);

-- Query
SELECT productnaam, prijs
FROM Producten
WHERE prijs > 200;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

**Voorbeeld 2: Filteren op tekst**
Bij het filteren op tekst (strings) moet de tekst tussen enkele aanhalingstekens (`'`) staan.

```sql
-- Setup van de database
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, voornaam TEXT, achternaam TEXT);
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters');
INSERT INTO Klanten VALUES (2, 'Daan', 'Mertens');

-- Query
SELECT *
FROM Klanten
WHERE voornaam = 'Daan';
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 4.4.2 Meerdere voorwaarden combineren met `AND`, `OR` en `NOT`

Je kunt complexere filters bouwen door voorwaarden te combineren met logische operatoren:

*   **`AND`**: Beide voorwaarden moeten waar zijn.
*   **`OR`**: Ten minste één van de voorwaarden moet waar zijn.
*   **`NOT`**: Keert de voorwaarde om (selecteert rijen die *niet* aan de voorwaarde voldoen).

**Voorbeeld 3: `AND` gebruiken**
We willen alle producten die meer dan € 100 kosten **EN** minder dan € 500.

```sql
-- Setup (zelfde als Voorbeeld 1)
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL);
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50);
INSERT INTO Producten VALUES (103, 'Mechanisch Toetsenbord', 180.00);
INSERT INTO Producten VALUES (104, '4K Monitor', 450.00);

-- Query
SELECT productnaam, prijs
FROM Producten
WHERE prijs > 100 AND prijs < 500;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 4.4.3 Resultaten sorteren met `ORDER BY`

De `ORDER BY`-clausule wordt gebruikt om de resultaten van je query te sorteren. Deze clausule komt altijd als laatste in een `SELECT` statement.

De basis syntax is:
```sql
SELECT kolomnaam1, kolomnaam2
FROM tabelnaam
WHERE voorwaarde
ORDER BY kolomnaam [ASC | DESC];
```

*   **`ASC` (Ascending):** Sorteert van laag naar hoog (A-Z, 0-9). Dit is de standaardinstelling als je niets specificeert.
*   **`DESC` (Descending):** Sorteert van hoog naar laag (Z-A, 9-0).

**Voorbeeld 4: Sorteren op prijs**
We willen alle producten zien, gesorteerd van duur naar goedkoop.

```sql
-- Setup (zelfde als Voorbeeld 1)
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL);
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50);
INSERT INTO Producten VALUES (103, 'Mechanisch Toetsenbord', 180.00);
INSERT INTO Producten VALUES (104, '4K Monitor', 450.00);

-- Query
SELECT productnaam, prijs
FROM Producten
ORDER BY prijs DESC;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

**Voorbeeld 5: Sorteren op meerdere kolommen**
Je kunt ook op meerdere kolommen sorteren. De database sorteert dan eerst op de eerste kolom, en binnen gelijke waarden van de eerste kolom, sorteert het op de tweede, enzovoort.

```sql
-- Setup van de database
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, achternaam TEXT, voornaam TEXT);
INSERT INTO Klanten VALUES (1, 'Peeters', 'Lotte');
INSERT INTO Klanten VALUES (2, 'Mertens', 'Daan');
INSERT INTO Klanten VALUES (3, 'Peeters', 'Tom');

-- Query
SELECT achternaam, voornaam
FROM Klanten
ORDER BY achternaam ASC, voornaam ASC;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
Resultaat: De twee "Peeters" staan bij elkaar, en binnen die groep worden ze op voornaam gesorteerd.

### 4.4.4 Actieve opdracht

Gebruik de volledige TechTrends BV database uit het vorige hoofdstuk. Schrijf SQL-queries om de volgende vragen te beantwoorden:

1.  Haal de `productnaam` en `prijs` op van alle producten met een voorraad van minder dan 50.
2.  Haal alle informatie op over de bestellingen die geplaatst zijn door `klant_id` 1.
3.  Haal de `productnaam` en `prijs` op van alle producten die duurder zijn dan € 100. Sorteer de resultaten van goedkoop naar duur.
4.  Haal de `voornaam` en `achternaam` op van alle klanten, gesorteerd op achternaam van A tot Z.
