## Hoofdstuk 7.3: Data visualiseren met een BI-tool

Theorie over Business Intelligence is één ding, maar het zelf ervaren is veel krachtiger. In dit praktische hoofdstuk gaan we aan de slag met een BI-tool. Omdat het gratis en zeer gebruiksvriendelijk is, gebruiken we **Google Looker Studio** (voorheen Data Studio) voor onze eerste visualisatie.

We gebruiken een openbare dataset over de verkoop van videogames om een eenvoudig, maar inzichtelijk dashboard te bouwen.

### 7.3.1 De dataset: Globale verkoop van videogames

Voor deze oefening gebruiken we een bekende dataset van Kaggle: [Video Game Sales](https://www.kaggle.com/datasets/gregorut/videogamesales). Deze dataset bevat informatie over de verkoop van videogames met meer dan 100.000 verkochte exemplaren.

De belangrijkste kolommen zijn:
*   `Rank`: Rangschikking op basis van totale verkoop.
*   `Name`: Naam van de game.
*   `Platform`: Console waarop de game is uitgebracht (bv. PS4, Wii, X360).
*   `Year`: Jaar van uitgave.
*   `Genre`: Genre van de game (bv. Action, Sports, Role-Playing).
*   `Publisher`: De uitgever van de game.
*   `NA_Sales`, `EU_Sales`, `JP_Sales`, `Other_Sales`: Verkoopcijfers in miljoenen voor Noord-Amerika, Europa, Japan en andere regio's.
*   `Global_Sales`: Totale wereldwijde verkoop in miljoenen.

### 7.3.2 Stap 1: Toegang tot Google Looker Studio en de data

1.  Ga naar [lookerstudio.google.com](https://lookerstudio.google.com/).
2.  Log in met een Google-account.
3.  Maak een nieuw, leeg rapport aan.
4.  Looker Studio zal vragen om een databron toe te voegen. Kies voor **Google Sheets**.
5.  Open de volgende openbare Google Sheet met de dataset en maak een kopie in je eigen Google Drive: [Video Game Sales Google Sheet](https://docs.google.com/spreadsheets/d/1Xg_e7li9U5-mlRe2f_2b-s-T-vT9z2t4/edit?usp=sharing&ouid=107421115582329249539&rtpof=true&sd=true)
6.  Selecteer in Looker Studio deze gekopieerde Google Sheet als je databron.

### 7.3.3 Stap 2: Je eerste visualisatie - Totale verkoop per genre

Laten we beginnen met een eenvoudige, maar belangrijke vraag: "Welke genres verkopen het beste?" Een staafdiagram is hier perfect voor.

1.  Klik in de menubalk op **Grafiek toevoegen**.
2.  Kies een **staafdiagram**.
3.  Aan de rechterkant verschijnt het **Eigenschappen**-paneel. Hier configureren we de grafiek:
    *   **Dimensie:** Dit is waar je de data op wilt groeperen. Sleep het veld `Genre` naar de Dimensie-box.
    *   **Statistiek (Metric):** Dit is de waarde die je wilt meten. Sleep het veld `Global_Sales` naar de Statistiek-box. Looker Studio zal automatisch `SUM` (som) selecteren, wat correct is.
4.  **Sorteren:** Zorg ervoor dat de grafiek gesorteerd is op `Global_Sales` in aflopende volgorde, zodat het best verkopende genre bovenaan staat.

Je zou nu een staafdiagram moeten zien dat duidelijk de totale verkoop per genre toont.

### 7.3.4 Stap 3: Een tijdreeks toevoegen - Verkoop over de jaren

Een andere belangrijke vraag is: "Hoe heeft de verkoop van games zich over de tijd ontwikkeld?" Hiervoor gebruiken we een **tijdreeksgrafiek**.

1.  Klik op **Grafiek toevoegen** en kies **Tijdreeksgrafiek**.
2.  Configureer de grafiek in het **Eigenschappen**-paneel:
    *   **Tijddimensie:** Sleep het veld `Year` hierheen.
    *   **Statistiek:** Sleep opnieuw `Global_Sales` hierheen.

Je ziet nu een lijngrafiek die de totale wereldwijde verkoop van games per jaar laat zien. Je kunt waarschijnlijk een duidelijke piek zien in de late jaren 2000.

### 7.3.5 Stap 4: Een scorekaart en een tabel toevoegen

*   **Scorekaart:** Voeg een **scorekaart** toe om één belangrijk getal te benadrukken. Sleep `Global_Sales` als statistiek om de *totale* verkoop van alle games te tonen.
*   **Tabel:** Voeg een **tabel** toe om de top 10 best verkochte games te tonen.
    *   **Dimensies:** `Rank`, `Name`, `Platform`.
    *   **Statistiek:** `Global_Sales`.
    *   **Filteren:** In het Eigenschappen-paneel, onder "Aantal rijen", kies je voor 10.

### 7.3.6 Stap 5: Het dashboard interactief maken

Voeg een **filter** toe aan je dashboard.
1.  Klik op **Besturingselement toevoegen** en kies **Lijst met dropdownmenu**.
2.  Kies `Platform` als het **Besturingsveld**.

Nu kun je in de "Weergave"-modus van je dashboard een specifiek platform selecteren (bv. "Wii"), en alle grafieken op je dashboard zullen zich automatisch filteren om alleen de data voor dat platform te tonen.

### Conclusie en opdracht

Je hebt zojuist je eerste interactieve BI-dashboard gebouwd! Je hebt ruwe data uit een spreadsheet omgezet in een visueel en interactief rapport dat inzicht geeft in de verkoop van videogames.

**Opdracht:** Experimenteer verder met de tool. Probeer de volgende visualisaties zelf toe te voegen aan je dashboard:
1.  Een **cirkeldiagram** dat de verdeling van de verkoop over de verschillende regio's (`NA_Sales`, `EU_Sales`, `JP_Sales`, `Other_Sales`) toont voor een specifieke game of genre.
2.  Een **kaart** die de totale verkoop per regio visualiseert.
