## Hoofdstuk 3.3: Normalisatie

Nadat we een visueel datamodel (ERD) hebben opgesteld, moeten we ervoor zorgen dat de structuur van onze tabellen efficiënt is en de problemen van redundantie en inconsistentie minimaliseert. Dit proces heet **normalisatie**.

Normalisatie is een reeks formele regels (normaalvormen) die we toepassen op ons datamodel om de gegevensintegriteit te verbeteren en het ontwerp te optimaliseren. Voor deze cursus focussen we ons op de eerste drie normaalvormen, die de meeste problemen in de praktijk oplossen.

### 3.3.1 Eerste Normaalvorm (1NF): Atomaire waarden

**Regel:** Een tabel is in de Eerste Normaalvorm (1NF) als elke cel in de tabel slechts één enkele, **atomaire** waarde bevat, en elke rij uniek is.

"Atomair" betekent dat de waarde niet verder kan worden opgesplitst in kleinere, betekenisvolle delen.

**Probleem (Niet in 1NF):**
Stel je een tabel voor waarin meerdere telefoonnummers in één cel worden opgeslagen.

| klant_id | naam          | telefoonnummers     |
|----------|---------------|---------------------|
| 1        | Lotte Peeters | 0477123456, 025678910 |
| 2        | Daan Mertens  | 0499112233          |

Deze tabel schendt 1NF omdat de kolom `telefoonnummers` meerdere waarden bevat. Dit maakt het moeilijk om:
*   Een specifiek telefoonnummer te zoeken.
*   Te tellen hoeveel telefoonnummers een klant heeft.

**Oplossing (in 1NF):**
We lossen dit op door een aparte tabel te maken voor de telefoonnummers, waarbij elke rij slechts één nummer bevat.

**Klanten Tabel**
| **klant_id** | naam          |
|--------------|---------------|
| 1            | Lotte Peeters |
| 2            | Daan Mertens  |

**Telefoonnummers Tabel**
| **telefoon_id** | **klant_id (FK)** | nummer       |
|-----------------|-------------------|--------------|
| 101             | 1                 | 0477123456   |
| 102             | 1                 | 025678910    |
| 103             | 2                 | 0499112233   |

Nu is elke cel atomair en voldoet de structuur aan 1NF.

### 3.3.2 Tweede Normaalvorm (2NF): Volledige afhankelijkheid

**Regel:** Een tabel is in de Tweede Normaalvorm (2NF) als het in 1NF is en elk niet-sleutel attribuut **volledig functioneel afhankelijk** is van de *gehele* primaire sleutel.

Deze regel is vooral relevant wanneer een primaire sleutel uit meerdere kolommen bestaat (een samengestelde sleutel). Het betekent dat elke kolom moet afhangen van de *combinatie* van de sleutelkolommen, en niet slechts van een deel ervan.

**Probleem (Niet in 2NF):**
Laten we de `Bestelregel` tabel van TechTrends BV uitbreiden met `productnaam`. De primaire sleutel hier is een combinatie van `bestelling_id` en `product_id`.

| **bestelling_id (PK)** | **product_id (PK)** | productnaam      | aantal |
|------------------------|---------------------|------------------|--------|
| 5001                   | 101                 | Laptop Pro       | 1      |
| 5001                   | 102                 | Draadloze Muis   | 1      |
| 5002                   | 104                 | 4K Monitor       | 1      |

*   `aantal` is afhankelijk van de **volledige** primaire sleutel (het hangt af van welke bestelling én welk product).
*   `productnaam` is **niet** afhankelijk van de volledige sleutel. Het hangt alleen af van `product_id`. De `bestelling_id` is irrelevant voor de naam van het product. Dit heet **partiële afhankelijkheid**.

Dit leidt tot redundantie (de productnaam wordt bij elke bestelling herhaald) en update-anomalieën (als de productnaam verandert, moet dit op vele plaatsen worden aangepast).

**Oplossing (in 2NF):**
We verwijderen de partieel afhankelijke kolom (`productnaam`) uit de `Bestelregel` tabel. Die informatie hoort thuis in de `Producten` tabel, waar het volledig afhankelijk is van de primaire sleutel `product_id`. Dit is exact hoe we ons model in het ERD al hadden ontworpen!

### 3.3.3 Derde Normaalvorm (3NF): Geen transitieve afhankelijkheid

**Regel:** Een tabel is in de Derde Normaalvorm (3NF) als het in 2NF is en er geen **transitieve afhankelijkheden** zijn.

Een transitieve afhankelijkheid bestaat wanneer een niet-sleutel attribuut afhankelijk is van een ander niet-sleutel attribuut, in plaats van direct van de primaire sleutel.

**Probleem (Niet in 3NF):**
Stel we voegen `klant_stad` toe aan de `Bestellingen` tabel.

| **bestelling_id (PK)** | klant_id | bestel_datum | klant_stad |
|------------------------|----------|--------------|------------|
| 5001                   | 1        | 2024-03-01   | Brussel    |
| 5002                   | 3        | 2024-03-05   | Antwerpen  |
| 5003                   | 1        | 2024-03-12   | Brussel    |

Hier is `klant_stad` afhankelijk van `klant_id` (een niet-sleutel attribuut in deze tabel), wat op zijn beurt afhankelijk is van de primaire sleutel `bestelling_id`.
`bestelling_id` → `klant_id` → `klant_stad`
Dit is een transitieve afhankelijkheid. De stad van de klant heeft niets direct met de bestelling te maken, alleen indirect via de klant.

**Oplossing (in 3NF):**
We verplaatsen de transitief afhankelijke kolom (`klant_stad`) naar de tabel waar het direct van afhangt. In dit geval hoort het adres van de klant thuis in de `Klanten` tabel.

### Conclusie

Normalisatie lijkt misschien een academische oefening, maar het is de ruggengraat van een goed database-ontwerp. Door de regels van de eerste drie normaalvormen te volgen:
1.  **Elimineren we redundantie**, wat opslagruimte bespaart.
2.  **Voorkomen we inconsistenties en update-problemen**.
3.  **Verbeteren we de algehele gegevensintegriteit**.

Een goed genormaliseerd datamodel, zoals gevisualiseerd in een ERD, is de sleutel tot een robuuste, betrouwbare en efficiënte database.
