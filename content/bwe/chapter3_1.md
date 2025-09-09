## Hoofdstuk 3.1: Van probleemstelling naar datamodel

Voordat we een database kunnen bouwen, moeten we een cruciale eerste stap zetten: het ontwerpen van een **datamodel**. Een datamodel is als de blauwdruk voor een huis; het is een gedetailleerd plan dat beschrijft welke informatie we willen opslaan en hoe die informatie met elkaar in verband staat. Zonder een goed model bouwen we een chaotische en onbruikbare database.

Het proces van datamodellering begint altijd met het grondig begrijpen van de 'probleemstelling' of de 'business case'.

### 3.1.1 De probleemstelling analyseren

De eerste fase is puur analytisch. We moeten de vereisten van de klant of de organisatie volledig begrijpen. Dit doen we door vragen te stellen en de processen te analyseren.

Stel je voor dat we teruggaan naar onze casestudy, TechTrends BV. De eigenaar komt naar ons toe met de volgende wens:

> *"Ik wil een systeem om mijn webshop te beheren. Ik moet weten **wie** mijn klanten zijn, **wat** voor producten ik verkoop, en **welke** producten door **welke** klant zijn besteld. Ik wil ook de voorraad van mijn producten kunnen bijhouden."*

Deze eenvoudige paragraaf bevat alle informatie die we nodig hebben om te beginnen. De sleutel is om de belangrijkste zelfstandige naamwoorden te identificeren. Deze worden vaak de **entiteiten** in ons datamodel.

### 3.1.2 Entiteiten identificeren

Een **entiteit** is een persoon, plaats, object, gebeurtenis of concept waarover we informatie willen opslaan. Het is de "wie" en "wat" uit de probleemstelling.

Uit de wens van TechTrends BV kunnen we de volgende kernentiteiten halen:
*   **Klanten:** De personen die producten kopen.
*   **Producten:** De items die verkocht worden.
*   **Bestellingen:** De transacties waarbij een klant producten koopt.

Dit zijn de drie fundamentele bouwstenen van onze database. Elke entiteit zal uiteindelijk een tabel worden in onze database.

### 3.1.3 Attributen bepalen

Zodra we onze entiteiten hebben, moeten we bepalen welke specifieke informatie we over elke entiteit willen bijhouden. Deze eigenschappen noemen we **attributen**. Attributen worden de kolommen in onze tabellen.

Laten we dit uitwerken voor onze entiteiten:

*   **Klant:**
    *   Wat moeten we weten over een klant?
    *   *Attributen:* `klant_id`, `voornaam`, `achternaam`, `email`.

*   **Product:**
    *   Wat moeten we weten over een product?
    *   *Attributen:* `product_id`, `productnaam`, `prijs`, `voorraad`.

*   **Bestelling:**
    *   Wat moeten we weten over een bestelling?
    *   *Attributen:* `bestelling_id`, `bestel_datum`, `totaalbedrag`.

**Belangrijke opmerking:** Voor elke entiteit voegen we een uniek identificatiemiddel toe (`klant_id`, `product_id`, `bestelling_id`). Dit wordt de primaire sleutel van de tabel en is essentieel voor een goed functionerende database.

### 3.1.4 Relaties tussen entiteiten vaststellen

De laatste stap in deze initiële ontwerpfase is het bepalen hoe de entiteiten met elkaar in verband staan. We hebben dit al kort aangeraakt, maar nu formaliseren we het:

*   Hoe verhouden **Klanten** en **Bestellingen** zich tot elkaar?
    *   Een **Klant** kan meerdere **Bestellingen** plaatsen.
    *   Een **Bestelling** hoort bij precies één **Klant**.
    *   Dit is een **één-op-veel-relatie**.

*   Hoe verhouden **Producten** en **Bestellingen** zich tot elkaar?
    *   Een **Bestelling** kan meerdere **Producten** bevatten.
    *   Een **Product** kan in meerdere **Bestellingen** voorkomen.
    *   Dit is een **veel-op-veel-relatie**.

Deze relaties zijn de lijm die onze database samenhoudt. Ze stellen ons in staat om straks vragen te beantwoorden als "Toon mij alle producten die klant X heeft besteld".

### Samenvatting van het proces

Het omzetten van een probleemstelling naar een conceptueel datamodel volgt deze drie stappen:

1.  **Identificeer de Entiteiten:** Zoek de belangrijkste zelfstandige naamwoorden (de 'wie' en 'wat'). Dit worden je tabellen.
2.  **Bepaal de Attributen:** Bepaal welke eigenschappen je van elke entiteit wilt opslaan. Dit worden je kolommen.
3.  **Stel de Relaties vast:** Bepaal hoe de entiteiten met elkaar verbonden zijn (één-op-één, één-op-veel, veel-op-veel).

Met deze drie elementen—entiteiten, attributen en relaties—hebben we een solide basis voor ons datamodel. In het volgende hoofdstuk gaan we leren hoe we dit model visueel kunnen weergeven met een Entity-Relationship Diagram (ERD).
