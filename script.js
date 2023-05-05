// SELECTORS
const moves = document.getElementById('moves');
const timeValue = document.getElementById('time');
const cardContainer = document.querySelector('.cardContainer');

//VARIABLES
let cards;
let interval;
let cardFront = false;
let cardBack = false;

// ---- ITEMS IN ARRAY------
const items = [
    {
        name:"anchor",image:"anchor.png"
    },
    
    {
        name:"flask",image:"flask.png"
    },
    {
        name:"1",image:"anchor.png"
    },
    {
        name:"1",image:"anchor.png"
    },

];