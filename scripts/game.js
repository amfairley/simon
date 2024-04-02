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
}

// addTurn()

// showTurns()

// lightsOn()

// playerTurn()

// showScore()
function showScore() {
    document.getElementById('score').innerText= game.score;
}

// Export functions to test
module.exports = {
    game,
    newGame,
    showScore
};