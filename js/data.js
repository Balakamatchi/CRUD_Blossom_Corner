// ==========================================
// DEFAULT FLOWERS
// ==========================================

let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

if (flowers.length === 0) {

    flowers = [

        {
            id:1,
            name:"Rose Bouquet",
            price:1300,
            image:"Image/Rose.jpg"
        },

        {
            id:2,
            name:"Tulip Bouquet",
            price:1900,
            image:"Image/Tulip.jpg"
        },

        {
            id:3,
            name:"Lily Bouquet",
            price:1500,
            image:"Image/Lily.jpg"
        },

        {
            id:4,
            name:"Sunflower Bouquet",
            price:1100,
            image:"Image/Sunflower.jpg"
        },

        {
            id:5,
            name:"Orchid Bouquet",
            price:1400,
            image:"Image/Orchid.jpg"
        },

        {
            id:6,
            name:"Peonies Bouquet",
            price:1900,
            image:"Image/Peonies.jpg"
        },

        {
            id:7,
            name:"Hydrangeas Bouquet",
            price:1800,
            image:"Image/Hydrangeas.jpg"
        },

        {
            id:8,
            name:"Carnations Bouquet",
            price:1100,
            image:"Image/Carnations.jpg"
        },

        {
            id:9,
            name:"Gerberas Bouquet",
            price:1000,
            image:"Image/Gerberas.jpg"
        },

        {
            id:10,
            name:"Baby's Breath Bouquet",
            price:1250,
            image:"Image/Baby's Breath.jpg"
        }

    ];

    localStorage.setItem("flowers", JSON.stringify(flowers));

}

