// game object, need it to contain the score, current game, player moves, and choices
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
}
// newGame()
// Set score to zero, clear the game object currentGame and playerMoves
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    // Get all circles
    for (let circle of document.getElementsByClassName("circle")) {
        // If the data-listener is set to false
        if(circle.getAttribute("data-listener") !== "true") {
            // Add event listener and include event (e)
            circle.addEventListener("click", (e) => {
                // Get the element ID (button1,2,3,4) and store it as variable
                let move = e.target.getAttribute("id");
                // Call lights on function
                lightsOn(move);
                // Push move into playerMoves
                game.playerMoves.push(move);
                playerTurn();
            });
            // Then set data listener to true
            circle.setAttribute("data-listener", "true");
        }
    }
    showScore();
    addTurn();
}

// addTurn()
function addTurn() {
    // clear player moves array
    game.playerMoves = [];
    // make random number 0-3, pick the index of this value and add to current game
    game.currentGame.push(game.choices[Math.floor(Math.random()*4)]);
    // showTurns() to display the sequence
    showTurns();
}

// showTurns() Step through the current game array, turn on a light, then turn it off again
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(function () {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

// lightsOn()
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}
// playerTurn()

// showScore()
function showScore() {
    document.getElementById('score').innerText= game.score;
}

// Export functions to test
module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns
};