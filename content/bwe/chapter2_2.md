# 2.2 Structuur en werking: tabellen, sleutels en relaties

In het vorige hoofdstuk hebben we geleerd wat een relationele database is. Nu duiken we dieper in de kerncomponenten die deze databases zo krachtig maken: sleutels en relaties. Deze concepten stellen ons in staat om gegevens in verschillende tabellen op een logische en betrouwbare manier met elkaar te verbinden.

### 2.2.1 De primaire sleutel (Primary Key): Unieke identificatie

Elke tabel in een relationele database heeft een **primaire sleutel** (Primary Key). Dit is een kolom (of een set van kolommen) waarvan de waarde elke rij in de tabel uniek identificeert.

**Kenmerken van een primaire sleutel:**
1.  **Uniek:** De waarde van de primaire sleutel moet voor elke rij anders zijn. Er mogen geen duplicaten zijn.
2.  **Nooit leeg (NOT NULL):** Een primaire sleutel mag nooit geen waarde hebben.

Denk aan het rijksregisternummer voor personen, het chassisnummer voor een auto, of een uniek studentennummer op school. Het zijn allemaal unieke identificatiemiddelen.

**Voorbeeld: Klantentabel**
In een `Klanten`-tabel is een `klant_id` de perfecte kandidaat voor een primaire sleutel. Namen kunnen hetzelfde zijn, maar het `klant_id` zal voor elke klant uniek zijn.

| **klant_id (PK)** | naam          | e-mail             |
|-------------------|---------------|--------------------|
| 1001              | Jan Janssen   | jan@example.com    |
| 1002              | Anna de Vries | anna@example.com   |
| 1003              | Jan Janssen   | jj@email.com       |

Zonder de primaire sleutel `klant_id` zouden we de twee klanten met de naam "Jan Janssen" niet uit elkaar kunnen houden.

### 2.2.2 De referentiële sleutel (Foreign Key): Verbindingen leggen

Waar primaire sleutels zorgen voor unieke identificatie binnen één tabel, zorgen **referentiële sleutels** (Foreign Keys) voor de verbindingen (relaties) *tussen* tabellen.

Een referentiële sleutel is een kolom in een tabel die verwijst naar de primaire sleutel van een andere tabel.

**Voorbeeld: Klanten en Bestellingen**
Stel we hebben ook een `Bestellingen`-tabel. Hoe weten we welke klant welke bestelling heeft geplaatst? We voegen een `klant_id` kolom toe aan de `Bestellingen`-tabel. Dit `klant_id` is de referentiële sleutel die verwijst naar de primaire sleutel in de `Klanten`-tabel.

**Klanten Tabel**
| **klant_id (PK)** | naam          |
|-------------------|---------------|
| 1001              | Jan Janssen   |
| 1002              | Anna de Vries |

**Bestellingen Tabel**
| **bestelling_id (PK)** | datum      | **klant_id (FK)** |
|------------------------|------------|-------------------|
| 501                    | 2024-01-10 | 1001              |
| 502                    | 2024-01-15 | 1002              |
| 503                    | 2024-01-20 | 1001              |

Nu kunnen we precies zien dat bestellingen 501 en 503 zijn geplaatst door Jan Janssen (klant 1001).

### 2.2.3 Soorten Relaties

De verbindingen die door referentiële sleutels worden gelegd, kunnen verschillende vormen aannemen:

1.  **Eén-op-veel-relatie (One-to-Many):** Dit is de meest voorkomende relatie. Eén rij in Tabel A kan verbonden zijn met vele rijen in Tabel B, maar een rij in Tabel B is verbonden met slechts één rij in Tabel A.
    *   **Voorbeeld:** Eén klant kan *veel* bestellingen plaatsen, maar elke bestelling hoort bij slechts *één* klant.

2.  **Eén-op-één-relatie (One-to-One):** Eén rij in Tabel A is verbonden met slechts één rij in Tabel B, en vice versa. Dit is minder gebruikelijk en wordt vaak gebruikt om een tabel op te splitsen of voor beveiligingsredenen.
    *   **Voorbeeld:** Eén werknemer heeft *één* personeelsdossier, en elk personeelsdossier hoort bij *één* werknemer.

3.  **Veel-op-veel-relatie (Many-to-Many):** Eén rij in Tabel A kan verbonden zijn met vele rijen in Tabel B, en één rij in Tabel B kan ook verbonden zijn met vele rijen in Tabel A. Om dit te realiseren in een database, is een derde tabel nodig, een **junctietabel** of **tussentabel**.
    *   **Voorbeeld:** Een student kan *veel* vakken volgen, en een vak kan door *veel* studenten worden gevolgd. Een tussentabel `Inschrijvingen` koppelt studenten aan vakken.

![Database Relationships](https://i.imgur.com/83sJ8V2.png)

### 2.2.4 Referentiële Integriteit

Dankzij primaire en referentiële sleutels kan een database **referentiële integriteit** afdwingen. Dit is een set regels die ervoor zorgt dat de relaties tussen tabellen consistent en geldig blijven.

Simpel gezegd, het voorkomt "wees"-records. Het zorgt ervoor dat je:
*   Geen bestelling kunt toevoegen voor een `klant_id` dat niet bestaat in de `Klanten`-tabel.
*   Geen klant kunt verwijderen als er nog bestellingen aan die klant gekoppeld zijn.

Dit garandeert de betrouwbaarheid en consistentie van de gegevens in de database, een van de belangrijkste voordelen ten opzichte van een spreadsheet.
