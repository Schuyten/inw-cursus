## Hoofdstuk 4.3: Data Beveagen met `SELECT`

Het meest gebruikte commando in SQL is `SELECT`. Het is de hoeksteen van de Data Query Language (DQL) en stelt ons in staat om specifieke informatie uit onze databasetabellen op te halen. Met `SELECT` kunnen we precies aangeven welke kolommen we willen zien en uit welke tabel we die informatie willen halen.

### 4.3.1 De basis syntax: `SELECT` en `FROM`

De eenvoudigste vorm van een `SELECT` query bestaat uit twee delen:

1.  **`SELECT`**: Gevolgd door een lijst van kolomnamen die je wilt ophalen.
2.  **`FROM`**: Gevolgd door de naam van de tabel waaruit je de gegevens wilt halen.

De basis syntax is:
```sql
SELECT kolomnaam1, kolomnaam2, ...
FROM tabelnaam;
```

**Voorbeeld 1: Specifieke kolommen selecteren**
Stel we willen de namen en prijzen van al onze producten zien.

```sql
SELECT productnaam, prijs
FROM Producten;
```

**Voorbeeld 2: Alle kolommen selecteren**
Als je alle kolommen uit een tabel wilt ophalen, kun je het `*` (wildcard) karakter gebruiken. Dit is handig voor een snelle inspectie van een tabel, maar in productiecode is het vaak beter om expliciet de benodigde kolommen te benoemen voor de duidelijkheid en prestaties.

```sql
SELECT *
FROM Klanten;
```

### 4.3.2 Data toevoegen om mee te werken

Voordat we verder gaan met query's, hebben we data nodig in onze tabellen. De onderstaande `INSERT` statements vullen de database met de data uit de CSV-bestanden die je eerder kon downloaden. Voer deze code uit in de sandbox om de database te vullen.

```sql
-- Creëer de tabellenstructuur (indien nog niet gedaan)
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, voornaam TEXT, achternaam TEXT, email TEXT);
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL, voorraad INTEGER);
CREATE TABLE Bestellingen (bestelling_id INTEGER PRIMARY KEY, klant_id INTEGER, bestel_datum TEXT);
CREATE TABLE Bestelregels (bestelregel_id INTEGER PRIMARY KEY, bestelling_id INTEGER, product_id INTEGER, aantal INTEGER);

-- Vul de tabellen met data
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters', 'lotte.peeters@example.com');
INSERT INTO Klanten VALUES (2, 'Daan', 'Mertens', 'daan.mertens@example.com');
INSERT INTO Klanten VALUES (3, 'Chloé', 'Dubois', 'chloe.dubois@example.com');

INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00, 50);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50, 150);
INSERT INTO Producten VALUES (103, 'Mechanisch Toetsenbord', 180.00, 75);
INSERT INTO Producten VALUES (104, '4K Monitor', 450.00, 40);

INSERT INTO Bestellingen VALUES (5001, 1, '2024-01-15');
INSERT INTO Bestellingen VALUES (5002, 3, '2024-02-11');
INSERT INTO Bestellingen VALUES (5003, 1, '2024-02-12');
INSERT INTO Bestellingen VALUES (5004, 2, '2024-02-15');

INSERT INTO Bestelregels VALUES (801, 5001, 101, 1);
INSERT INTO Bestelregels VALUES (802, 5001, 102, 1);
INSERT INTO Bestelregels VALUES (803, 5002, 104, 1);
INSERT INTO Bestelregels VALUES (804, 5003, 103, 1);
INSERT INTO Bestelregels VALUES (805, 5004, 102, 1);

-- Nu kun je de SELECT queries uitproberen!
SELECT * FROM Klanten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 4.3.3 Kolom-aliassen gebruiken met `AS`

Soms wil je de naam van een kolom in de output van je query veranderen, bijvoorbeeld om het leesbaarder te maken. Hiervoor gebruiken we het `AS` sleutelwoord om een **alias** te creëren.

**Voorbeeld:**
We willen de kolom `productnaam` weergeven als `Product` en `prijs` als `Verkoopprijs`.

```sql
-- Setup van de database (zelfde als hierboven)
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL, voorraad INTEGER);
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00, 50);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50, 150);

-- Query met aliassen
SELECT
    productnaam AS Product,
    prijs AS Verkoopprijs,
    voorraad AS Voorraad_aantal
FROM
    Producten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
Het gebruik van `AS` verandert de daadwerkelijke kolomnaam in de tabel niet; het beïnvloedt alleen hoe de kolom wordt weergegeven in de resultaten van *deze specifieke query*.

### 4.3.4 Unieke waarden ophalen met `DISTINCT`

Stel je wilt weten welke klanten een bestelling hebben geplaatst. Als je simpelweg `klant_id` selecteert uit de `Bestellingen`-tabel, krijg je dubbele waarden te zien (klant 1 heeft twee bestellingen).

```sql
-- Setup van de database
CREATE TABLE Bestellingen (bestelling_id INTEGER PRIMARY KEY, klant_id INTEGER, bestel_datum TEXT);
INSERT INTO Bestellingen VALUES (5001, 1, '2024-01-15');
INSERT INTO Bestellingen VALUES (5002, 3, '2024-02-11');
INSERT INTO Bestellingen VALUES (5003, 1, '2024-02-12');

-- Query zonder DISTINCT
SELECT klant_id FROM Bestellingen;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

Om alleen de unieke waarden te krijgen, gebruiken we het `DISTINCT` sleutelwoord.

```sql
-- Setup van de database (zelfde als hierboven)
CREATE TABLE Bestellingen (bestelling_id INTEGER PRIMARY KEY, klant_id INTEGER, bestel_datum TEXT);
INSERT INTO Bestellingen VALUES (5001, 1, '2024-01-15');
INSERT INTO Bestellingen VALUES (5002, 3, '2024-02-11');
INSERT INTO Bestellingen VALUES (5003, 1, '2024-02-12');

-- Query MET DISTINCT
SELECT DISTINCT klant_id FROM Bestellingen;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

Nu krijgen we elke `klant_id` maar één keer te zien.

### 4.3.5 Actieve opdracht

Schrijf zelf SQL-queries om de volgende vragen te beantwoorden voor de TechTrends BV database:
1.  Haal de `email` en `voornaam` op van alle klanten.
2.  Haal alle informatie op over alle bestellingen.
3.  Haal de unieke `product_id`'s op van de producten die ooit besteld zijn (uit de `Bestelregels` tabel).
4.  Haal de `productnaam` en de `voorraad` op, maar geef de kolommen de aliassen `Productnaam` en `Aantal in voorraad`.
