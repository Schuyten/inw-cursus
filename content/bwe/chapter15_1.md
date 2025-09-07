## Hoofdstuk 3.1: Introductie tot Databanken

### 3.1.1 Wat is een databank?

* **Definitie:**
    * Een databank is een gestructureerde verzameling van gegevens, die efficiënt kan worden opgeslagen, opgevraagd en beheerd.
    * Gegevens worden opgeslagen in tabellen, met rijen (records) en kolommen (velden).
    * Een databank maakt het mogelijk om gegevens te organiseren en complexe query's of zoekopdrachten te doen om specifieke informatie op te halen.

* **Voorbeelden van databanken:**
    * **Netflix**: Netflix slaat gegevens op over films, gebruikers, kijktijd, voorkeuren, beoordelingen, enzovoort. Dit helpt Netflix om aanbevelingen te doen voor wat jij zou willen kijken.
    * **Bedrijfscontext**: Bedrijven slaan klantgegevens, verkooptransacties, voorraadniveaus, facturen, en betalingsgegevens op in hun databanken. Dit helpt bedrijven bijvoorbeeld om hun klantenservice te verbeteren, verkooptrends te analyseren en efficiënt voorraadbeheer te voeren.
    * **Instagram**: Gebruikersprofielen, foto's, likes, en volgers worden allemaal opgeslagen in een databank. Deze gegevens worden gebruikt om je feed te personaliseren.

### 3.1.2 Voorbeelden uit de bedrijfswereld

In een bedrijfsomgeving spelen databanken een cruciale rol bij het beheren van dagelijkse processen. Hier zijn enkele veelvoorkomende tabellen en velden die je zou vinden in een bedrijfsdatabase:

1. **Klantendatabase:**
    | Kolom           | Beschrijving                        |
    |-----------------|-------------------------------------|
    | **klant_id**     | Uniek ID voor elke klant            |
    | **naam**         | Naam van de klant                  |
    | **e-mail**       | Contactgegevens van de klant        |
    | **adres**        | Adres van de klant                 |
    | **klanttype**    | Particulier of Zakelijk            |
    | **klantstatus**  | Actief, inactief, of geblokkeerd    |

| klant_id | naam             | e-mail            | adres           | klanttype   | klantstatus |
|----------|------------------|-------------------|-----------------|-------------|-------------|
| 1001     | Jan Janssen       | jan@example.com   | Bakkerstraat 12  | Zakelijk    | Actief      |
| 1002     | Anna de Vries     | anna@example.com  | Kerkplein 9      | Particulier | Actief      |
| 1003     | Sander Bakker     | sander@example.com| Marktstraat 5    | Particulier | Inactief    |
| 1004     | Maria van Dijk    | maria@example.com | Hoofdweg 17      | Zakelijk    | Actief      |
| 1005     | Pieter Smits      | pieter@example.com| Dorpsstraat 10   | Zakelijk    | Actief      |

2. **Verkooptransacties:**
    | Kolom              | Beschrijving                      |
    |--------------------|-----------------------------------|
    | **transactie_id**   | Uniek ID voor elke transactie     |
    | **datum**           | Datum van de verkoop             |
    | **product_id**      | Het ID van het verkochte product |
    | **klant_id**        | Het ID van de klant die kocht    |
    | **aantal**          | Aantal verkochte items           |
    | **prijs**           | Verkoopprijs per item            |


    | transactie_id | datum      | product_id | klant_id | aantal | prijs |
    |---------------|------------|------------|----------|--------|-------|
    | 2001          | 2024-01-10 | 3001       | 1001     | 10     | 15.50 |
    | 2002          | 2024-01-15 | 3002       | 1002     | 5      | 25.00 |
    | 2003          | 2024-01-20 | 3001       | 1001     | 3      | 15.50 |
    | 2004          | 2024-01-22 | 3003       | 1004     | 12     | 10.00 |
    | 2005          | 2024-01-25 | 3002       | 1005     | 8      | 25.00 |

3. **Voorraadbeheer:**
    | Kolom              | Beschrijving                     |
    |--------------------|----------------------------------|
    | **product_id**      | Uniek ID voor elk product        |
    | **productnaam**     | Naam van het product             |
    | **voorraadniveau**  | Huidige voorraad                 |
    | **minimumniveau**   | Minimumniveau voordat moet worden bijbesteld |
    | **prijs**           | Prijs van het product            |


    | product_id | productnaam  | voorraadniveau | minimumniveau | prijs |
    |------------|--------------|----------------|---------------|-------|
    | 3001       | Laptops      | 100            | 20            | 15.50 |
    | 3002       | Smartphones  | 50             | 10            | 25.00 |
    | 3003       | Tablets      | 75             | 15            | 10.00 |
    | 3004       | Monitors     | 30             | 5             | 50.00 |
    | 3005       | Toetsenborden| 150            | 25            | 5.00  |

### 3.1.3 Voorbeeld: Netflix-database en Bedrijfsdatabase

We gaan nu kijken naar een voorbeeld van een Netflix-database en een bedrijfsdatabase.

1. **Netflix-database:**
    - **Tabellen:** Films, Genres, Gebruikers
    - **Velden:** Titel, Jaar, Genre, Beoordeling, Speelduur
    - Vraag: Hoe gebruikt Netflix de gegevens om gepersonaliseerde aanbevelingen te doen? Netflix kan bijvoorbeeld de genres van films en de voorkeuren van gebruikers koppelen om passende films voor te stellen.

2. **Bedrijfsdatabase:**
    - **Tabellen:** Klanten, Verkooptransacties, Producten
    - **Velden:** Klantnaam, Productnaam, Aantal, Verkoopdatum
    - Vraag: Hoe gebruikt een bedrijf deze gegevens om zijn verkoopstrategieën te optimaliseren? Een bedrijf kan bijvoorbeeld analyseren welke producten het vaakst worden verkocht en welke klanten herhalingsaankopen doen.

### 3.1.4 Eenvoudige SQL-query's om gegevens op te halen

Stel je voor dat we een eenvoudige SQL-query schrijven om specifieke gegevens op te halen. We geven hier voorbeelden uit zowel de Netflix-database als de bedrijfswereld.

**Voorbeeld 1: Netflix-query**
We willen alle films van het genre "Drama" opvragen die zijn uitgebracht na 2010.

```sql
-- Haal alle films van het genre 'Drama' uit de database die na 2010 zijn uitgebracht
SELECT titel, jaar, genre
FROM films
WHERE genre = 'Drama' AND jaar > 2010
ORDER BY jaar DESC;
```

**Voorbeeld 2: Verkooptransacties-query**
Stel dat we willen weten welke klanten het afgelopen jaar meer dan €1000 hebben uitgegeven.

```sql
-- Haal alle klanten op die meer dan €1000 hebben uitgegeven in het afgelopen jaar
SELECT klant_id, SUM(prijs * aantal) AS totaal_uitgave
FROM verkooptransacties
WHERE datum > '2023-01-01'
GROUP BY klant_id
HAVING totaal_uitgave > 1000;
```

Deze query berekent de totale uitgaven per klant en selecteert alleen die klanten die meer dan €1000 hebben uitgegeven sinds januari 2023.

### 3.1.5 Actieve opdracht: Verken je eigen dataset

Nu je hebt gezien hoe je met een dataset kunt werken, gaan we aan de slag! Zoek op [Kaggle](https://www.kaggle.com/datasets) een dataset die aansluit bij je interesses, of werk met een bedrijfseconomische dataset zoals klantgegevens of verkoopsgegevens.

* **Stap 1:** Kies een dataset en open deze. 
* **Stap 2:** Identificeer de tabel(len) en velden in de dataset. Welke gegevens worden er opgeslagen? Welke velden zou je kunnen gebruiken om interessante inzichten te krijgen?
* **Stap 3:** Maak een document waarin je aangeeft wat er interessant is aan je dataset. Waarom denk je dat die gegevens belangrijk zijn voor het bedrijf?

### 3.1.6 Samenvatting

In deze les hebben we geleerd wat een databank is en hebben we gekeken naar voorbeelden uit de bedrijfswereld en de Netflix-database. We hebben ook gezien hoe we met behulp van SQL-query's gegevens uit een databank kunnen halen, zowel in een entertainment- als een bedrijfscontext. 

---