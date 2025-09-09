# 2.3 Waarom databases gebruiken?

We hebben gezien dat Excel zijn beperkingen heeft en dat databases een gestructureerde manier bieden om data op te slaan. Maar wat zijn nu de concrete, doorslaggevende voordelen van een database in een bedrijfsomgeving? Dit hoofdstuk focust op drie kernconcepten die de superieure kracht van databases aantonen: gegevensintegriteit, -consistentie en het vermijden van redundantie.

### 2.3.1 Gegevensredundantie: Het probleem van dubbele data

**Gegevensredundantie** betekent dat dezelfde informatie onnodig op meerdere plaatsen wordt opgeslagen. Dit is een veelvoorkomend probleem in spreadsheets.

**Voorbeeld in Excel:**
Stel je een bedrijf voor dat klantgegevens bijhoudt in een Excel-sheet. Voor elke bestelling wordt de naam en het adres van de klant opnieuw ingetypt.

| Bestelling ID | Besteldatum | Klantnaam     | Adres             | Product |
|---------------|-------------|---------------|-------------------|---------|
| 101           | 01-03-2024  | Jan Janssen   | Bakkerstraat 12   | Laptop  |
| 102           | 05-03-2024  | Anna de Vries | Kerkplein 9       | Muis    |
| 103           | 12-03-2024  | Jan Janssen   | Bakkerstraat 12   | Monitor |
| 104           | 15-03-2024  | Jan Jansen    | Bakkerstraat 12   | Laptop  |

**De problemen:**
1.  **Verspilde opslagruimte:** De naam en het adres van Jan Janssen worden meerdere keren opgeslagen. Bij duizenden bestellingen wordt dit een aanzienlijke hoeveelheid onnodige data.
2.  **Inconsistentie:** In de laatste rij staat "Jan Jansen" in plaats van "Jan Janssen". Is dit een typfout of een andere klant? Deze onduidelijkheid maakt de data onbetrouwbaar.
3.  **Update-anomalie:** Als Jan Janssen verhuist, moet zijn adres in *elke* rij worden aangepast. Als je er één vergeet, heb je inconsistente data.

**De database-oplossing:**
In een database splitsen we dit op in twee tabellen (`Klanten` en `Bestellingen`), waardoor de klantgegevens maar één keer worden opgeslagen.

**Klanten Tabel**
| **klant_id** | naam          | adres           |
|--------------|---------------|-----------------|
| 1            | Jan Janssen   | Bakkerstraat 12 |
| 2            | Anna de Vries | Kerkplein 9     |

**Bestellingen Tabel**
| **Bestelling ID** | Besteldatum | **klant_id** | Product |
|-----------------|-------------|--------------|---------|
| 101             | 01-03-2024  | 1            | Laptop  |
| 102             | 05-03-2024  | 2            | Muis    |
| 103             | 12-03-2024  | 1            | Monitor |

Nu is er geen redundantie meer. Als Jan Janssen verhuist, hoeft zijn adres maar op één plek te worden aangepast.

### 2.3.2 Gegevensconsistentie: Eén versie van de waarheid

**Gegevensconsistentie** zorgt ervoor dat data overal in de database betrouwbaar en eenduidig is. Het vermijden van redundantie is de eerste stap naar consistentie. Referentiële integriteit (besproken in 2.2) is een ander krachtig mechanisme.

Consistentie betekent dat als we een `klant_id` opzoeken in de `Bestellingen`-tabel, we er zeker van kunnen zijn dat er een corresponderende en correcte klant bestaat in de `Klanten`-tabel. Een database dwingt dit af; Excel niet.

### 2.3.3 Gegevensintegriteit: De kwaliteit van je data

**Gegevensintegriteit** is de overkoepelende term voor de nauwkeurigheid, volledigheid en betrouwbaarheid van gegevens. Databases gebruiken verschillende middelen om de integriteit te waarborgen:

*   **Type-integriteit (Data Types):** Een kolom gedefinieerd als `DATUM` zal geen tekst accepteren. Een kolom voor `AANTAL` zal geen "vijf" als tekst accepteren, alleen het getal 5. Dit voorkomt invoerfouten.
*   **Entiteitsintegriteit (Primary Keys):** Door een unieke primaire sleutel te eisen, zorgt de database ervoor dat elke rij uniek identificeerbaar is en er geen dubbele records zijn.
*   **Referentiële integriteit (Foreign Keys):** Garandeert dat relaties tussen tabellen geldig zijn. Je kunt geen bestelling koppelen aan een niet-bestaande klant.
*   **Bedrijfsregels (Constraints):** Je kunt extra regels definiëren. Bijvoorbeeld: de `prijs` van een product moet altijd groter zijn dan 0, of een `kortingspercentage` mag niet hoger zijn dan 50%.

### Samenvatting: Database vs. Excel

| Kenmerk     | Excel (Spreadsheet)                                     | Relationele Database                             |
|-------------|---------------------------------------------------------|--------------------------------------------------|
| **Redundantie** | Hoog risico, data wordt vaak gekopieerd en geplakt.     | Laag, door normalisatie en relaties.             |
| **Consistentie**| Moeilijk te handhaven, risico op meerdere 'waarheden'. | Hoog, afgedwongen door de databasestructuur.     |
| **Integriteit** | Beperkt, afhankelijk van de discipline van de gebruiker. | Hoog, afgedwongen door datatypes, sleutels en regels. |

Door deze drie problemen—redundantie, inconsistentie en gebrek aan integriteit—effectief aan te pakken, bieden databases een fundament voor betrouwbare en schaalbare dataoplossingen die ver boven de mogelijkheden van een spreadsheet uitstijgen.
