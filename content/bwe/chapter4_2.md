## Hoofdstuk 4.2: Tabellen en Constraints

In dit hoofdstuk zetten we ons datamodel om in een daadwerkelijke databasestructuur. We gebruiken het `CREATE TABLE` commando om tabellen aan te maken en specificeren de kolommen, hun datatypes en de regels (constraints) die de gegevensintegriteit waarborgen.

### 4.2.1 Tabellen aanmaken met `CREATE TABLE`

Het `CREATE TABLE` statement is het DDL-commando dat we gebruiken om een nieuwe tabel in onze database te definiëren. De basis syntax is als volgt:

```sql
CREATE TABLE tabelnaam (
    kolomnaam1 datatype constraints,
    kolomnaam2 datatype constraints,
    ...
    kolomnaamN datatype constraints
);
```

We specificeren de naam van de tabel, gevolgd door een lijst van kolommen tussen haakjes. Voor elke kolom definiëren we een naam, een datatype en optioneel één of meerdere constraints.

### 4.2.2 Veelvoorkomende Datatypes

Het kiezen van het juiste datatype is essentieel voor gegevensintegriteit en efficiëntie. Elk databasesysteem heeft zijn eigen specifieke datatypes, maar de volgende komen universeel voor:

*   **INTEGER** of **INT:** Voor gehele getallen (bv. 1, 100, -50). Wordt vaak gebruikt voor ID-kolommen.
*   **TEXT** of **VARCHAR(n):** Voor tekst. `VARCHAR(n)` wordt gebruikt voor tekst met een variabele lengte tot een maximum van `n` karakters (bv. `VARCHAR(255)` voor een naam). `TEXT` wordt gebruikt voor langere stukken tekst zonder vaste limiet.
*   **DECIMAL(p, s)** of **NUMERIC(p, s):** Voor getallen met decimalen waarbij precisie belangrijk is, zoals geldbedragen. `p` is het totale aantal cijfers en `s` is het aantal cijfers na de komma. (bv. `DECIMAL(10, 2)` voor een prijs).
*   **DATE:** Voor het opslaan van een datum (bv. '2024-09-15').
*   **TIMESTAMP:** Voor het opslaan van een datum en tijdstip.

### 4.2.3 Constraints: Regels voor je data

Constraints zijn regels die we opleggen aan de kolommen om de betrouwbaarheid en integriteit van de data te garanderen. De database zal een foutmelding geven als je probeert data in te voegen die een constraint schendt.

De belangrijkste constraints zijn:

*   **PRIMARY KEY:** Markeert een kolom als de primaire sleutel. Dit dwingt af dat elke waarde in deze kolom **uniek** is en **niet leeg (NULL)** mag zijn. Een tabel kan maar één primaire sleutel hebben.
*   **FOREIGN KEY:** Creëert een link naar de primaire sleutel van een andere tabel. Dit dwingt referentiële integriteit af.
*   **NOT NULL:** Zorgt ervoor dat een kolom geen lege (NULL) waarden mag bevatten. Een naam of een e-mailadres mag bijvoorbeeld niet leeg zijn.
*   **UNIQUE:** Zorgt ervoor dat elke waarde in een kolom uniek moet zijn, net als een primaire sleutel, maar een tabel kan meerdere `UNIQUE` kolommen hebben. Een `email` kolom is een goede kandidaat voor een `UNIQUE` constraint.
*   **DEFAULT:** Geeft een standaardwaarde op voor een kolom als er geen waarde wordt meegegeven bij het invoegen van een nieuwe rij.
*   **CHECK:** Valideert of de waarden in een kolom voldoen aan een specifieke voorwaarde. (bv. `CHECK (prijs > 0)`).

### 4.2.4 TechTrends BV: Van ERD naar `CREATE TABLE`

Laten we het ERD van TechTrends BV nu vertalen naar SQL `CREATE TABLE` statements. We beginnen met de tabellen die geen referentiële sleutels hebben.

**Klanten Tabel**
```sql
CREATE TABLE Klanten (
    klant_id INTEGER PRIMARY KEY,
    voornaam VARCHAR(255) NOT NULL,
    achternaam VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    aanmaak_datum DATE DEFAULT CURRENT_DATE
);
```

**Producten Tabel**
```sql
CREATE TABLE Producten (
    product_id INTEGER PRIMARY KEY,
    productnaam VARCHAR(255) NOT NULL,
    prijs DECIMAL(10, 2) NOT NULL CHECK (prijs > 0),
    voorraad INTEGER DEFAULT 0
);
```

Nu de tabellen waarnaar verwezen wordt bestaan, kunnen we de tabellen met referentiële sleutels aanmaken.

**Bestellingen Tabel**
```sql
CREATE TABLE Bestellingen (
    bestelling_id INTEGER PRIMARY KEY,
    klant_id INTEGER NOT NULL,
    bestel_datum DATE NOT NULL,
    FOREIGN KEY (klant_id) REFERENCES Klanten(klant_id)
);
```
Hier definieert `FOREIGN KEY (klant_id) REFERENCES Klanten(klant_id)` de relatie. Het zegt: "De `klant_id` in deze tabel moet een waarde zijn die ook daadwerkelijk bestaat in de `klant_id` kolom van de `Klanten` tabel."

**Bestelregels Tabel (Junctietabel)**
Deze tabel heeft twee referentiële sleutels.
```sql
CREATE TABLE Bestelregels (
    bestelregel_id INTEGER PRIMARY KEY,
    bestelling_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    aantal INTEGER NOT NULL CHECK (aantal > 0),
    FOREIGN KEY (bestelling_id) REFERENCES Bestellingen(bestelling_id),
    FOREIGN KEY (product_id) REFERENCES Producten(product_id)
);
```
<codapi-snippet sandbox="sqlite" editor="basic"></codapi-snippet>
*Opmerking: Druk op "Run" om de tabellen in de sandbox aan te maken. Er zal geen output zijn, maar op de achtergrond worden de tabellen gecreëerd voor gebruik in de volgende hoofdstukken.*
