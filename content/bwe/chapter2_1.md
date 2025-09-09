# 2.1 Wat is een relationele database?

### 2.1.1 De definitie van een database

Een **database** (of databank) is een gestructureerde verzameling van gegevens die is ontworpen om efficiënt te worden opgeslagen, beheerd en opgevraagd. In plaats van gegevens willekeurig op te slaan, organiseert een database informatie in een duidelijke structuur, meestal in de vorm van tabellen.

Denk aan een digitale archiefkast die niet alleen heel veel informatie kan bevatten, maar waar je ook razendsnel de juiste informatie in kan vinden en verbanden kan leggen tussen verschillende documenten.

De meest voorkomende soort database is de **relationele database**. Hierbij worden gegevens opgeslagen in tabellen die via vooraf gedefinieerde relaties met elkaar verbonden zijn. Dit maakt het mogelijk om complexe verbanden in de data te beheren en te bevragen.

### 2.1.2 De bouwstenen van een relationele database

Een relationele database is opgebouwd uit enkele fundamentele componenten:

*   **Tabellen (Tables):** De basisstructuur waarin gegevens worden opgeslagen. Een database bevat meestal meerdere tabellen, elk over een specifiek onderwerp (bv. een tabel voor klanten, een voor producten, en een voor bestellingen).

*   **Rijen / Records:** Een horizontale rij in een tabel die één enkel item of entiteit vertegenwoordigt. In een `Klanten`-tabel zou elke rij bijvoorbeeld één unieke klant voorstellen.

*   **Kolommen / Velden (Fields):** Een verticale kolom in een tabel die een specifiek kenmerk of attribuut van de items in de tabel beschrijft. In een `Klanten`-tabel zouden de kolommen bijvoorbeeld `Naam`, `Adres` en `Email` kunnen zijn.

*   **Gegevenstypen (Data Types):** Elke kolom heeft een specifiek gegevenstype dat bepaalt welk soort data erin kan worden opgeslagen (bv. tekst, getal, datum). Dit helpt de gegevensintegriteit te bewaren.

De kracht van een relationele database zit in de **relaties** tussen die tabellen. Hier is een eenvoudig voorbeeld van hoe de tabellen `Klanten`, `Bestellingen` en `Producten` met elkaar verbonden kunnen zijn:

![ERD Voorbeeld](/images/bwe/database-erd-2-1.png)

### 2.1.3 Databases in het dagelijks leven

Je hebt vaker met databases te maken dan je misschien denkt. Veel van de diensten die je dagelijks gebruikt, draaien op krachtige databases:

*   **Netflix:** Slaat enorme hoeveelheden data op over films, series, gebruikers, kijkgeschiedenis en voorkeuren. Op basis van deze data kan Netflix je gepersonaliseerde aanbevelingen doen.
*   **Instagram:** Elk profiel, elke foto, elke like en elke volger wordt opgeslagen in een gigantische database. Hiermee wordt jouw persoonlijke feed samengesteld en worden connecties tussen gebruikers beheerd.
*   **Webshops (bv. Bol.com):** Beheren hun volledige productcatalogus, voorraadniveaus, klantgegevens en bestellingen in een database. Dit zorgt ervoor dat je de juiste producten ziet, de voorraad klopt en je bestelling correct wordt verwerkt.

In al deze voorbeelden zorgt de database op de achtergrond voor de structuur en de snelheid die nodig is om miljoenen gebruikers en enorme hoeveelheden data efficiënt te beheren.