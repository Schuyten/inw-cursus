# 1.5 De beperkingen van Excel en de Voordelen van Databases

Hoewel Excel een krachtig en veelzijdig hulpmiddel is voor gegevensbeheer en -analyse, heeft het belangrijke beperkingen, vooral wanneer de datasets groter en complexer worden. Dit hoofdstuk licht de beperkingen van Excel toe en introduceert de kernvoordelen van een robuuster systeem zoals een relationele database.

## 1.5.1 Schaalbaarheid en Prestaties

Een van de grootste nadelen van Excel is de beperkte schaalbaarheid.

*   **Rijen- en kolommenlimiet:** Een Excel-werkblad heeft een harde limiet van 1.048.576 rijen en 16.384 kolommen. Hoewel dit veel lijkt, is het voor veel moderne datasets, zoals weblogs, transactiegegevens of wetenschappelijke data, onvoldoende.
*   **Prestaties:** Naarmate een Excel-bestand groeit, zelfs ver onder de limieten, wordt het merkbaar trager. Complexe formules, grote hoeveelheden data en meerdere koppelingen kunnen leiden tot lange laad- en berekentijden, wat de productiviteit aanzienlijk kan verminderen.

## 1.5.2 Redundantie, Consistentie en Integriteit

Dit zijn de kernproblemen van dataopslag in spreadsheets, en de belangrijkste redenen waarom databases zijn uitgevonden.

### Gegevensredundantie: Het probleem van dubbele data

**Gegevensredundantie** betekent dat dezelfde informatie onnodig op meerdere plaatsen wordt opgeslagen.

**Voorbeeld in Excel:**
Stel je een bedrijf voor dat klantgegevens bijhoudt in een Excel-sheet. Voor elke bestelling wordt de naam en het adres van de klant opnieuw ingetypt.

| Bestelling ID | Besteldatum | Klantnaam     | Adres             | Product |
|---------------|-------------|---------------|-------------------|---------|
| 101           | 01-03-2024  | Jan Janssen   | Bakkerstraat 12   | Laptop  |
| 102           | 05-03-2024  | Anna de Vries | Kerkplein 9       | Muis    |
| 103           | 12-03-2024  | Jan Janssen   | Bakkerstraat 12   | Monitor |
| 104           | 15-03-2024  | Jan Jansen    | Bakkerstraat 12   | Laptop  |

**De problemen:**
1.  **Verspilde opslagruimte:** De naam en het adres van Jan Janssen worden meerdere keren opgeslagen.
2.  **Inconsistentie:** In de laatste rij staat "Jan Jansen" in plaats van "Jan Janssen". Deze onduidelijkheid maakt de data onbetrouwbaar.
3.  **Update-anomalie:** Als Jan Janssen verhuist, moet zijn adres in *elke* rij worden aangepast. Als je er één vergeet, heb je inconsistente data.

### Gegevensconsistentie en -Integriteit

**Gegevensconsistentie** zorgt ervoor dat data overal betrouwbaar en eenduidig is. **Gegevensintegriteit** is de overkoepelende term voor de nauwkeurigheid en betrouwbaarheid van gegevens. Databases dwingen dit af; Excel niet.

*   **Type-integriteit:** In Excel kan een gebruiker gemakkelijk tekst in een numerieke kolom invoeren. Databases dwingen strikte datatypes af (bv. getal, tekst, datum).
*   **Validatieregels:** Hoewel Excel enkele basis validatieregels heeft, zijn deze gemakkelijk te omzeilen. Databases bieden krachtige mechanismen (constraints) om ervoor te zorgen dat alleen geldige gegevens worden ingevoerd.
*   **Relationele integriteit:** Een database kan garanderen dat je geen bestelling kunt koppelen aan een niet-bestaande klant, wat in Excel onmogelijk is.

## 1.5.3 Samenwerking en Gelijktijdige Toegang

Samenwerken in een Excel-bestand is problematisch.

*   **Versiebeheer:** Wanneer meerdere mensen aan hetzelfde bestand werken, leidt dit snel tot meerdere versies van de waarheid.
*   **Gelijktijdige bewerking:** Excel is niet ontworpen voor gelijktijdige, complexe transacties door meerdere gebruikers, zoals een database dat wel is.

## 1.5.4 Beveiliging

De beveiligingsopties in Excel zijn beperkt.

*   **Toegangscontrole:** Het is moeilijk om in Excel gedetailleerde toegangsrechten in te stellen.
*   **Bescherming tegen corruptie:** Grote Excel-bestanden zijn vatbaar voor corruptie. Databases hebben robuuste mechanismen voor back-up en herstel.

## Samenvatting: Database vs. Excel

| Kenmerk     | Excel (Spreadsheet)                                     | Relationele Database                             |
|-------------|---------------------------------------------------------|--------------------------------------------------|
| **Redundantie** | Hoog risico, data wordt vaak gekopieerd en geplakt.     | Laag, door normalisatie en relaties.             |
| **Consistentie**| Moeilijk te handhaven, risico op meerdere 'waarheden'. | Hoog, afgedwongen door de databasestructuur.     |
| **Integriteit** | Beperkt, afhankelijk van de discipline van de gebruiker. | Hoog, afgedwongen door datatypes, sleutels en regels. |


## Conclusie: Wanneer overstappen?

Excel is een uitstekend hulpmiddel voor snelle analyses en kleine datasets. Echter, wanneer je project te maken krijgt met:

*   **Grote hoeveelheden data**
*   **Meerdere gebruikers**
*   **Strikte eisen aan datakwaliteit en -consistentie**
*   **Noodzaak voor complexe query's**

...dan is het tijd om de overstap naar een relationele database te overwegen. De volgende hoofdstukken zullen je introduceren in de wereld van databases en je de vaardigheden leren om deze krachtige systemen te gebruiken.
