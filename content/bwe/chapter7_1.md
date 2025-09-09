## Hoofdstuk 7.1: Data Warehousing en ETL

Nadat we hebben geleerd over de uitdagingen van Big Data, rijst de vraag: hoe kunnen bedrijven deze enorme en diverse datasets analyseren om er waarde uit te halen? Een operationele database (zoals die van onze webshop) is hier niet voor ontworpen. Complexe analyses uitvoeren op een live-database zou de prestaties voor de dagelijkse gebruikers (klanten die iets willen kopen) drastisch vertragen.

De oplossing is een **Data Warehouse**.

### 7.1.1 Wat is een Data Warehouse (DWH)?

Een Data Warehouse is een centrale opslagplaats (repository) van geïntegreerde data uit een of meer verschillende bronnen. Het is specifiek ontworpen voor het uitvoeren van query's en analyses, en niet voor transactionele verwerking.

De belangrijkste kenmerken van een DWH zijn:
*   **Onderwerpsgericht:** Data is georganiseerd rondom onderwerpen die relevant zijn voor het bedrijf (bv. Klant, Product, Verkoop), niet rondom de operationele processen.
*   **Geïntegreerd:** Data uit verschillende bronnen (bv. de verkoopdatabase, een marketing-spreadsheet, externe data) wordt samengevoegd en consistent gemaakt.
*   **Tijdvariant:** Data in een DWH bevat een tijdselement (bv. dag, week, maand), waardoor analyses over tijd (trends) mogelijk worden.
*   **Niet-vluchtig:** Data wordt in een DWH geladen en daarna zelden of nooit gewijzigd. Het is een historische record.

**Analogie:** Een operationele database is als het kassasysteem van een supermarkt, dat snelle, individuele transacties verwerkt. Een Data Warehouse is als het hoofdkantoor dat alle verkoopgegevens van alle winkels over het afgelopen jaar verzamelt om te analyseren welke producten het best verkochten.

### 7.1.2 Het ETL-proces: De motor achter het DWH

Hoe komt data van de verschillende bronnen in het Data Warehouse terecht? Dit gebeurt via een proces genaamd **ETL**, wat staat voor **Extract, Transform, Load**.

![ETL Proces](https://i.imgur.com/8Q0vY58.png)

**1. Extract (Extraheren)**
*   Dit is de eerste stap, waarbij data wordt opgehaald uit de verschillende bronsystemen. Dit kunnen relationele databases, spreadsheets, tekstbestanden, social media feeds, etc. zijn.

**2. Transform (Transformeren)**
*   Dit is de belangrijkste en meest complexe stap. De ruwe data uit de bronnen wordt "schoongemaakt" en omgezet naar een consistent formaat dat geschikt is voor analyse.
*   **Voorbeelden van transformaties:**
    *   **Opschonen:** Fouten corrigeren, ontbrekende waarden invullen.
    *   **Standaardiseren:** Zorgen dat data in hetzelfde formaat staat (bv. 'België', 'BE', 'Belgium' allemaal omzetten naar 'België').
    *   **Integreren:** Data uit verschillende bronnen combineren (bv. klantdata uit de verkoopdatabase koppelen aan klantdata uit het marketingsysteem).
    *   **Aggregeren:** Data samenvatten (bv. dagelijkse verkoopcijfers omzetten naar wekelijkse totalen).

**3. Load (Laden)**
*   In de laatste stap wordt de getransformeerde data in het Data Warehouse geladen. Dit kan een volledig nieuwe dataset zijn (full load) of alleen de nieuwe en gewijzigde data sinds de laatste keer (incremental load).

### 7.1.3 ELT: Een moderne variant

Een variant op ETL is **ELT (Extract, Load, Transform)**. Dankzij de opkomst van krachtige cloud data warehouses (zoals Google BigQuery, Amazon Redshift) is het nu mogelijk om de ruwe data eerst direct in het warehouse te laden en de transformaties *binnen* het warehouse zelf uit te voeren met diens eigen rekenkracht. Dit kan efficiënter zijn voor zeer grote datasets.

### 7.1.4 Openbare datasets zoeken en gebruiken

Een DWH hoeft niet alleen interne data te bevatten. Het wordt vaak verrijkt met externe, openbare datasets om diepere inzichten te krijgen. Er zijn talloze bronnen voor open data.

**Voorbeeld: Een retailer kan zijn verkoopdata combineren met:**
*   **Demografische data** van de overheid om te zien in welke buurten zijn klanten wonen.
*   **Weerdata** om te analyseren of het weer invloed heeft op de verkoop van bepaalde producten.
*   **Data over feestdagen** om seizoensgebonden trends te begrijpen.

**Populaire platformen voor open datasets:**
*   [Statbel (Statistiekbureau van België)](https://statbel.fgov.be/nl)
*   [data.europa.eu (Europees Data Portaal)](https://data.europa.eu/nl)
*   [Google Dataset Search](https://datasetsearch.research.google.com/)
*   [Kaggle Datasets](https://www.kaggle.com/datasets)

Door interne en externe data te combineren in een Data Warehouse, kunnen bedrijven patronen en correlaties ontdekken die anders verborgen zouden blijven.
