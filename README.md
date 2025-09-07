# Informaticawetenschappen – Open‑source leerplatform (3e graad)
 
## Overzicht
 
Welkom bij het Informaticawetenschappen Leerplatform, een open-source leeromgeving speciaal ontwikkeld voor leerkrachten en leerlingen in de derde graad secundair onderwijs in Vlaanderen. Dit platform biedt interactieve cursussen voor het vak Informaticawetenschappen, met focus op programmeren in Python.

Actief onderhouden. Gebruik direct of pas aan via je eigen fork/clone.

 ## Voor Leerkrachten
 
 ### Hoe Gebruiken?
 
 #### Optie 1: Direct Gebruiken (Geen Technische Kennis Vereist)
 
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

# Code voorbeeld
print("Hello World")
```

### Quizzen en Code‑uitdagingen Toevoegen

Quizzen en code‑uitdagingen worden gedefinieerd in `components/chapter-quiz.tsx` en gemapt in `components/course-website.tsx` onder `chapterContent`.
 
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

