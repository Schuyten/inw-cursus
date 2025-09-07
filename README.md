# Informaticawetenschappen – Open‑source leerplatform (3e graad)
 
## Overzicht
 
Welkom bij het Informaticawetenschappen Leerplatform, een open-source leeromgeving speciaal ontwikkeld voor leerkrachten en leerlingen in de derde graad secundair onderwijs in Vlaanderen. Dit platform biedt interactieve cursussen voor het vak Informaticawetenschappen, met focus op programmeren in Python.

Actief onderhouden. 

Gebruik direct of pas aan via je eigen fork/clone.

 ## Voor leerkrachten
 
 ### Hoe gebruiken?
 
 #### Optie 1: Direct gebruiken (Geen technische kennis vereist)
 
 De eenvoudigste manier om het platform te gebruiken is via onze gehoste versie:
 
 1. Ga naar [https://informaticawetenschappen.com](https://informaticawetenschappen.com)
 2. Deel deze link met uw leerlingen
 3. De leerlingen kunnen direct beginnen met de cursussen, quizzen en code-uitdagingen
 
 #### Optie 2: Aanpassen en zelf hosten (Fork aanbevolen)

Wil je de inhoud afstemmen op je schoolcontext of eigen leerplan?

1. Fork deze repository: [https://github.com/Schuyten/inw-cursus](https://github.com/Schuyten/inw-cursus)
2. Pas de inhoud aan in de map `content/`
   - `content/wi` – wiskunde‑richtingen (algoritmen & Python)
   - `content/bwe` – bedrijfswetenschappen (databanken/SQL/BI)
   - `content/python` – generieke Python‑hoofdstukken
3. Host je fork:
   - Vercel (eenvoudigste): koppel je GitHub‑fork → Deploy → automatisch bij elke commit
   - Of lokaal: Node.js 18+ → `npm install` → `npm run dev` → `http://localhost:3000`

> Tip: Forken is beter dan enkel clonen omdat je zo upstream updates eenvoudig kan binnenhalen en je eigen versie op GitHub beheert. Clonen is prima voor lokaal testen.

### Cursusinhoud Aanpassen

De cursusinhoud is opgeslagen in Markdown‑bestanden (.md) in `content/`. U hoeft geen programmeerkennis te hebben om deze aan te passen:

1. Navigeer naar `content/wi`, `content/bwe` of `content/python`
2. Open het juiste hoofdstukbestand (bv. `chapter1_1.md`)
3. Klik op het potlood‑icoon op GitHub om te bewerken
4. Commit uw wijzigingen

#### Markdown Basis

Markdown is een eenvoudige opmaaktaal:

```
# Hoofdstuktitel
## Subtitel

Normale tekst

**Vetgedrukte tekst**

*Schuingedrukte tekst*

- Lijstitem 1
- Lijstitem 2

1. Genummerd item 1
2. Genummerd item 2

[Link tekst](https://www.voorbeeld.be)

![Afbeelding beschrijving](pad/naar/afbeelding.jpg)

```

# Voorbeeld
print("Hello World")
```

### Quizzen en code‑uitdagingen toevoegen

Er zijn twee manieren om een quiz te tonen:

- Inline in het hoofdstuk: voeg een tag toe in de Markdown van het hoofdstuk (aanbevolen)
- In een apart “Quiz” subhoofdstuk: maak een extra hoofdstuk met enkel de quiz‑tag

Stap 1 — Maak de quizinhoud aan (JSON):
- Plaats per subhoofdstuk een JSON‑bestand in `content/quizzes/`
- Bestandsnaam: gebruik een underscore i.p.v. punt (bv. `4_4.json` voor subhoofdstuk `4.4`)
- Voorbeeldstructuur:

```json
{
  "title": "Dictionaries",
  "quiz": [
    {
      "question": "Wat is het belangrijkste verschil tussen een lijst en een dictionary in Python?",
      "options": [
        "Lijsten kunnen alleen getallen bevatten, dictionaries kunnen elk datatype bevatten",
        "Lijsten worden benaderd via een numerieke index, dictionaries via een sleutel",
        "Dictionaries zijn altijd sneller dan lijsten",
        "Lijsten kunnen worden gesorteerd, dictionaries niet"
      ],
      "correctAnswer": 1
    }
  ],
  "codeChallenge": {
    "initialCode": "# startcode hier",
    "expectedOutput": "verwachte uitvoer",
    "hint": "korte hint",
    "solution": "# volledige oplossing hier"
  }
}
```

Stap 2 — Registreer de quiz in de code:
- Open `components/chapter-quiz.tsx`
- Voeg jouw JSON toe aan `quizRegistry` met als sleutel het subhoofdstuk met puntnotatie (bv. `'4.4'`), maar verwijs naar het JSON‑bestand met underscore (bv. `4_4.json`):

```ts
import quiz_4_4 from '@/content/quizzes/4_4.json';

const quizRegistry = {
  '4.4': quiz_4_4
  // '2.3': quiz_2_3, ...
};
```

Stap 3 — Toon de quiz in de les:
- Inline in de Markdown van het hoofdstuk waar de quiz hoort (automatisch voor het huidige subhoofdstuk):

```html
<chapterquiz />
```

- Of wijs expliciet het subhoofdstuk toe (handig in een apart quizhoofdstuk):

```html
<chapterquiz for="4.4" />
```

Optioneel — Apart quizhoofdstuk maken:
- Maak een extra hoofdstukbestand (bv. `content/python/chapter4_7.md`) met:

```md
# 4.7 Quiz: Dictionaries

<chapterquiz for="4.4" />
```
- Voeg dit subhoofdstuk toe in de cursusstructuur in `components/course-website.tsx`

Hoe het eruit ziet voor leerlingen:
- Er verschijnt een sectie “Test je kennis” met knoppen “Quiz: [titel]” en “Code Challenge: [titel]”
- Quiz en challenge openen in een modal
 
 ## Functies van het Platform
 
 - **Interactieve Cursussen**: Markdown-gebaseerde lessen met syntax highlighting voor code
 - **Quizzen**: Test het begrip van de leerlingen met meerkeuzevragen
 - **Code-uitdagingen**: Laat leerlingen Python-code schrijven en test deze automatisch
 - **AI-assistent**: Leerlingen kunnen vragen stellen aan een AI-assistent
 
 ## Technische Details
 
 Dit platform is gebouwd met:
 - **Next.js** (React + SSR)
 - **TypeScript**
 - **Tailwind CSS**
 - **Vercel** (hosting)

De code‑uitdagingen worden geëvalueerd via een beveiligde API die Python‑code veilig uitvoert en test.

 ## Ondersteuning
 
 Heeft u vragen of loopt u tegen problemen aan? Neem contact op via:
 - GitHub Issues: [https://github.com/Schuyten/inw-cursus/issues](https://github.com/Schuyten/inw-cursus/issues)
 
 ## Bijdragen
 
 We verwelkomen bijdragen van leerkrachten! Als u verbeteringen of nieuwe inhoud wilt toevoegen, maak dan een pull request aan op GitHub.

 ## Licentie
 
 Dit project is beschikbaar onder de MIT-licentie, wat betekent dat u het vrij kunt gebruiken, aanpassen en distribueren voor uw eigen lesdoeleinden.

 ---
 
Ontwikkeld met ❤️ voor informaticaleerkrachten in Vlaanderen.

## Chatbot (optioneel, standaard uitgeschakeld)

De ingebouwde chatbot is een Socratische assistent die leerlingen vragen stelt en begeleidt i.p.v. directe antwoorden te geven. Hij krijgt (alleen) de inhoud mee van het hoofdstuk dat de leerling op dat moment bekijkt, zodat feedback contextueel is.

Inschakelen:
- Zet `NEXT_PUBLIC_ENABLE_CHAT=true`
- Stel een model API‑sleutel in op de server: `GOOGLE_API_KEY=...`
- (Optioneel) pas de naam aan met `NEXT_PUBLIC_CHAT_ASSISTANT_NAME="Assistent"`

Hosting op Vercel:
- Ga naar Project → Settings → Environment Variables
- Voeg toe: `NEXT_PUBLIC_ENABLE_CHAT` = `true`
- Voeg toe: `GOOGLE_API_KEY` = je Google Generative AI API‑sleutel
- Redeploy het project

Lokaal testen:
- Maak een `.env.local` aan in de projectroot met:
  ```
  NEXT_PUBLIC_ENABLE_CHAT=true
  GOOGLE_API_KEY=je_api_sleutel
  NEXT_PUBLIC_CHAT_ASSISTANT_NAME=Assistent
  ```
- Start lokaal met `npm run dev`

Privacy/opmerking:
- De chatbot ontvangt de vraag van de leerling en de tekst van het geopende hoofdstuk. Er worden geen leerlingnamen of schoolgegevens doorgestuurd door de app zelf.

