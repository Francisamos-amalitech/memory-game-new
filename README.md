#MEMORY GAME README
This is a simple memory game implemented using HTML, CSS, and JavaScript. The game allows players to match pairs of cards within a grid. It includes various features such as selecting a theme, choosing the number of players, and specifying the grid size.

GETTING STARTED
The code structure of the memory game is organized as follows:

The game starts with a starting screen where players can select the game theme, number of players, and grid size.
After selecting the game options, players can start the game by clicking the "Start Game" button.
The game grid is displayed, and players can click on cards to reveal their content.
Players try to match pairs of cards with the same content.
The game keeps track of the time elapsed and the number of moves taken.
Once all pairs are matched, an overlay appears with the game results, including the time elapsed and moves taken.
Players can restart the current game or set up a new game from the overlay.

GAMEPLAY
The memory game provides an enjoyable gaming experience with the following features:

Theme Selection: Players can choose between the "Numbers" and "Icons" themes.
Number of Players: Players can select the number of players from 1 to 4.
Grid Size: Players can choose between a 4x4 or 6x6 grid.
Time Elapsed: The game tracks the time elapsed since the start of the game.
Moves Taken: The game counts the number of moves taken to match pairs of cards.
Restart Game: Players can restart the current game without changing the game options.
New Game: Players can set up a new game by returning to the starting screen.

DEPENDENCIES
The memory game relies on the following external resources:

Google Fonts: The game uses the "Atkinson Hyperlegible" font from Google Fonts.
CSS Styling: The game styling is defined in the "style.css" file.
JavaScript Logic: The game logic is implemented in the "script.js" file.

Make sure to include these dependencies in the appropriate locations for the game to function correctly.


CSS PART OF THE CODE
This is the CSS code for the Memory Game project developed by Francis Mark Amos, a frontend developer. The date of development is 10TH May, 2023 TILL DATE.


CSS RESET
The CSS code begins with a CSS reset to ensure consistent styling across different browsers. It sets the margin and padding to 0, box-sizing to border-box, and defines a font-family for the entire document.

CSS VARIABLES
The CSS code defines some variables using the :root pseudo-class. These variables are used to define color values and grid size used in the game.

GAME STARTING SECTION
The CSS code defines styles for the starting section of the game. It sets the background color to a dark blue, aligns the content in the center, and sets the font color to white. The section includes a box with some text and choices for the user to select. The choices are styled with a white background and transition effects on hover. The selected choice is highlighted with a different background color.

START GAME BUTTON
The CSS code defines styles for the start game button. It sets the background color to a yellow shade and applies a hover effect to darken the color. The button is centered and has a border-radius and padding.

THE GAME SECTION
The CSS code defines styles for the main game section. It includes a header, grid, and game details.

HEADER
The header is styled with padding, font color, and a button. The button has a padding, border-radius, and a hover effect.

GRID
The grid section is styled with a display set to grid and a gap between elements. The number of columns in the grid is determined by the --the-grid-size variable. Each cell in the grid represents an icon and is styled with a background color, size, border-radius, and transition effects on hover. Active and disabled icons have different styles.

GAME DETAILS
The game details section displays information about the game. It includes a box with details, styled with a background color and padding. Active details have a different background color. An animation is applied to the active box to create a visual effect. The box contains paragraphs and information boxes. Information boxes are styled with a background color, font size, and font weight. Active boxes have a different background color and font color.

RESTART STYLING
The CSS code defines styles for the restart game and new game buttons. The restart game button has a white color and a background color based on the --yellow-background variable. The new game button has a background color and a white color on hover.

RESPONSIVENESS
The CSS code includes media queries to adjust the styling for different screen sizes. The styles are modified to provide a better user experience on smaller screens. The font size, width of elements, and other properties are adjusted accordingly.




JAVASCRIPT PART OF THE CODE
This code represents a memory game implemented in JavaScript. The game requires the player to match pairs of icons or numbers by flipping them over. The code consists of several functions and variables to handle various aspects of the game.

GETTING STARTED
To use this code, you need to include it in an HTML file that also includes the necessary CSS and images. The code assumes the existence of the following elements:

Elements with class names: "the-game", "starting-game", "game-details", "overlay", "info-container", "start-game", "choice", "icon", "choices", "the-grid-container", "the-grid", "row", "timer", "detail-box", "light-text", "active-color", "info-box".
Images in the "images" directory: "car.png", "bug.png", "flask.png", "futbol.png", "lira-sign.png", "hand-spock.png", "moon.png", "anchor.png", "snowflake.png".

CODE OVERVIEW

VARIABLES
sourceMarkup: Stores the markup of the HTML page's body.

FUNCTIONS
allFunctions(): Contains all the functionality of the game.
checkActiveChoice(): Checks the active choices and starts the game.
activeNonActive(): Adds event listeners to the clicked icons.
handlingClickIcons(): Handles the click event on icons.
handlingChoices(): Adds event listeners to the choices and handles the clicked choice.
generateIcons(): Generates an array of objects representing icons.
generateNums(): Generates an array of objects representing numbers.
randomizeArray(arr): Shuffles the elements of an array.
generateTheGame(): Generates the game grid based on the selected options.
fixingIconsMarkup(array): Updates the icons' markup based on the array of objects.
startTheGame(arr): Starts the game based on the selected choices.
addNotActiveClass(arr): Adds "not-active" class to elements in the array.
areEqual(dataId1, dataId2): Checks if two data IDs are equal.
checkGameOver(): Checks if all icons have the "active" class and ends the game if true.
setTimer(): Manages the game timer.
manageGameDetails(players): Manages the game details based on the number of players.
generateDetailBox(player): Generates the detail box for a player.
handlingMoves(): Handles the moves of each player.
activeFirstPlayer(): Activates the first player at the beginning of the game.
activeNextPlayer(): Activates the next player if the icons don't match.
manageOverlay(): Manages the game over overlay and displays the results.
generateInfoBox(player): Generates the information box for a player.


USAGE
Include the JavaScript code in your HTML file.
Make sure the necessary HTML elements, CSS styles, and image files are present.
Customize the game by modifying the variables and functions as needed.
Load the HTML file in a web browser to play the game.

THANK YOU ENJOY THE GAME







