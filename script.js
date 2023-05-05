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
        name:"bug",image:"bug.png"
    },
    {
        name:"car",image:"car.png"
    },
    {
        name:"hand-spock",image:"hand-spock.png"
    },
    {
        name:"moon",image:"moon.png"
    },
    {
        name:"futbol",image:"futbol.png"
    },
    {
        name:"lira-sign",image:"lira-sign.png"
    },
    {
        name:"snowflake",image:"snokeflake.png"
    },

];


// ----INITIAL TIME-----
let seconds  = 0;
let minutes = 0;
let movesCount = 0;

//----FOR TIMER -----
const timeGenerator = () => {
    seconds +=1;
}

// --- LOGIC FOR MINUTES
 if(seconds >= 60){
    minutes += 1;
    seconds = 0;
 }

// ---- FORMAT TIME BEFORE DISPLAYING-----

let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
timeValue.innerHTML = `${minutesValue}:${secondsValue}`;