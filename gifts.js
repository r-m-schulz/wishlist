// ============================================
// GIFT WISHLIST DATA - EDIT THIS FILE!
// ============================================
// 
// To add or edit gifts, simply modify the array below.
// Each gift needs:
//   - title: The name of the gift
//   - description: A description of the gift
//   - image: Path to an image file in the "gifts" folder (e.g., "gifts/watch.jpg")
//            OR a URL to an image (e.g., "https://images.unsplash.com/...")
//   - links: Array of objects with "text" and "url" for purchase links
//
// TIP: Just drop your screenshots/images into the "gifts" folder and reference them like:
//      image: "gifts/my-image.jpg"
//
// Example:
// {
//     title: "Smart Watch",
//     description: "A modern smartwatch to help track fitness goals.",
//     image: "gifts/watch.jpg",  // Local file in gifts folder
//     links: [
//         { text: "View on Amazon", url: "https://www.amazon.com/s?k=smartwatch" },
//         { text: "View on Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smartwatch" }
//     ]
// }

const gifts = [
    {
        title: "Metallband für meine Uhr",
        description: "Ich habe eine so so coole Uhr die ich sau gerne hab und gerne öfter tragen möchte. Manchmal finde ich sie aber fast zu bunt und vielleicht zu Aufmerksamkeitserregend. Dann habe ich gesehen, dass es dafür auch ein silbernes Band gibt. Das wäre echt cool. - Achtung: Der Link hier führt leider nicht direkt zum Band, das konnte ich nicht finden :/",
        image: "gifts/watch.jpg",  
        links: [
            { text: "Auf Tag Heuer ansehen", url: "https://www.tagheuer.com/us/en/timepieces/collections/tag-heuer-formula-1/43-mm-quartz/CAZ1014.BA0842.html" },
            { text: "Den Link den ich gefunden hab :/", url: "https://www.google.com/search?q=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&sca_esv=0ce76fe6310e19b4&ei=BkcNadrJNcGG4-EPk7TVsQU&ved=0ahUKEwja5KLI7d6QAxVBwzgGHRNaNVYQ4dUDCBE&uact=5&oq=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&gs_lp=Egxnd3Mtd2l6LXNlcnAiMmhhYkxlaWRlcktlaW5lbkxpbmtEYWbDvHJHZWZ1bmRlbkljaFdlacOfQXVjaE5pY2h0SOdrUABYj2lwBXgAkAEBmAGxA6ABzVWqAQswLjM0LjE1LjEuMrgBA8gBAPgBAZgCJ6ACkjioAgrCAhQQLhiABBiRAhi0AhiKBRjqAtgBAcICFBAAGIAEGJECGLQCGIoFGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAAGIAEGJECGIoFGEYY-QHCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBixAxiDARiKBcICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAioQABiABBiRAhiKBRhGGPkBGJcFGIwFGN0EGEYY-QEY9AMY9QMY9gPYAQLCAg4QLhiABBiRAhjUAhiKBcICBRAuGIAEwgIIEC4YgAQYsQPCAgsQLhiABBiRAhiKBcICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGK8BwgIaEC4YgAQYkQIYigUYlwUY3AQY3gQY3wTYAQLCAhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAsICBhAAGBYYHsICCBAAGBYYChgewgIJEAAYgAQYChgLwgINEC4YgAQYxwEYChivAcICCRAuGIAEGAoYC8ICBRAAGO8FwgIIEAAYgAQYogTCAggQABiiBBiJBZgDDvEFAcuZFAVSbVi6BgQIARgHugYGCAIQARgTkgcLNS4yMC4xMy4wLjGgB__PAbIHCzAuMjAuMTMuMC4xuAfjN8IHCzEuMTEuMjAuNi4xyAfOAQ&sclient=gws-wiz-serp" },
        ]
    },
    {
        title: "Mein Parfüm",
        description: "Ich habe das Parfüm, dass mir Papa mal vermacht hat und es ist ein echt nices Daily Parfüm. Das wünsche ich mir wieder.",
        image: "gifts/parfum.jpg",  
        links: [
            { text: "Auf Idealo Preisvergleich ansehen", url: "https://www.idealo.de/preisvergleich/OffersOfProduct/804245_-l-homme-eau-de-toilette-100ml-yves-saint-laurent.html" }
        ]
    },
    {
        title: "Ein neues Perfüm maybe",
        description: "Ich habe mit Mama mal ein paar getestet und andere leckere gefunden vielleicht davon mal ein kleines um es auszuprobieren!",
        image: "gifts/perfumes.jpg",
        links: [
            { text: "Den Link den ich gefunden hab :/", url: "https://www.google.com/search?q=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&sca_esv=0ce76fe6310e19b4&ei=BkcNadrJNcGG4-EPk7TVsQU&ved=0ahUKEwja5KLI7d6QAxVBwzgGHRNaNVYQ4dUDCBE&uact=5&oq=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&gs_lp=Egxnd3Mtd2l6LXNlcnAiMmhhYkxlaWRlcktlaW5lbkxpbmtEYWbDvHJHZWZ1bmRlbkljaFdlacOfQXVjaE5pY2h0SOdrUABYj2lwBXgAkAEBmAGxA6ABzVWqAQswLjM0LjE1LjEuMrgBA8gBAPgBAZgCJ6ACkjioAgrCAhQQLhiABBiRAhi0AhiKBRjqAtgBAcICFBAAGIAEGJECGLQCGIoFGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAAGIAEGJECGIoFGEYY-QHCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBixAxiDARiKBcICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAioQABiABBiRAhiKBRhGGPkBGJcFGIwFGN0EGEYY-QEY9AMY9QMY9gPYAQLCAg4QLhiABBiRAhjUAhiKBcICBRAuGIAEwgIIEC4YgAQYsQPCAgsQLhiABBiRAhiKBcICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGK8BwgIaEC4YgAQYkQIYigUYlwUY3AQY3gQY3wTYAQLCAhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAsICBhAAGBYYHsICCBAAGBYYChgewgIJEAAYgAQYChgLwgINEC4YgAQYxwEYChivAcICCRAuGIAEGAoYC8ICBRAAGO8FwgIIEAAYgAQYogTCAggQABiiBBiJBZgDDvEFAcuZFAVSbVi6BgQIARgHugYGCAIQARgTkgcLNS4yMC4xMy4wLjGgB__PAbIHCzAuMjAuMTMuMC4xuAfjN8IHCzEuMTEuMjAuNi4xyAfOAQ&sclient=gws-wiz-serp" },
        ]
    },
    {
        title: "Beisteuerung für eine neue Drohne?!?!?",
        description: "Ihr wisst ja meine Drohne ist schwimmen gegangen... kurzer Rest in Peace Moment... und ich glaube wenn ich weiter fliegen will hab ich nicht viel wahl ausser eine neue mir anzuschaffen. Ich bin zwischne der DJI AVATA2 und der DJI Mini 5 (meine Drohne in neuer), vielleicht will der Weihnachtsmann mich ja da unterstützen!",
        image: "gifts/drone.jpg",
        links: [
            { text: "DJI AVATA2", url: "https://www.dji.com/au/avata-2?site=brandsite&from=landing_page" },
            { text: "DJI Mini 5", url: "https://www.dji.com/au/mini-5-pro?site=brandsite&from=landing_page" },
            { text: "Comparison", url: "https://youtu.be/jrrQh-qbeoU?si=7nmm4Ml-p5rpMsiE" },
            { text: "RIP meine Drohne", modalImage: "gifts/sad_drone.jpg", modalText: "RIP meine Drohne 😢" }
        ]
    },
    {
        title: "Ein cooles Buch über Investments oder Business Processes",
        description: "Ich finde Investments sind super wichtig aber auch Business generell wie es funktioniert (auch bezogen auf Psychology und so) und da würde ich glaube ich gerne mehr lernen. Deswegen gibt es da ja ein cooles was es gibt mit dem ich genau das machen kann!",
        image: "gifts/investments.jpg",
        links: [
            { text: "Website vom bro", url: "https://buchhandlung-eulennest.buchkatalog.de" },
            { text: "Spot vom bro", url: "https://maps.app.goo.gl/sEP6gngynDUWHKUG6" },
            { text: "Natürlich nehme ich das auch!", url: "https://www.amazon.com/Toolbox-zur-Konfliktlösung-erfolgreich-Weiterbildung-ebook/dp/B0CZR3DDK6/ref=sr_1_2?crid=20UV7RTG7AUO7&dib=eyJ2IjoiMSJ9._3kKDjKrswpFvP1cSYdX_zN7wJ0Yom0YTSMGO0ySR5_GjHj071QN20LucGBJIEps.BIcOZOFMW84dvJIZ8r74dsMlxelJ3D8YYylA9VULRQU&dib_tag=se&keywords=rolf+Schulz+toolbox+zur+konfliktlösung&qid=1762570988&refresh=1&sprefix=rolf+schulz+toolbox+zur+konfliktlös%2Caps%2C320&sr=8-2" },
        ]
    },
    {
        title: "Skifahren mit der Fam",
        description: "Ich habe Lust auf Quality Time mit der Fam. Lass mal schauen vielleicht schaffen wir ja die Pisten unsicher zu machen!",
        image: "gifts/skiFahren.jpeg",
        links: [
            { text: "Hier hin auf Lock", url: "https://maps.app.goo.gl/kK4swLfy2o7MdGiw9" },
        ]
    },
    {
        title: "Ein Panzergläschen",
        description: "Mein Handy ist tot, vielleicht eine Sicherungsscheibe vielleicht!",
        image: "gifts/panzerglas.jpg",
        links: [
            { text: "Hier gibt es paar", url: "https://www.amazon.com.au/s?k=torras+screenprotector+iphone+13&crid=NQZK55M5URHT&sprefix=torras+screen+protector+iphone+1%2Caps%2C260&ref=nb_sb_noss_2" },
        ]
    },
    {
        title: "Ein paar Lünetten",
        description: "Vielleicht ein paar Lünetten für den nächsten Urlaub?",
        image: "gifts/sonnenbrille.jpg",
        links: [
        { text: "Den Link den ich gefunden hab :/", url: "https://www.google.com/search?q=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&sca_esv=0ce76fe6310e19b4&ei=BkcNadrJNcGG4-EPk7TVsQU&ved=0ahUKEwja5KLI7d6QAxVBwzgGHRNaNVYQ4dUDCBE&uact=5&oq=habLeiderKeinenLinkDaf%C3%BCrGefundenIchWei%C3%9FAuchNicht&gs_lp=Egxnd3Mtd2l6LXNlcnAiMmhhYkxlaWRlcktlaW5lbkxpbmtEYWbDvHJHZWZ1bmRlbkljaFdlacOfQXVjaE5pY2h0SOdrUABYj2lwBXgAkAEBmAGxA6ABzVWqAQswLjM0LjE1LjEuMrgBA8gBAPgBAZgCJ6ACkjioAgrCAhQQLhiABBiRAhi0AhiKBRjqAtgBAcICFBAAGIAEGJECGLQCGIoFGOoC2AEBwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAAGIAEGJECGIoFGEYY-QHCAgsQABiABBiRAhiKBcICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMY0QMYxwHCAg4QLhiABBixAxiDARiKBcICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAioQABiABBiRAhiKBRhGGPkBGJcFGIwFGN0EGEYY-QEY9AMY9QMY9gPYAQLCAg4QLhiABBiRAhjUAhiKBcICBRAuGIAEwgIIEC4YgAQYsQPCAgsQLhiABBiRAhiKBcICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGK8BwgIaEC4YgAQYkQIYigUYlwUY3AQY3gQY3wTYAQLCAhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAsICBhAAGBYYHsICCBAAGBYYChgewgIJEAAYgAQYChgLwgINEC4YgAQYxwEYChivAcICCRAuGIAEGAoYC8ICBRAAGO8FwgIIEAAYgAQYogTCAggQABiiBBiJBZgDDvEFAcuZFAVSbVi6BgQIARgHugYGCAIQARgTkgcLNS4yMC4xMy4wLjGgB__PAbIHCzAuMjAuMTMuMC4xuAfjN8IHCzEuMTEuMjAuNi4xyAfOAQ&sclient=gws-wiz-serp" },
        ]
    },
    {
        title: "Coole Outfits",
        description: "Ich bin nicht so ein Hübscher wie der Papa aber vielleicht ein paar schicke Sachen um da näher dran zu kommen? Weil Kleider machen Leute und so!! Unddd ich hab ja immer paar coole Jumper bekommen oder paar coole Hemden oder vielleicht sogar einen Anzug der mir passt oder so?! Ich geh auch gern durch Papas Sachen stöbern einfach irgendwas um more presentable zu sein! Weil underdressed zu sein macht mich bisschen mulmig hahahah! Hab ja vom Christkind schon einiges cooles bekommen die letzten Jahre wei die ganzen Zipper die ich liebe. Deswegen dachte ich ich schreibe es mal auf!!!",
        image: "gifts/suit.jpg",
        links: [
         { text: "Hier habe ich schon cooles Gefunden!", url: "https://maps.app.goo.gl/4xUPVRLX4FdoSvhw7" },
         { text: "Hier gibt es auch mega Zip Jumper und Suits", url: "https://maps.app.goo.gl/P9XXHRinVawrFezs6" },
        ]
    },
    
];

