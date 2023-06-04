
// This sets the value of a constant called entireMarkup 
//to be the HTML content of the body element of the current page

const entireMarkup = document.body.innerHTML;



// This function includes some variable declarations and selector statements
function allFunctions() {
  // SELECTORS
  const theGameElement = document.querySelector(".the-game");
  const startingGameElement = document.querySelector(".starting-game");
  const gameDetailsElement = document.querySelector(".game-details");
  const overlayElement = document.querySelector(".overlay");
  const infoContainer = overlayElement.querySelector(".info-container");
  const theMessage  = document.querySelector(".the-message");



  //----- VARIABLES TO SELECT THE TYPE OF GAME THAT WILL BE USED LATER IN THE GAME
  let theGridSize = 4;
  let numberGameArray = [];
  let iconsGameArray = [];


//These are the icons put in an array
  const iconsMarkupArray = [
    `<div class="icon-wrapper"><img src="images/car.png"></div>`,
    `<div class="icon-wrapper"><img src="images/bug.png"></div>`,
    `<div class="icon-wrapper"><img src="images/flask.png"></div>`,
    `<div class="icon-wrapper"><img src="images/futbol.png"></div>`,
    `<div class="icon-wrapper"><img src="images/lira-sign.png"></div>`,
    `<div class="icon-wrapper"><img src="images/sun.png"></div>`,
    `<div class="icon-wrapper"><img src="images/hand-spock.png"></div>`,
    `<div class="icon-wrapper"><img src="images/moon.png"></div>`,
    `<div class="icon-wrapper"><img src="images/anchor.png"></div>`,
    `<div class="icon-wrapper"><img src="images/snowflake.png"></div>`,
    `<div class="icon-wrapper"><img src="images/car.png"></div>`,
    `<div class="icon-wrapper"><img src="images/bug.png"></div>`,
    `<div class="icon-wrapper"><img src="images/flask.png"></div>`,
    `<div class="icon-wrapper"><img src="images/futbol.png"></div>`,
    `<div class="icon-wrapper"><img src="images/lira-sign.png"></div>`,
    `<div class="icon-wrapper"><img src="images/sun.png"></div>`,
    `<div class="icon-wrapper"><img src="images/hand-spock.png"></div>`,
    `<div class="icon-wrapper"><img src="images/moon.png"></div>`,
    `<div class="icon-wrapper"><img src="images/anchor.png"></div>`,
    `<div class="icon-wrapper"><img src="images/snowflake.png"></div>`,

  ];



  // declare an array of active choices
  let activeChoices;



  // select the start game button
  const startGame = document.querySelector(".start-game");


  // This function selects the Choice elements on the page 
  //and filters the elements to only include those that have the active class.
  //It also maps over the remaining choices to get data-choice attribute 
  //from each one and create a new array of values called activeChoices
  
  function checkActiveChoice() {

    // select all the choices
    const allChocies = Array.from(document.querySelectorAll(".choice"));

    // loop over them and put them in a new array called active choices
    activeChoices = allChocies
    .filter((choice) => {
      return choice.classList.contains("active");
    })
    .map((ch) => {
      return ch.dataset.choice;
    });
    // call start the game function and pass to it the active choices array 
  startTheGame(activeChoices);
}


  // add an eventlistener to the start game button so when 
  // the button is clicked checkActiveChoice() is called

  startGame.addEventListener("click", checkActiveChoice);



  // activeIcons keeps track of how many icons are currently 
  // active(that have been clicked but not yet matched)
  let activeIcons = 0;



  // The two elementss are used to store two icons that have been clicked
  let element1;
  let element2;




  // is an array that holds the two clicked elements
  let arrayOfTwoClickedIcons = [];



  //lockFlip is a boolean that is used to prevent clicking 
  // one or more than two icons at once
  let lockFlip = false;



  // This is set to true when the game is over
  let isGameOver = false;


  // function will add an eventlistener to all the clicked icons
  function activeNonActive() {
    let icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
      icon.addEventListener("click", handlingClickIcons);
    });
  }


// This function switches the active class to the next player in the game
  function activeNextPlayer() {
    const activePlayer = document.querySelector(".detail-box.active");
    activePlayer.classList.remove("active");
    if (activePlayer.nextElementSibling) {
      activePlayer.nextElementSibling.classList.add("active");
    } else {
      document.querySelector(".detail-box").classList.add("active");
    }
  }
  




  // This runs when the icons has been clicked then checks if the lockFlip  
  //variable is false which means that the two icons are not already active
  //it also checks whether the arrayOfTwoClickedIcons array already
  // contains two elements then empties the array.

  
  const handlingClickIcons = function (e) {
    const theIcon = e.currentTarget;


    // check if the lock flip is not false
    if (!lockFlip) {


      
      // check if the the array of two clicked elements's length is equal to 2, if so empty the array
      if (arrayOfTwoClickedIcons.length === 2) {
        arrayOfTwoClickedIcons = [];
      }


      

      // check if the active icons no equal to 2 if they are the 
      //icons disabled and the number of pairs for the current player 
      //is incrementedif they are not equal the icons are marked
      // as not active after delay

      if (activeIcons !== 2) {

        // check if the icon doesn't have the class active
        if (!theIcon.classList.contains("active")) {
          theIcon.classList.add("active");
          theIcon.classList.remove("not-active");
          activeIcons++;
          if (activeIcons === 1) {
            
            // make the element 1 = the icon, and push this [element1]
            // to the [arrayOfTwoClickedIcons]
            element1 = theIcon;
            arrayOfTwoClickedIcons.push(element1);
          } else if (activeIcons === 2) {


            // the same with the second clicked icon but i you have to
            //  make the [lockFlip] = true, and make activeIcons = 0;
            element2 = theIcon;
            arrayOfTwoClickedIcons.push(element2);
            lockFlip = true;
            activeIcons = 0;


            // this increments the number of moves for the current player
            handlingMoves();

            // This is a helper function that checks whether two icons 
            // have the same dataset ID ie whether they are a match
            if (!areEqual(element1.dataset.id, element2.dataset.id)) {

              // Thus remove the active class from all the icons in the array parameter
              setTimeout(() => {
                addNotActiveClass(arrayOfTwoClickedIcons);
                lockFlip = false;

                // This switches the active class to the next player in the game
                activeNextPlayer();
              }, 1000);
            } else {

              setTimeout(() => {
                const activePlayer =
                  document.querySelector(".detail-box.active");
                const managePairs = activePlayer.querySelector(".moves");
                ++managePairs.dataset.pairs;
                lockFlip = false;
                element1.classList.add("disabled");
                element2.classList.add("disabled");
              }, 500);
            }
          }
        }
      }
    }
    // check if the game is over
    checkGameOver();
  };




  // selects all elements with class choice that are 
  //the children of elements with class choices  and 
  //save  them in the allChoices variable
  const allChoices = document.querySelectorAll(".choices .choice");



  // This loops over all the choices and adds a click eventlistener
// to each of them. When a choice is clicked, it checks if it doesn't have
//the class  active. if not it removes the class active from all the choices
// siblings and adds it to the clicked choice.

  function handlingChoices() {

    allChoices.forEach((choice) => {

      choice.addEventListener("click", function (e) {
      
        const theChoice = e.currentTarget;

        // save all the choice's parent's children in a variable
        // and turn it into an array [to take advantage of (forEach)]
        const allChidren = Array.from(theChoice.parentElement.children);
     
        if (!theChoice.classList.contains("active")) {
          // if so, loop over all of the choice's parent's children
          //  and remove the class active from them
          allChidren.forEach((child) => {
            child.classList.remove("active");
          });
          // and then add the class active to the clicked choice
          theChoice.classList.add("active");
        }
      });
    });
  }



  // This generates an array of objects that represent the icons to
  // be used in the game. The size of the array is determined by the gameSize
  // variable, is assigned 8 or 18 depending on the value of the theGridSize
  // Each object has a value property matching the icon's markup and a dataID
  // property that is used to match the icons during the game. 

  function generateIcons() {
    iconsGameArray = [];
    let gameSize = 8;
    if (theGridSize === 6) {
      gameSize = 18;
    }
    for (let i = 1; i <= gameSize; i++) {
      const obj = {
        value: iconsMarkupArray[i],
        dataId: i,
      };
      iconsGameArray.push(obj);
    }
    for (let i = 1; i <= gameSize; i++) {
      const obj = {
        value: iconsMarkupArray[i],
        dataId: i,
      };
      iconsGameArray.push(obj);
     
    }
    return iconsGameArray;
  }



  
  // generate the number function that will return
  // an array of objects
  function generateNums() {
    numberGameArray = [];
    let gameSize = 8;
    if (theGridSize === 6) {
      gameSize = 18;
    }

    for (let i = 1; i <= gameSize; i++) {
      const obj = {
        value: i,
        dataId: i,
      };
      numberGameArray.push(obj);
    }
    for (let i = 1; i <= gameSize; i++) {
      const obj = {
        value: i,
        dataId: i,
      };
      numberGameArray.push(obj);
    }

    return numberGameArray;
  }




  // This shuffles the elements in the arr array using  a 
  // random sort function and returns the shuffled array.
  function randomizeArray(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }




  // This generates the markup for the game grid.
  // Creates a div elements with class the-grid and a class that
  //that goes with the current grid size(grid-6 or grid-8)
  //Then creates a div elements with class row and div elements with class
  // icon for each row and column in the grid
  // It then adds the rows and colmns to the grid-container element and appends
  // the game details element to the body.


  function generateTheGame() {
    const theGridContainer = document.querySelector(".the-grid-container");
    theGridContainer.innerHTML = "";
    const grid = document.createElement("div");
    grid.classList.add("the-grid", `grid-${theGridSize}`);
    for (let i = 0; i < theGridSize; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < theGridSize; j++) {
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.textContent = 1;
        row.appendChild(icon);
      }
      grid.appendChild(row);
    }
    theGridContainer.appendChild(grid);
    const gameDetails = document.querySelector(".game-details");
    document.body.appendChild(gameDetails);
    gameDetails.classList.remove("d-none");
    activeFirstPlayer();
    activeNonActive();
  }






  // This updates the markup for the icons in the game
  //grid using the array of objects generated by either
  // generateIcons() or generateNums(). For each icon element
  // in the grid it sets the innerHTML to the value property that
  //goes with the object and the datasetID attribute to the dataid property
  // corresponding object.

  function fixingIconsMarkup(array) {
    const allTheIcons = document.querySelectorAll(".icon");
    allTheIcons.forEach((icon, index) => {
      icon.innerHTML = array[index].value;
      icon.dataset.id = array[index].dataId;
      icon.classList.add("icon-format");
    });
  }


  // This line calls the handlingChoices() function to set up the 
  // eventlisteners for the game choices
  handlingChoices();



  // This is called when the user starts the game by
  // clicking on a choice.It determines the game type
  //(numbers of icons) based on the first element of arr
  //parameter sets the grid size based on the third element
  //of the arr parameter and generates the game elements
  //using either generateIcons() or generateNums(), shuffles the
  //elements using randomizeArray(), generates the markup using
  //generateTheGame(), and updates the icons markup using fixingIconsMarkup()

  function startTheGame(arr) {
    theGameElement.classList.remove("d-none");
    startingGameElement.classList.add("d-none");
    if (arr[2] === "grid-6") {
      theGridSize = 6;
    }
    manageGameDetails(arr[1]);
    if (arr[0] === "numbers") {
      generateNums();
      randomizeArray(numberGameArray);
      generateTheGame();
      fixingIconsMarkup(numberGameArray);
    } else if (arr[0] === "icons") {
      generateIcons();
      randomizeArray(iconsGameArray);
      generateTheGame();
      fixingIconsMarkup(iconsGameArray);
    }
  }




// This takes an array of elements arr and adds the class
//  not active to each of them while removing two dataid values
  function addNotActiveClass(arr) {
    arr.forEach((element) => {
      element.classList.remove("active");
      element.classList.add("not-active");
    });
  }



  // This take two dataid values and returns true if they
  //are equal and false 
  function areEqual(dataId1, dataId2) {
    if (dataId1 === dataId2) {
      return true;
    } else {
      return false;
    }
  }



  // checking if all the icons has active class and depending 
  //on that the game is over
  function checkGameOver() {
    const allIcons = Array.from(document.querySelectorAll(".icon"));
    isGameOver = allIcons.every((icon) => icon.classList.contains("active"));
    if (isGameOver) {
      clearInterval(theIntervalOfTime);
      manageOverlay();
    }
    const totalPairs = theGridSize === 4 ? 8 : 18;
    const players = document.querySelectorAll(".detail-box");
    let maxPairs = 0;
    let winner = null;
  
    players.forEach((player) => {
      const pairs = parseInt(player.querySelector(".moves").dataset.pairs);
      if (pairs > maxPairs) {
        maxPairs = pairs;
        winner = player.querySelector(".name").textContent;
      }
    });
  
    if (maxPairs === totalPairs) {
      isGameOver = true;
      lockFlip = true;
      theMessage.textContent = `${winner} wins!`;
      overlayElement.classList.remove("d-none");
    }
    return isGameOver;
  }






  // ---- SETTING THE TIME
  //This selects the HTML element with a class 
  //of timer and sets two variables

  const timer = document.querySelector(".timer");
  let seconds = 0;
  let minutes = 0;



  
  // the function that will manage the time during the game

  function setTimer() {
    seconds++;
    if (seconds < 10) {
      timer.innerHTML = `${minutes}:0${seconds}`;
    } else if (seconds >= 10 && seconds < 60) {
      timer.innerHTML = `${minutes}:${seconds}`;
    } else if (seconds >= 60) {
      minutes++;
      seconds = 0;
      timer.innerHTML = `${minutes}:0${seconds}`;
    }
  }






// This variable stores the interval ID returned
//by setInterval() which will run the setTimer()
// every 1000 milliseconds

let theIntervalOfTime;


// This takes an argument players which is a string indicating
//how many players are playing the game. It checks if the players
//are equal to 1-player, the game details are updated to show the 
//number of moves and the time taken to play the game.The same applies to 
// the rest of the players

function manageGameDetails(players) {
    if (players === "1-player") {
      gameDetailsElement.classList.remove("d-none");
      gameDetailsElement.querySelector(".moves").textContent = "0";
      gameDetailsElement.querySelector(".moves").dataset.pairs = "0";
 

      theIntervalOfTime = setInterval(() => {
        setTimer();
      }, 1000);
    } else if (players === "2-players") {
      gameDetailsElement.innerHTML = "";
    
      for (let i = 1; i <= 2; i++) {
        generateDetailBox(i);
      }
    } else if (players === "3-players") {
      gameDetailsElement.innerHTML = "";
     
      for (let i = 1; i <= 3; i++) {
        generateDetailBox(i);
      }
    } else if (players === "4-players") {
      gameDetailsElement.innerHTML = "";
 
      for (let i = 1; i <= 4; i++) {
        generateDetailBox(i);
      }
   
    }
  
    
  }




  // the function that will take care of the game details of
  // there is more than one player playing

  function generateDetailBox(player) {
    const detailBox = document.createElement("div");
    detailBox.classList.add("detail-box");
    const lightText = document.createElement("p");
    lightText.classList.add("light-text");
    lightText.innerHTML = `Player ${player}`;
    const activeColor = document.createElement("p");
    activeColor.classList.add("active-color", "moves");
    activeColor.innerHTML = 0;
    activeColor.setAttribute("data-pairs", "0");
    detailBox.append(lightText, activeColor);
    gameDetailsElement.appendChild(detailBox);
  }





  // handling the moves of every player
  function handlingMoves() {
    const activePlayer = document.querySelector(".detail-box.active");
    let theMoves = Number(activePlayer.querySelector(".moves").textContent);
    theMoves++;
    activePlayer.querySelector(".moves").textContent = theMoves;
  }




  // active the first player in the first
  function activeFirstPlayer() {
    const firstPlayer = gameDetailsElement
      .querySelector(".moves")
      firstPlayer.parentElement.classList.add("active");
      
  }





  // activate the next player if the icons doesn't match
  function activeNextPlayer() {
    if (activeChoices[1] !== "1-player") {
      // moves = 0;
      const activePlayer = document.querySelector(".detail-box.active");
      if (activePlayer.nextElementSibling) {
        activePlayer.classList.remove("active");
        activePlayer.nextElementSibling.classList.add("active");
      } else {
        activePlayer.classList.remove("active");
        activePlayer.parentElement.children[0].classList.add("active");
      }
    }
  }




  // manage the overlay that appears when the game is over
  function manageOverlay() {
    document.body.classList.add("over");
    overlayElement.classList.remove("d-none");
  
    infoContainer.innerHTML = "";
  
    if (activeChoices[1] === "1-player") {
      overlayElement.querySelector(".time-result").textContent = timer.textContent;
      overlayElement.querySelector(".info-result.moves-result").textContent =
        `${document.querySelector(".detail-box .moves").textContent} Moves`;
      theMessage.innerHTML = "Player 1 wins!";
      generateInfoBox(1);
      addWinnerPlayer();
    } else {
      let winnerMessage = "";
      if (activeChoices[1] === "2-players") {
        winnerMessage = "Player 2 wins!";
      } else if (activeChoices[1] === "3-players") {
        winnerMessage = "Player 3 wins!";
      } else if (activeChoices[1] === "4-players") {
        winnerMessage = "Player 4 wins!";
      }
      theMessage.innerHTML = winnerMessage;
      for (let i = 1; i <= parseInt(activeChoices[1][0]); i++) {
        generateInfoBox(i);
      }
      addWinnerPlayer();
    }
  }
  


  // generate the information box for each player
  // displaying their number of moves and pairs

  function generateInfoBox(player) {
    const playerMoves = gameDetailsElement.children[player - 1].querySelector(".moves")
      .textContent;
    const playerPairs =
      gameDetailsElement.children[player - 1].querySelector(".moves").dataset.pairs;
    const infoBox = document.createElement("div");
    infoBox.classList.add("info-box");
    const infoName = document.createElement("p");
    infoName.classList.add("info-name");
    infoName.textContent = `Player ${player}`;
    const infoResCont = document.createElement("div");
    infoResCont.classList.add("info-result-container");
    const infoResult = document.createElement("p");
    infoResult.classList.add("info-result");
    infoResult.textContent = `${playerMoves} Moves`;
    const infoPairs = document.createElement("p");
    infoPairs.classList.add("info-pairs", "info-result");
    infoPairs.textContent = `${playerPairs} Pairs`;
    infoResCont.append(infoResult, infoPairs);
    infoBox.append(infoName, infoResCont);
    infoContainer.appendChild(infoBox);
  
    infoBox.addEventListener("click", () => {
      addWinnerPlayer();
    });
  }
  


  //This determines the winner of the game
  //and adds the active class to their information box
  // showing it

  function addWinnerPlayer() {
    const infoPairs = Array.from(overlayElement.querySelectorAll(".info-pairs"));
    const sortedPairs = infoPairs
      .map((element, index) => {
        return { val: parseInt(element.textContent), index: index };
      })
      .sort((a, b) => b.val - a.val);
  
    const infoBoxes = overlayElement.querySelectorAll(".info-box");
    infoBoxes.forEach((infoBox) => {
      infoBox.classList.remove("active");
    });
  
    infoBoxes[sortedPairs[0].index].classList.add("active");
  }
  



  // select the restart game buttons and loop over 
  // them to restart the game
  const restartGame = document.querySelectorAll(".restart-game");
  restartGame.forEach((btn) => {
    btn.addEventListener("click", restartTheGame);
  });




  


  // the function that will run when the user want to restart the game
  function restartTheGame() {
    activeIcons = 0;
    arrayOfTwoClickedIcons = [];
    clearInterval(theIntervalOfTime);
    overlayElement.classList.add("d-none");
    document.body.classList.remove("over");
    seconds = 0;
    minutes = 0;
    checkActiveChoice();
  }




  // call set up new game function  by reloading the game
  //markup and calling the allFunctions() function.
  setUpNewGame()
}

// ---- RUN ALL OF IT FUNCTION
allFunctions();



// --- NEWGAME FUNCTIONS-------
function setUpNewGame() {
  const newGame = document.querySelectorAll(".new-game");
  newGame.forEach((btn) => {
    btn.addEventListener("click", function () {

      document.body.innerHTML = entireMarkup;
      allFunctions();
    });
  });
}




// call the setUpNewGame
setUpNewGame();