## Hoofdstuk 8.1: Casestudy: Van Probleem naar Data-oplossing

Welkom bij het eindproject van deze cursus. In dit laatste hoofdstuk brengen we alle kennis die je hebt opgedaan samen. Je gaat zelfstandig een volledige data-oplossing ontwerpen, implementeren en bevragen voor een realistische casestudy.

Het doel is niet alleen om de technische vaardigheden toe te passen, maar ook om te laten zien dat je het proces van probleemanalyse tot eindresultaat begrijpt.

### 8.1.1 De Casestudy: "EventPlaza"

Stel je voor dat je wordt ingehuurd door "EventPlaza", een bedrijf dat evenementen organiseert. Ze beheren momenteel al hun informatie in een reeks rommelige spreadsheets en ondervinden de typische problemen: data is inconsistent, het is moeilijk om overzicht te krijgen, en het beantwoorden van simpele vragen kost uren.

**De Probleemstelling van EventPlaza:**
> "We hebben een gestructureerd systeem nodig om onze evenementen, de locaties waar ze plaatsvinden en de deelnemers die zich inschrijven te beheren. We moeten weten **welke evenementen** we organiseren, **waar** ze plaatsvinden, en **wie** zich heeft ingeschreven voor welk evenement. Van onze deelnemers willen we de basis contactgegevens bijhouden. Voor evenementen moeten we de datum en de prijs weten. Voor locaties willen we de naam, het adres en de capaciteit opslaan."

### 8.1.2 Opdracht Deel 1: Database Ontwerp (Hoofdstuk 3)

In dit eerste deel focus je op het ontwerpen van een solide datamodel.

**Te doen:**
1.  **Analyseer de probleemstelling:**
    *   Identificeer de belangrijkste **entiteiten**.
    *   Bepaal de **attributen** voor elke entiteit. Vergeet niet om voor elke entiteit een geschikte primaire sleutel te bedenken.
    *   Analyseer de **relaties** tussen de entiteiten en bepaal hun cardinaliteit (één-op-één, één-op-veel, veel-op-veel).
2.  **Maak een Entity-Relationship Diagram (ERD):**
    *   Gebruik een online tool (zoals draw.io) om een volledig ERD te tekenen voor de EventPlaza-database.
    *   Gebruik de kraaienpoot-notatie.
    *   Zorg ervoor dat je eventuele veel-op-veel relaties correct oplost met een tussentabel (junctie-entiteit).
3.  **Normaliseer je ontwerp:**
    *   Controleer of je tabellen voldoen aan de Eerste, Tweede en Derde Normaalvorm. Schrijf een korte toelichting waarom je ontwerp aan deze vormen voldoet.

**Op te leveren:**
*   Een document met de beschrijving van je entiteiten, attributen en relaties.
*   Een afbeelding van je finale ERD.
*   Een korte tekstuele toelichting op de normalisatie.

### 8.1.3 Opdracht Deel 2: Database Implementatie en Bevraging (Hoofdstuk 4 & 5)

Nu ga je de blauwdruk uit deel 1 omzetten in een werkende database.

**Te doen:**
1.  **Schrijf de `CREATE TABLE` statements:**
    *   Vertaal je ERD naar SQL `CREATE TABLE` queries.
    *   Kies voor elke kolom een passend datatype.
    *   Definieer alle `PRIMARY KEY`, `FOREIGN KEY`, en `NOT NULL` constraints.
2.  **Vul de database met testdata:**
    *   Schrijf voor elke tabel een aantal `INSERT INTO` statements om de database te vullen met realistische, zelfbedachte data. Zorg voor minstens:
        *   3 Locaties
        *   5 Evenementen (verdeeld over de locaties)
        *   10 Deelnemers
        *   20 Inschrijvingen (verdeel de deelnemers over de evenementen)
3.  **Schrijf de SQL-queries:**
    *   Schrijf SQL-queries om de volgende vragen van het EventPlaza management te beantwoorden:
        1.  Geef een lijst van alle evenementen, gesorteerd op datum.
        2.  Geef de namen en e-mailadressen van alle deelnemers die zich hebben ingeschreven voor het evenement met `event_id` = X (kies zelf een ID uit je testdata).
        3.  Hoeveel deelnemers hebben zich per evenement ingeschreven? Toon de naam van het evenement en het aantal inschrijvingen.
        4.  Geef een lijst van alle evenementen die plaatsvinden op de locatie met `locatie_id` = Y (kies zelf een ID).
        5.  **Bonus:** Welke deelnemer heeft zich voor de meeste evenementen ingeschreven?

**Op te leveren:**
*   Een `.sql` bestand met al je `CREATE TABLE` en `INSERT INTO` statements.
*   Een apart `.sql` bestand met de vijf `SELECT` queries, voorzien van commentaar (`--`) om uit te leggen welke vraag elke query beantwoordt.

### 8.1.4 Opdracht Deel 3: Analyse en Visualisatie (Hoofdstuk 6 & 7)

In het laatste deel presenteer je je bevindingen in een eenvoudig BI-dashboard.

**Te doen:**
1.  **Exporteer je data:** Exporteer de resultaten van je belangrijkste queries (of de volledige tabellen) naar een CSV- of Google Sheets-bestand.
2.  **Bouw een dashboard:**
    *   Gebruik Google Looker Studio (of een andere BI-tool naar keuze) om een eenvoudig dashboard te maken.
    *   Het dashboard moet minstens de volgende elementen bevatten:
        *   Een **scorekaart** met het totaal aantal evenementen.
        *   Een **staafdiagram** dat het aantal inschrijvingen per evenement toont.
        *   Een **tabel** met de lijst van deelnemers voor een geselecteerd evenement.
        *   Een **filter** waarmee de gebruiker kan filteren op de naam van het evenement.

**Op te leveren:**
*   Een deelbare link naar je online BI-dashboard.
*   Een screenshot van je dashboard.

Dit eindproject geeft je de kans om de volledige cyclus van data management te doorlopen en een tastbaar resultaat op te leveren dat een echt bedrijfsprobleem oplost. Veel succes!
