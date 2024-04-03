/**
 * @jest-environment jsdom
 */

// Import functions
const {game, newGame, showScore, addTurn} = require("../game");

beforeAll(() => {
    // fs library is part of node's default standard library
    let fs = require("fs");
    // read html file with utf-8 fileset 
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // open document
    document.open();
    // write content to it
    document.write(fileContents);
    // close the document
    document.close();
});

// Test the game object
describe("game object contains correct keys", () => {
    // Test 1: Check that the score key exists
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    })
    // Test 2: Check that the currentGame key exists
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    })
    // Test 3: Check that playerMoves keys exists
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    })
    // Test 4: Check that choices key exists
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    })
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    })
})

// Test newGame() function
describe("newGame function works as expected", () => {
    // Set up gamestate with new value to test on
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button4", "button1", "button3"];
        game.currentGame = ["button1", "button4", "button1", "button3"];
        // Set score on the DOM to test
        document.getElementById("score").innerText = "42";
        // Call newGame function, if it works it resets score
        newGame();
    })
    // Test 1: newGame() should set the score to zero
    test("newGame() resets score", () => {
        expect(game.score).toBe(0);
    })
    // Test 2: newGame() should reset the playerMoves
    test("newGame() resets playerMoves", () => {
        expect(game.playerMoves.length).toBe(0);
    })
    // Test 3: should be 1 thing in the current game array
    test("should be one move in the computers game array", () => {
        expect(game.currentGame.length).toBe(1);
    })
    // Test 4: Element with id of score should display 0
    test("element with id score displays 0", () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    })
})

// Gameplay
describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    // After each to reset after every test
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    // Check that addTurn() works
    test("check addTurn adds a new element to the currentGame array", () => {
        addTurn();
        expect(game.currentGame.length).toEqual(2);
    });
})