/**
 * @jest-environment jsdom
 */

// Import functions
const {game} = require("../game");

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