## Hoofdstuk 5.1: Gegevens Toevoegen, Aanpassen en Verwijderen

Naast het bevragen van gegevens, is het essentieel om de data in je tabellen te kunnen beheren. De Data Manipulation Language (DML) in SQL geeft ons de commando's om rijen toe te voegen (`INSERT`), te wijzigen (`UPDATE`) en te verwijderen (`DELETE`).

### 5.1.1 Rijen toevoegen met `INSERT INTO`

Het `INSERT INTO` statement wordt gebruikt om nieuwe rijen (records) aan een tabel toe te voegen.

**Syntax 1: Waarden voor alle kolommen opgeven**
Als je waarden voor alle kolommen in de tabel in de juiste volgorde opgeeft, hoef je de kolomnamen niet te specificeren.

```sql
INSERT INTO tabelnaam VALUES (waarde1, waarde2, waarde3, ...);
```

**Syntax 2: Waarden voor specifieke kolommen opgeven**
Dit is de veiligere en meer leesbare methode. Je specificeert expliciet de kolomnamen en de bijbehorende waarden. De volgorde maakt niet uit, en je kunt kolommen weglaten die een standaardwaarde hebben of leeg mogen zijn.

```sql
INSERT INTO tabelnaam (kolom1, kolom2) VALUES (waarde1, waarde2);
```

**Voorbeeld: Een nieuwe klant toevoegen**
Laten we een nieuwe klant, "Marie Vandevelde", toevoegen aan de `Klanten` tabel.

```sql
-- Setup van de database
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, voornaam TEXT, achternaam TEXT, email TEXT);
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters', 'lotte.peeters@example.com');

-- Nieuwe klant toevoegen
INSERT INTO Klanten (klant_id, voornaam, achternaam, email)
VALUES (17, 'Marie', 'Vandevelde', 'marie.vandevelde@example.com');

-- Controleer het resultaat
SELECT * FROM Klanten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 5.1.2 Rijen aanpassen met `UPDATE`

Het `UPDATE` statement wordt gebruikt om bestaande records in een tabel te wijzigen.

**LET OP:** De `WHERE`-clausule in een `UPDATE` statement is **cruciaal**. Als je de `WHERE`-clausule vergeet, zal de `UPDATE` operatie worden toegepast op **alle rijen** in de tabel!

**Syntax:**
```sql
UPDATE tabelnaam
SET kolom1 = waarde1, kolom2 = waarde2, ...
WHERE voorwaarde;
```

**Voorbeeld: E-mailadres van een klant wijzigen**
Stel, klant Lotte Peeters (`klant_id` = 1) krijgt een nieuw e-mailadres.

```sql
-- Setup van de database
CREATE TABLE Klanten (klant_id INTEGER PRIMARY KEY, voornaam TEXT, achternaam TEXT, email TEXT);
INSERT INTO Klanten VALUES (1, 'Lotte', 'Peeters', 'lotte.peeters@example.com');
INSERT INTO Klanten VALUES (2, 'Daan', 'Mertens', 'daan.mertens@example.com');

-- E-mailadres updaten
UPDATE Klanten
SET email = 'lotte.peeters@newmail.com'
WHERE klant_id = 1;

-- Controleer het resultaat
SELECT * FROM Klanten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 5.1.3 Rijen verwijderen met `DELETE`

Het `DELETE` statement wordt gebruikt om bestaande rijen uit een tabel te verwijderen.

**EXTREME WAARSCHUWING:** Net als bij `UPDATE`, is de `WHERE`-clausule hier van levensbelang. Vergeet je de `WHERE`-clausule, dan **verwijder je alle data** uit je tabel! Er is meestal geen "undo".

**Syntax:**
```sql
DELETE FROM tabelnaam WHERE voorwaarde;
```

**Voorbeeld: Een product uit het assortiment verwijderen**
De 'Draadloze Muis' (`product_id` = 102) wordt niet meer verkocht en moet uit de database verwijderd worden.

```sql
-- Setup van de database
CREATE TABLE Producten (product_id INTEGER PRIMARY KEY, productnaam TEXT, prijs REAL);
INSERT INTO Producten VALUES (101, 'Laptop Pro', 1200.00);
INSERT INTO Producten VALUES (102, 'Draadloze Muis', 75.50);
INSERT INTO Producten VALUES (103, 'Mechanisch Toetsenbord', 180.00);

-- Product verwijderen
DELETE FROM Producten
WHERE product_id = 102;

-- Controleer het resultaat
SELECT * FROM Producten;
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 5.1.4 Actieve opdracht

Gebruik de TechTrends BV database. Voer de volgende DML-operaties uit en controleer na elke stap het resultaat met een `SELECT * FROM ...;` query.

1.  **INSERT:** Voeg een nieuw product toe: `product_id` = 105, `productnaam` = 'USB-C Hub', `prijs` = 49.99, `voorraad` = 200.
2.  **UPDATE:** De prijs van de 'Laptop Pro' (`product_id` = 101) is verlaagd naar 1150.00. Voer deze prijswijziging door.
3.  **UPDATE:** Daan Mertens (`klant_id` = 2) is verhuisd. Hoewel we geen adreskolom hebben, passen we voor deze oefening zijn achternaam aan naar "Mertens-Jansen".
4.  **DELETE:** Verwijder de bestelling met `bestelling_id` = 5004. (Let op: In een echte database met referentiële integriteit zou je eerst de bijbehorende rij in `Bestelregels` moeten verwijderen!)
