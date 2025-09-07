# 6.4 Analyse van Eenvoudige Algoritmen

Nu we de Big O notatie kennen, kunnen we beginnen met het analyseren van de tijdcomplexiteit van eenvoudige Python codefragmenten en algoritmen. Het doel is om te bepalen hoe de uitvoeringstijd schaalt met de grootte van de input `n`.

## Basisregels voor tijdcomplexiteit analyse

1.  **Enkele statements (O(1)):** Basisoperaties zoals toekenning (`=`), rekenkundige operaties (`+`, `-`, `*`, `/`), vergelijkingen (`==`, `>`, `<`), toegang tot een lijst via index (`lijst[i]`), en `append()` op een lijst duren (gemiddeld) constante tijd, O(1). Ze hangen niet af van de grootte van de input.

    ```python
    x = 5       # O(1)
    y = x * 2   # O(1)
    print(y)    # O(1)
    mijn_lijst.append(10) # Gemiddeld O(1)
    ```

2.  **Sequentie van statements:** Voor een reeks statements tel je hun complexiteiten op. De totale complexiteit wordt gedomineerd door het statement met de hoogste complexiteit.

    ```python
    a = 1                     # O(1)
    b = 2                     # O(1)
    for i in range(n):        # Loop is O(n)
        print(i)              # Body is O(1)
    c = 3                     # O(1)
    
    # Totale complexiteit: O(1) + O(1) + O(n) + O(1) = O(n)
    ```

3.  **`if-else` statements:** De complexiteit is de complexiteit van de *conditie* plus de complexiteit van de *duurste tak* (de `if`-tak of de `else`-tak) in het worst-case scenario.

    ```python
    if n > 10:         # Conditie is O(1)
        # Blok 1: Stel dit is O(n)
        for i in range(n):
            print(i)
    else:
        # Blok 2: Stel dit is O(1)
        print("Klein")
        
    # Totale complexiteit = O(1) (conditie) + O(n) (duurste tak) = O(n)
    ```

4.  **`for`-lussen:** De complexiteit is (ongeveer) het *aantal iteraties* vermenigvuldigd met de *complexiteit van de code binnen de lus*.

    *   **Simpele loop:**
        ```python
        # Loop draait n keer, body is O(1)
        for i in range(n):
            print("Hallo") 
        # Totale complexiteit = n * O(1) = O(n)
        ```

    *   **Loop met complexere body:**
        ```python
        # Loop draait n keer
        for i in range(n):
            # Stel deze inner loop is O(n)
            for j in range(n):
                print(i, j)
        # Totale complexiteit = n * O(n) = O(n²)
        ```

5.  **Geneste lussen:** Vermenigvuldig de complexiteit van de buitenste lus met de complexiteit van de binnenste lus.

    ```python
    # Buitenste loop: n iteraties
    for i in range(n):
        # Binnenste loop: n iteraties, body O(1)
        for j in range(n):
            print(i, j) # O(1)
    # Totale complexiteit = n * (n * O(1)) = O(n²)
    ```

    ```python
    # Buitenste loop: n iteraties
    for i in range(n):
        # Binnenste loop: m iteraties, body O(1)
        for j in range(m):
            print(i, j) # O(1)
    # Totale complexiteit = n * (m * O(1)) = O(n*m)
    ```

## Analyse van basis lijstoperaties

Laten we de complexiteit van enkele veelgebruikte lijstoperaties bekijken, waarbij `n` de lengte van de lijst is:

*   **Index Toegang (`lijst[i]`): O(1)**
    Python lijsten zijn geïmplementeerd zodat je direct naar elk element kunt springen via zijn index, ongeacht de grootte van de lijst.
*   **Toevoegen aan Einde (`lijst.append(x)`): O(1) (gemiddeld/geamortiseerd)**
    Meestal is er ruimte aan het einde van de lijst en kost toevoegen O(1). Heel soms moet de lijst intern worden vergroot, wat O(n) kost, maar dit gebeurt zelden genoeg zodat de *gemiddelde* kosten O(1) zijn.
*   **Invoegen (`lijst.insert(i, x)`): O(n)**
    Om ruimte te maken op index `i`, moeten alle elementen vanaf `i` tot het einde één positie opschuiven. In het worst-case (invoegen op index 0) moeten `n` elementen verplaatst worden.
*   **Verwijderen (`lijst.pop(i)`): O(n)**
    Vergelijkbaar met invoegen: na het verwijderen van het element op index `i`, moeten alle elementen na `i` één positie terugschuiven om het gat op te vullen.
*   **Verwijderen van Einde (`lijst.pop()`): O(1)**
    Het laatste element verwijderen is snel, er hoeven geen andere elementen te verschuiven.
*   **Zoeken (`x in lijst`): O(n)**
    In het worst-case scenario moet Python de hele lijst doorlopen om te zien of `x` aanwezig is (lineair zoeken).
*   **Lengte (`len(lijst)`): O(1)**
    Python houdt de lengte van de lijst bij, dus `len()` opvragen is direct.
*   **Sorteren (`lijst.sort()` of `sorted(lijst)`): O(n log n)**
    Python's ingebouwde sorteeralgoritme (Timsort) is zeer efficiënt.

## Vergelijking: lineair zoeken vs. index toegang

Stel je hebt een lijst `data = [10, 20, 30, 40, 50]`.

*   Het getal `30` vinden: `30 in data` vereist mogelijk het controleren van `10`, `20`, en dan `30`. In het worst-case (zoeken naar `60`) moet je de hele lijst door. Dit is **O(n)**.
*   Het derde element (`30`) opvragen: `data[2]` is directe toegang via index. Dit is **O(1)**.

Dit illustreert waarom de *manier* waarop je data benadert een grote impact kan hebben op de efficiëntie.

**Vooruitblik:** Als de lijst *gesorteerd* zou zijn, zouden we veel sneller kunnen zoeken met een techniek genaamd binair zoeken, die **O(log n)** is. Dit komt aan bod in Hoofdstuk 7. 