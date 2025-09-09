## Hoofdstuk 3.2: Entity-Relationship Diagram (ERD) opstellen

Nadat we de entiteiten, attributen en relaties hebben geïdentificeerd, is de volgende stap om deze visueel weer te geven. Hiervoor gebruiken we een **Entity-Relationship Diagram (ERD)**. Een ERD is een flowchart die illustreert hoe de verschillende entiteiten in een database met elkaar in verband staan. Het is de visuele blauwdruk van ons datamodel.

### 3.2.1 De basiscomponenten van een ERD

Een ERD bestaat uit drie hoofdonderdelen:

1.  **Entiteiten:** Worden weergegeven als **rechthoeken**. Elke rechthoek bevat de naam van de entiteit.
2.  **Attributen:** Worden weergegeven als **ellipsen** (of ovalen) die verbonden zijn met hun entiteit. Het attribuut dat als primaire sleutel dient, wordt vaak onderstreept.
3.  **Relaties:** Worden weergegeven als **ruiten** (diamanten) die twee entiteiten met elkaar verbinden. De naam van de relatie wordt in de ruit geplaatst.

![Componenten van een ERD](https://i.imgur.com/8EGEsWB.png)

### 3.2.2 Cardinaliteit: De aard van de relatie specificeren

Een cruciaal onderdeel van een ERD is het specificeren van de **cardinaliteit** van een relatie. Cardinaliteit beschrijft de numerieke verhouding tussen de entiteiten. We gebruiken hiervoor de "kraaienpoot"-notatie (Crow's Foot Notation), een van de meest gebruikte standaarden.

De symbolen worden aan het einde van de relatie-lijnen geplaatst:

*   **De ring (rondje) betekent "nul"**
*   **Het streepje betekent "één"**
*   **De kraaienpoot betekent "veel"**

Deze worden gecombineerd om de minimum en maximum cardinaliteit aan te geven. Een streepje en een kraaienpoot (`-|<`) betekent "één en verplicht veel" (minimaal één, maximaal veel).

**De belangrijkste relaties in kraaienpoot-notatie:**

*   **Eén-op-één (1:1):**
    *   `--| |---` (Eén entiteit is verbonden met precies één andere)
    *   *Voorbeeld:* Een `Werknemer` heeft één `Personeelsdossier`.

*   **Eén-op-veel (1:N):**
    *   `--| |-<--` (Eén entiteit is verbonden met vele andere)
    *   *Voorbeeld:* Een `Klant` kan vele `Bestellingen` plaatsen.

*   **Veel-op-veel (N:M):**
    *   `-->|-|<-` (Vele entiteiten zijn verbonden met vele andere)
    *   *Voorbeeld:* Een `Student` volgt vele `Vakken`, en een `Vak` wordt door vele `Studenten` gevolgd.

### 3.2.3 ERD voor TechTrends BV

Laten we nu de kennis toepassen en een ERD opstellen voor onze TechTrends BV casus. We hebben de volgende entiteiten en relaties geïdentificeerd:

*   Entiteiten: `Klant`, `Bestelling`, `Product`
*   Relaties:
    *   Een `Klant` plaatst `Bestellingen` (één-op-veel)
    *   Een `Bestelling` bevat `Producten` (veel-op-veel)

**Stap 1: Teken de entiteiten en hun relaties**
We tekenen rechthoeken voor `Klant`, `Bestelling` en `Product`. We verbinden `Klant` met `Bestelling` via een relatie "plaatst", en `Bestelling` met `Product` via een relatie "bevat".

**Stap 2: Los de veel-op-veel relatie op**
Zoals we in hoofdstuk 2 hebben geleerd, kan een veel-op-veel relatie niet direct in een relationele database worden geïmplementeerd. We hebben een tussentabel (junctie-entiteit) nodig. We noemen deze `Bestelregel`.

Deze nieuwe entiteit `Bestelregel` krijgt een één-op-veel relatie met zowel `Bestelling` als `Product`.

**Stap 3: Teken het volledige ERD met cardinaliteit**
Nu tekenen we het finale diagram, inclusief de kraaienpoot-notatie om de cardinaliteit aan te duiden.

![ERD voor TechTrends BV](https://i.imgur.com/u1B9G5p.png)

**Analyse van het diagram:**
*   Een `Klant` kan nul of meer (`O<`) `Bestellingen` plaatsen. Een `Bestelling` hoort bij precies één (`||`) `Klant`.
*   Een `Bestelling` heeft één of meer (`| <`) `Bestelregels`. Elke `Bestelregel` hoort bij precies één (`||`) `Bestelling`.
*   Een `Product` kan op nul of meer (`O<`) `Bestelregels` voorkomen. Elke `Bestelregel` verwijst naar precies één (`||`) `Product`.

### 3.2.4 Actieve opdracht: Maak je eigen ERD

Gebruik een online tool zoals [draw.io](https://draw.io) of [Lucidchart](https://www.lucidchart.com) om een ERD te tekenen voor de volgende casus:

> **Een bibliotheek wil een database om haar boeken en leden te beheren.**
> De bibliotheek moet informatie bijhouden over de **boeken** (titel, auteur, ISBN) en de **leden** (naam, adres). Een **lid** kan meerdere **boeken** lenen. Een **boek** kan door meerdere **leden** worden geleend (maar niet tegelijkertijd, denk aan uitleengeschiedenis). De database moet elke **uitleenactie** vastleggen, inclusief de uitleendatum en de inleverdatum.

**Stappen:**
1.  Identificeer de entiteiten.
2.  Bepaal de attributen voor elke entiteit.
3.  Identificeer de relaties en hun cardinaliteit.
4.  Los eventuele veel-op-veel relaties op met een tussentabel.
5.  Teken het volledige ERD.
