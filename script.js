// SELECTORS
const moves = document.getElementById('moves');
const timeValue = document.getElementById('time');
const cardContainer = document.querySelector('.cardContainer');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');

//VARIABLES
let cards;
let interval;
let cardFront = false;
let cardBack = false;

// ---- ITEMS IN ARRAY------
const items = [
    {
        name:"anchor",image:"images/anchor.png"
    },
    
    {
        name:"flask",image:"images/flask.png"
    },
    {
        name:"bug",image:"images/bug.png"
    },
    {
        name:"car",image:"images/car.png"
    },
    {
        name:"hand-spock",image:"images/hand-spock.png"
    },
    {
        name:"moon",image:"images/moon.png"
    },
    {
        name:"futbol",image:"images/futbol.png"
    },
    {
        name:"lira-sign",image:"images/lira-sign.png"
    },
    {
        name:"snowflake",image:"images/snokeflake.png"
    },

];


// ----INITIAL TIME-----
let seconds  = 0;
let minutes = 0;

//initial moves and win count
let movesCount = 0;
winCount = 0;

//----FOR TIMER -----
const timeGenerator = () => {
    seconds +=1;

    
// --- LOGIC FOR MINUTES
 if(seconds >= 60){
    minutes += 1;
    seconds = 0;
 }

// ---- FORMAT TIME BEFORE DISPLAYING-----
let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
}

// ---- FOR CALCULATING MOVES --------
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>{movesCount}</span>`;
}

// ----PICK RANDOM OBJECTS FROM THE ITEMS ARRAY -----
const generateRandom = ( size = 4) =>{
    //--temporary array
    let tempArray = [...items];

    //initializes cardValues array
    let cardValues = [];

    // size should be double (4*4 matrix)/2 since pairs of objects would exits)
    size = (size * size) / 2;

    for(let i = 0; i < size; i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);

        // after selecting remove the objects from  temp Array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
}


const matrixGenerator = (cardValues, size = 4) =>{
    cardContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    // simle shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for(let i = 0; i < size * size; i++){
            /*
            Create Cards
            before
            after = actual image
            data-card-values os a custom attribute which 
            store the names of the cards to match later.
            */
           cardContainer.innerHTML +=`<div class="card-container" data-card-value="${cardValues[i].name}"
           <div class="card-before">?</div>
           <div class="card-after">
           <img src="${cardValues[i].image}" class="image">;
           </div>
           </div>`;
    }
}


// Initialize values and function calls

const initializer = () => {
   result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
   

}

initializer();