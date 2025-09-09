## Hoofdstuk 4.1: Introductie tot SQL

Nu we een goed ontworpen datamodel hebben, is het tijd om te leren communiceren met de database. De taal die we hiervoor gebruiken is **SQL** (Structured Query Language). SQL is de wereldwijde standaardtaal voor het beheren en bevragen van gegevens in relationele databases.

Of je nu werkt met MySQL, PostgreSQL, SQL Server of een ander relationeel databasesysteem, de basis van SQL is overal hetzelfde. Het leren van SQL is een essentiële vaardigheid voor iedereen die met data werkt.

### 4.1.1 Wat is SQL?

SQL is een **declaratieve** taal. Dit betekent dat je de computer vertelt *wat* je wilt bereiken, niet *hoe* het precies moet gebeuren. Je schrijft een query (een vraag) en het database management systeem (DBMS) zoekt zelf de meest efficiënte manier om het antwoord te vinden.

Een SQL-instructie wordt een **query** genoemd. We kunnen SQL gebruiken voor een breed scala aan taken, die we kunnen indelen in enkele subcategorieën.

### 4.1.2 De belangrijkste subcategorieën van SQL

1.  **Data Definition Language (DDL):**
    *   Gebruikt om de structuur van de database te definiëren en te beheren.
    *   Hiermee maak, wijzig en verwijder je databaseobjecten zoals tabellen.
    *   **Belangrijkste commando's:** `CREATE`, `ALTER`, `DROP`.
    *   *Voorbeeld:* `CREATE TABLE Klanten (...);`

2.  **Data Manipulation Language (DML):**
    *   Gebruikt om de gegevens *binnen* de tabellen te beheren.
    *   Hiermee voeg je data toe, pas je het aan of verwijder je het.
    *   **Belangrijkste commando's:** `INSERT`, `UPDATE`, `DELETE`.
    *   *Voorbeeld:* `INSERT INTO Klanten (naam) VALUES ('Jan Janssen');`

3.  **Data Query Language (DQL):**
    *   Technisch gezien een onderdeel van DML, maar vaak apart genoemd. Dit is het meest gebruikte deel van SQL.
    *   Gebruikt om gegevens uit de database op te vragen.
    *   **Belangrijkste commando:** `SELECT`.
    *   *Voorbeeld:* `SELECT naam FROM Klanten WHERE stad = 'Brussel';`

4.  **Data Control Language (DCL):**
    *   Gebruikt om de toegangsrechten tot de database te beheren.
    *   Hiermee bepaal je wie wat mag zien of doen.
    *   **Belangrijkste commando's:** `GRANT`, `REVOKE`.

### 4.1.3 Werken met een database-omgeving

Om SQL-queries te kunnen uitvoeren, hebben we een database-omgeving nodig. In een professionele setting is dit vaak een server die ergens draait. Voor leerdoeleinden kunnen we gebruikmaken van eenvoudigere oplossingen.

**Codapi: Onze online SQL-sandbox**
In deze cursus maken we gebruik van **Codapi**, een online tool die direct in de website is geïntegreerd. Het biedt een "sandbox"-omgeving waar je veilig kunt experimenteren met SQL zonder iets te hoeven installeren.

Onder een codeblok zoals het onderstaande, zie je knoppen waarmee je de code kunt uitvoeren. De `CREATE TABLE` en `INSERT` statements zetten een kleine, tijdelijke database op, en de `SELECT` statement voert een query uit op die database.

**Voorbeeld:**
Druk op de "Run" knop om de query uit te voeren. Je kunt de `SELECT` query aanpassen en opnieuw uitvoeren om te experimenteren.

```sql
-- Maak een tijdelijke tabel voor studenten
CREATE TABLE studenten (
    id INTEGER PRIMARY KEY,
    naam TEXT NOT NULL,
    studierichting TEXT
);

-- Voeg enkele voorbeeldgegevens toe
INSERT INTO studenten (naam, studierichting) VALUES
('Mohammed', 'Bedrijfswetenschappen'),
('Inaya', 'Informatica'),
('Sjirin', 'Bedrijfswetenschappen');

-- Vraag de namen op van alle studenten in de richting Bedrijfswetenschappen
SELECT naam
FROM studenten
WHERE studierichting = 'Bedrijfswetenschappen';
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>

### 4.1.4 Basis syntax van een SQL-query

Enkele belangrijke regels om te onthouden bij het schrijven van SQL:

*   **Niet hoofdlettergevoelig:** `SELECT`, `select` en `SeLeCt` zijn voor SQL allemaal hetzelfde. Voor de leesbaarheid schrijven we SQL-sleutelwoorden vaak in hoofdletters.
*   **Puntkomma (;):** Elke SQL-instructie eindigt met een puntkomma. Dit vertelt de database dat de opdracht is afgelopen. In sommige systemen is dit optioneel voor een enkele query, maar het is een goede gewoonte om het altijd te gebruiken.
*   **Commentaar:** Je kunt commentaar toevoegen aan je code met `--`. Alles na de twee streepjes op dezelfde regel wordt door de database genegeerd.

Nu je de basisprincipes van SQL kent, gaan we in het volgende hoofdstok leren hoe we onze eigen tabellen kunnen definiëren met `CREATE TABLE`.

