// game object, need it to contain the score, current game, player moves, and choices
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}
// newGame()
// Set score to zero, clear the game object currentGame and playerMoves
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
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
    // showTurns();
}

// showTurns()

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
    lightsOn
};