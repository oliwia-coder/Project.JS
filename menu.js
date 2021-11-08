'use strict';


const menuList = [
    // DRINKI
    {
        name: 'Wódka Żóbrowka Biała + soft',
        price: 14
    },
    {
        name: 'Wódka Finlandia/Smironff Black + soft',
        price: 18
    },
    {
        name: 'Whisky + soft',
        price: 19
    },
    {
        name: 'Gin + tonik',
        price: 19
    },
    {
        name: 'Rum + Coca-Cola',
        price: 19
    },
    {
        name: 'JagerBomba',
        price: 22
    },
    {
        name: 'Sour Wódka',
        price: 16
    },
    {
        name: 'Sour Whisky',
        price: 21
    },
    {
        name: 'Sour Jagermeister',
        price: 20
    },
    {
        name: 'Sour Truskawkowy',
        price: 23
    },
    {
        name: 'Mojito',
        price: 20
    },
    {
        name: 'Cuba libre',
        price: 19
    },
    {
        name: 'Banana Manana',
        price: 22
    },
    {
        name: 'Daiquiri',
        price: 20
    },
    {
        name: 'Tom Collins',
        price: 19
    },
    {
        name: 'Negroni',
        price: 27
    },
    {
        name: 'Avangarda Drink',
        price: 19
    },
    {
        name: 'Mojito Avangarda',
        price: 20
    },
    {
        name: 'Caipiroska',
        price: 18
    },
    {
        name: 'Screwdriver',
        price: 18
    },
    {
        name: 'Kamikadze 4 x 40 ml',
        price: 22
    },
    {
        name: 'Espresso Martini',
        price: 22
    },
    {
        name: 'Cosmopolitan',
        price: 24
    },
    {
        name: 'Bialy Rusek/ White Russian',
        price: 20
    },
    {
        name: 'Czarny Rusek/ Black Russian',
        price: 19
    },
    {
        name: 'Sex on the Beach',
        price: 21
    },
    {
        name: 'San Francisco',
        price: 22
    },
    {
        name: 'Gin + tonik',
        price: 19
    },
    {
        name: 'Apple John',
        price: 19
    },
    {
        name: 'Mint Julep',
        price: 20
    },
    {
        name: 'Manhattan',
        price: 28
    },
    {
        name: 'Jack Daniels Lychburg Lemonade',
        price: 26
    },
    {
        name: 'Long Island Ice Tea',
        price: 38
    },
    {
        name: 'Margarita',
        price: 25
    },
    {
        name: 'Margarita Truskawkowa',
        price: 27
    },
    {
        name: 'Tequila Sunrise.',
        price: 22
    },
    {
        name: 'Martini & Tonic/Sprite',
        price: 18
    },
    {
        name: 'Aperol Spritz',
        price: 25
    },
    {
        name: 'Hugo Spritz',
        price: 22
    },
    {
        name: 'Campari Orange',
        price: 20
    },
    {
        name: 'Campari Tonic/Soda',
        price: 20
    },
    {
        name: 'Americano',
        price: 25
    },
    {
        name: 'BMW',
        price: 26
    },
    {
        name: 'Pinacolada',
        price: 22
    },
    {
        name: 'Sour Jagermeister',
        price: 20
    },
    {
        name: 'Sour Truskawkowy',
        price: 23
    },
//    BEZ ALKO
    {
        name: 'Mojito',
        price: 13
    },
    {
        name: 'Pinacolada',
        price: 13
    },
    {
        name: 'San Francisco',
        price: 13
    },
    // ALKOCHOLE
    // shot
    {
        name: 'Wódka Żubrówka biała',
        price: 8
    },
    {
        name: 'Żubrówka czarna',
        price: 10
    },
    {
        name: 'Finlandia / Smirnoff Black',
        price: 11
    },
    {
        name: 'Żołądkowa gorzka',
        price: 8
    },
    {
        name: 'Żołądkowa gorzka z figą/miętą',
        price: 8
    },
    {
        name: 'Avangardówka autorska nalewka z pomarańczy',
        price: 6
    },
    {
        name: 'Soplica smakowa',
        price: 8
    },
    {
        name: 'Wściekły Pies',
        price: 10
    },
    {
        name: 'Pszczółka',
        price: 10
    },
    {
        name: 'Małpi Mózg',
        price: 13
    },
    {
        name: 'Jagermeister',
        price: 12
    },
    {
        name: 'Avangarda Bucket 1l',
        price: 55
    },
    // ALKO BUTELKA
    {
        name: 'Wódka Żubrówka biała 0,5 l',
        price: 70
    },
    {
        name: 'Żubrówka Czarna 0,5 l',
        price: 90
    },
    {
        name: 'Finlandia/ Smirnoff Black 0,5 l',
        price: 110
    },
    {
        name: 'Finlandia/ Smirnoff Black 0,7l',
        price: 140
    },
    {
        name: 'Avangardówka 0,5 l',
        price: 60
    },
    {
        name: 'Avangardówka 1 l',
        price: 100
    },
    {
        name: 'Jagermeister 0,7 l',
        price: 170
    },
    {
        name: 'Grants/ Ballantines/ Jameson/ Bushmills/ Tullamore Dew 0,7l',
        price: 190
    },
    {
        name: 'Jack Daniels 0,7 l',
        price: 230
    },
    // Whisky /Burbon (40 ml)
    {
        name: 'Ballantines',
        price: 13
    },
    {
        name: 'Grants',
        price: 13
    },
    {
        name: 'Jameson',
        price: 13
    },
    {
        name: 'Bushmills',
        price: 13
    },
    {
        name: 'Tullamore Dew',
        price: 13
    },
    {
        name: 'Wild Turkey 81',
        price: 13
    },
    {
        name: 'Wilk Turkey 101.',
        price: 16
    },
    {
        name: 'Jack Daniels',
        price: 15
    },
    {
        name: 'Bulleit Bourbon.',
        price: 16
    },
    {
        name: 'Bulleit Bourbon Rye',
        price: 16
    },
    {
        name: 'Chivas Regal 12y',
        price: 16
    },
    {
        name: 'Talisker Single Malt Scotch Whisky 10y',
        price: 28
    },
    {
        name: 'Aberlour Speyside Single Malt Scotch Whisky 12Y',
        price: 25
    },
    // RUM
    {
        name: 'Captain Morgan Jamaica',
        price: 13
    },
    {
        name: 'Captain Morgan Spiced',
        price: 13
    },
    {
        name: 'Captain Morgan White',
        price: 13
    },
    // Gin
    {
        name: 'Gordon’s',
        price: 13
    },
    {
        name: 'Gordon’s Pink',
        price: 14
    },
    {
        name: 'Beefeater',
        price: 13
    },
    // TEQUILA
    {
        name: 'Sierra Silver',
        price: 14
    },
    {
        name: 'Sierra Gold',
        price: 15
    },
    // KONIAK
    {
        name: 'Metaxa',
        price: 13
    },
    {
        name: 'Hardy',
        price: 20
    },
    
    // LIKIER
    {
        name: 'Baileys',
        price: 13
    },
    {
        name: 'Malibu',
        price: 13
    },
    {
        name: 'Campari',
        price: 16
    },
    {
        name: 'Kahlua',
        price: 13
    },
    // WINO
    {
        name: 'Wino Białe (150 ml)',
        price: 13
    },
    {
        name: 'Wino Białe butelka (750 ml)',
        price: 70
    },
    {
        name: 'Wino Czerwone (150 ml)',
        price: 13
    },
    {
        name: ' Wino Czerwone butelka (750 ml)',
        price: 70
    },
    {
        name: 'Wino Karafka 0,5 l',
        price: 40
    },
    {
        name: 'Wino Karafka 1 l',
        price: 60
    },
    {
        name: 'Sangria Karafka 0,5 l',
        price: 30
    },
    {
        name: 'Sangria Karafka 0,5 l',
        price: 50
    },
    //WINO GRZANE
    {
        name: 'Grzaniec Galicyjski ',
        price: 13
    },
    {
        name: 'Grzaniec bez alkoholowy',
        price: 10
    },
    {
        name: 'Martini Bianco/Rosso/Fiero',
        price: 16
    },
    {
        name: 'Cydr półwytrawny jabłko',
        price: 12
    },
    {
        name: 'Prosecco',
        price: 16
    },
    {
        name: 'Prosecco Butelka',
        price: 70
    },
    //NAPOJE
    {
        name: 'Lemoniada cytrynowa 0,3l',
        price: 8
    },
    {
        name: 'Lemoniada cytrynowa 0,5l,',
        price: 15
    },
    {
        name: 'Lemoniada cytrynowa 1l',
        price: 30
    },
    {
        name: 'Coca-Cola 0,25 ml',
        price: 8
    },
    {
        name: 'Coca-Cola 850 ml',
        price: 16
    },
    {
        name: 'Coca-Cola Zero 0,25 ml',
        price: 8
    },
    {
        name: 'Sprite 0,25 ml',
        price: 8
    },
    {
        name: 'Fanta 0,25 ml',
        price: 8
    },
    {
        name: 'Tonik Kinley 0,25 ml',
        price: 8
    },
    {
        name: 'Tonik Kinley Mojito 0,25 ml',
        price: 8
    },
    {
        name: 'Sok Cappy ,Juice 0,25 ml ',
        price: 8
    },
    {
        name: 'Sok Cappy ,Juice 1 litr',
        price: 16
    },
    {
        name: 'Red Bull',
        price: 10
    },
    {
        name: 'On Lemon',
        price: 10
    },
    {
        name: 'Woda gazowana/niegazowana',
        price: 19
    },
    // KAWA
    {
        name: 'Espresso',
        price: 9
    },
    {
        name: 'Espresso Dopio',
        price: 12
    },
    {
        name: 'Americana',
        price: 9
    },
    {
        name: 'Cappuccino',
        price: 12
    },
    {
        name: 'Latte',
        price: 12
    },
    {
        name: 'Irish Coffee',
        price: 22
    },
    //HERBATA
    {
        name: 'Herbata Carna',
        price: 8
    },
    {
        name: 'Herbata Zielona',
        price: 12
    },
    //CZEKOLADA
    {
        name: 'Gorąca czekolada',
        price: 15
    },
    //JEDZENIE
    {
        name: 'Pierogi z mięsem',
        price: 22
    },
    {
        name: 'Pierogi ruskie z boczkiem lub bez',
        price: 22
    },
    {
        name: 'Pierogi z pieczarkami i serem',
        price: 22
    },
    {
        name: 'Pierogi z owocami',
        price: 22
    },
    {
        name: 'Pielmienie',
        price: 20
    },
    {
        name: 'Pielmienie z domowym czerwonym barszczem',
        price: 18
    },
    {
        name: 'Barszcz czerwony czysty',
        price: 7
    },
    {
        name: 'Deska specjałó',
        price: 35
    },
    {
        name: 'Focaccia',
        price: 12
    },
    {
        name: 'Sandwich Avangarda',
        price: 17
    },
    {
        name: 'Zapiekanka Francuska',
        price: 13
    },
    {
        name: 'Curry Wurst',
        price: 12
    },
    {
        name: 'Pajda ze smalcem',
        price: 8
    },
// IDEALNE DO PIWA PRZEKASKI 
    {
        name: 'Krążk i cebulowe z dipem',
        price: 12
    },
    {
        name: 'Chrupiące łódeczki ziemniaczane z dipem',
        price: 12
    },
    {
        name: 'Krokiety ziemniaczane z dipem',
        price: 14
    },
    {
        name: 'Dodatkowe sosy',
        price: 2
    },
    //PRZEKĄSKI
    {
        name: 'Nachosy + salsa',
        price: 10
    },
    {
        name: 'Chipsy',
        price: 7
    },
    {
        name: 'Orzeszki ziemne solone',
        price: 7
    },
    //ROZGRZEWAJĄCE 
    {
        name: 'Grzane piwo',
        price: 12
    },
    {
        name: 'Grzane Wino Tradycyje',
        price: 13
    },   
    {
        name: 'Grzane Wino Red Hot Chilli',
        price: 13
    },
    {
        name: 'Grzane Wino Miodowy',
        price: 13
    },
    {
        name: 'Grzane Wino Bezalkoholowy',
        price: 10
    },
    //Rozgrzewajace Herbatki
    {
        name: 'Herbata Z Rumem ',
        price: 17
    },
    {
        name: 'Herbata Z Wisniakiem',
        price: 16
    },
    {
        name: 'Herbata Z Miodem pitnym',
        price: 17
    },
    {
        name: 'Herbata Z Whisky',
        price: 20
    },
    {
        name: 'Herbata Grog na wódce / na rumie',
        price: 16
    },
    {
        name: 'Herbata Grzaniec orientalny',
        price: 16
    },
    {
        name: 'Miód Pitny trójniak 100 ml',
        price: 10
    },
    {
        name: 'Miód Pitny trójniak 200 ml',
        price: 18
    },
    {
        name: 'Grzany Cydr',
        price: 14
    },
    //PIWO KRAN
    {
        name: 'IPA',
        price: 15
    },
    {
        name: 'APA',
        price: 15
    },
    {
        name: 'Przenica',
        price: 13
    },
    {
        name: 'Lager',
        price: 11
    },
    //PIWO BUTELKA 
    {
        name: 'Butelka IPA',
        price: 15
    },
    {
        name: 'Butelka APA',
        price: 15
    },
    {
        name: 'Butelka Przenica',
        price: 13
    },
    {
        name: 'Butelka Lager',
        price: 11
    },
    {
        name: 'Butelka Lager',
        price: 14
    },
    {
        name: 'Butelka IPA',
        price: 17
    },
    
    
]