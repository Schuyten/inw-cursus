## Hoofdstuk 6.1: Wat is Big Data? De 5 V's

We stappen nu over van de gestructureerde wereld van relationele databases naar een concept dat de datawereld de afgelopen decennia heeft getransformeerd: **Big Data**.

Waar relationele databases uitblinken in het beheren van gestructureerde, consistente data, worden we vandaag de dag geconfronteerd met datasets die zo groot, snel en complex zijn dat traditionele systemen ze niet meer aankunnen. Dit is het domein van Big Data.

### 6.1.1 De definitie van Big Data

Big Data verwijst naar datasets die te groot of te complex zijn voor traditionele dataverwerkingsapplicaties om adequaat mee om te gaan. Maar het is meer dan alleen "veel data". De essentie van Big Data wordt vaak samengevat in een aantal kenmerken die beginnen met de letter 'V'. Oorspronkelijk waren dit er drie, maar inmiddels worden er meestal vijf (of zelfs meer) genoemd.

### 6.1.2 De 5 V's van Big Data

Deze vijf kenmerken definiëren samen wat Big Data is en waarom het speciale technologieën en benaderingen vereist.

**1. Volume (Volume)**
*   **Wat het is:** De enorme schaal en hoeveelheid data. We hebben het niet meer over gigabytes, maar over terabytes, petabytes en zelfs exabytes.
*   **Voorbeeld:** Een zelfrijdende auto genereert ongeveer 4.000 GB (4 terabyte) aan data per dag door zijn sensoren. De Large Hadron Collider (LHC) bij CERN produceert ongeveer 30 petabytes aan data per jaar.

**2. Velocity (Snelheid)**
*   **Wat het is:** De hoge snelheid waarmee data wordt gegenereerd en verwerkt moet worden, vaak in (near) real-time.
*   **Voorbeeld:** Sociale media platforms zoals X (voorheen Twitter) verwerken honderden miljoenen tweets per dag. Financiële markten genereren transactiedata in milliseconden. Slimme sensoren in een fabriek sturen continu data door.

**3. Variety (Variëteit)**
*   **Wat het is:** De diversiteit aan datatypes. In tegenstelling tot de netjes gestructureerde tabellen in een relationele database, komt Big Data in vele vormen:
    *   **Gestructureerde data:** Data in tabellen met rijen en kolommen (bv. verkooptransacties).
    *   **Semi-gestructureerde data:** Data met enige structuur, maar niet in een rigide tabel (bv. JSON-bestanden, e-mails).
    *   **Ongestructureerde data:** Data zonder vooraf gedefinieerd model (bv. tekst uit boeken, video's, audiobestanden, afbeeldingen, social media posts).
*   **Voorbeeld:** Een bedrijf wil klantinzicht krijgen door zowel hun aankoopgeschiedenis (gestructureerd) als hun reviews op social media (ongestructureerd) te analyseren.

**4. Veracity (Betrouwbaarheid / Waarheidsgetrouwheid)**
*   **Wat het is:** De onzekerheid en de kwaliteit van de data. Big Data kan rommelig, inconsistent en onvolledig zijn. De uitdaging is om de betrouwbare data te scheiden van de ruis.
*   **Voorbeeld:** Data van sociale media kan bevooroordeeld, onjuist of sarcastisch zijn. Sensor-data kan afwijkingen bevatten door storingen.

**5. Value (Waarde)**
*   **Wat het is:** Het uiteindelijke doel van het verzamelen en analyseren van Big Data: het creëren van waarde. Data is alleen nuttig als je er waardevolle inzichten uit kunt halen die leiden tot betere beslissingen, efficiëntere processen of nieuwe producten.
*   **Voorbeeld:** Netflix analyseert het kijkgedrag (volume, velocity, variety) van miljoenen gebruikers om series aan te bevelen (`Value`), wat leidt tot een hogere klanttevredenheid en minder opzeggingen.

![De 5 V's van Big Data](https://i.imgur.com/rN5Gz8y.png)

### Conclusie

Big Data is niet zomaar een grote database. Het is een fundamenteel ander soort data-uitdaging, gedefinieerd door de 5 V's. Het beheren en analyseren van data met deze kenmerken vereist gespecialiseerde tools en technieken die verder gaan dan de traditionele SQL-database. In de volgende hoofdstukken zullen we dieper ingaan op de impact hiervan en de systemen die zijn ontworpen om met Big Data om te gaan.
