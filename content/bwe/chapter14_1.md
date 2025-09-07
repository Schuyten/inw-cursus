## Hoofdstuk 2.1: Van Excel naar Databases

### 2.1.1 De beperkingen van Excel

* **Schaalbaarheid:** Excel werkt prima voor kleinere datasets, maar bij grote hoeveelheden gegevens (duizenden of miljoenen rijen) wordt het traag en onhandelbaar. 
* **Gegevensintegriteit:** Het is gemakkelijk om fouten te maken in Excel, zoals het per ongeluk overschrijven van formules of het invoeren van onjuiste gegevens. 
* **Gelijktijdige toegang:** Het samenwerken aan een Excel-bestand kan leiden tot conflicten en versiespaghetti. 
* **Complexe query's:** Hoewel Excel basisfilter- en sorteerfuncties heeft, is het niet geschikt voor complexe query's en analyses.

### 2.1.2 Introductie tot Databases

* **Wat is een database?** 
    * Een gestructureerde verzameling gegevens die efficiënt kan worden opgeslagen, opgevraagd en beheerd. 
    * Biedt een centrale locatie voor het opslaan van gegevens, waardoor redundantie wordt verminderd en de gegevensintegriteit wordt verbeterd.
    * Maakt complexe query's en analyses mogelijk met behulp van een querytaal zoals SQL.
    * Ondersteunt gelijktijdige toegang door meerdere gebruikers. 
* **Soorten databases:**
    * Relationele databases (zoals MySQL, PostgreSQL, Oracle)
    * NoSQL-databases (zoals MongoDB, Cassandra)
    * Andere (grafiekdatabases, tijdreeksdatabases, etc.)

### 2.1.3 Voordelen van Databases boven Excel

* **Schaalbaarheid:** Databases zijn ontworpen om grote hoeveelheden gegevens efficiënt te verwerken. 
* **Gegevensintegriteit:** Databases bieden mechanismen om de gegevensintegriteit te waarborgen, zoals beperkingen en transacties. 
* **Gelijktijdige toegang:** Databases ondersteunen gelijktijdige toegang door meerdere gebruikers zonder conflicten.
* **Complexe query's:** Databases bieden krachtige querytalen (zoals SQL) voor het uitvoeren van complexe analyses.
* **Beveiliging:** Databases bieden geavanceerde beveiligingsfuncties om gegevens te beschermen tegen ongeautoriseerde toegang.

## Excel versus Databases: Een Vergelijking

| Kenmerk        | Excel                                     | Databases                                |
|----------------|-------------------------------------------|------------------------------------------|
| Schaalbaarheid     | Beperkt, traag bij grote datasets        | Geschikt voor zeer grote datasets         |
| Gegevensintegriteit | Kwetsbaar voor fouten                     | Mechanismen om gegevensintegriteit te waarborgen |
| Gelijktijdige toegang | Kan leiden tot conflicten                 | Ondersteunt meerdere gebruikers zonder conflicten |
| Complexe query's  | Beperkte filter- en sorteermogelijkheden | Krachtige querytalen (zoals SQL)         |
| Beveiliging     | Basisbeveiliging                          | Geavanceerde beveiligingsfuncties        |

Deze tabel geeft een beknopt overzicht van de belangrijkste verschillen tussen Excel en databases, waarmee de voordelen van databases voor het beheren en analyseren van gegevens worden benadrukt. 

### 2.1.4 Overgang van Excel naar een Database

* **Exporteren vanuit Excel:** Exporteer je Excel-gegevens naar een CSV-bestand (komma-gescheiden waarden).
* **Database maken:** Maak een nieuwe database in een databasebeheersysteem (DBMS) zoals MySQL.
* **Tabel maken:** Maak een tabel in de database met kolommen die overeenkomen met de kolommen in je Excel-bestand.
* **Gegevens importeren:** Importeer het CSV-bestand in de databasetabel.

**[Afbeelding: Illustratie van het exporteren van gegevens uit Excel naar een database]**

### 2.1.5 Eenvoudige SQL-query's om gegevens op te halen

* **SELECT:** Haal specifieke kolommen op uit een tabel.
* **WHERE:** Filter rijen op basis van bepaalde voorwaarden.
* **ORDER BY:** Sorteer de resultaten op basis van een of meer kolommen.

**Voorbeeld:**

```sql
-- Maak de tabel studenten
CREATE TABLE studenten (
id INTEGER PRIMARY KEY,
naam TEXT NOT NULL,
leeftijd INTEGER,
studierichting TEXT
);
-- Voeg enkele voorbeeldgegevens toe
INSERT INTO studenten (naam, leeftijd, studierichting) VALUES
('Mohammed', 20, 'Bedrijfswetenschappen'),
('Inaya', 22, 'Bedrijfswetenschappen'),
('Sjirin', 21, 'Bedrijfswetenschappen'),
('Josephine', 23, 'Bedrijfswetenschappen'),
('Yassir', 19, 'Bedrijfswetenschappen'),
('Meryem', 20, 'Bedrijfswetenschappen'),
('Flor', 18, 'Bedrijfswetenschappen'),
('Danial', 20, 'Bedrijfswetenschappen'),
('Thiago', 21, 'Bedrijfswetenschappen'),
('Brandon', 22, 'Bedrijfswetenschappen'),
('Lily', 23, 'Bedrijfswetenschappen'),
('Alessandro', 19, 'Informatica'),
('Ayoub', 20, 'Biotechnologische wetenschappen'),
('Lorenzo', 21, 'Economie'),
('Youssef', 22, 'Humane wetenschappen'),
('Amina', 23, 'Informatica'),
('Nour', 19, 'Informatica');
-- Voer de query uit
SELECT naam, leeftijd 
FROM studenten
WHERE studierichting = 'Bedrijfswetenschappen'
ORDER BY leeftijd DESC;
```

<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
