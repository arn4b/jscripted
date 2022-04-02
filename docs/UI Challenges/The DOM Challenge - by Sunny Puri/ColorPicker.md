---
sidebar_position: 2
id: color_picker
title: Color Picker
tags:
  - DOM APIs
  - UI Challenge
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Color Picker Game using HTML CSS and VanillaJS

This is the challenge #4 from [Sunny Puri's](https://www.linkedin.com/in/sunnypuri/) The DOM Challenge Series. A well thought and crafted challenge, this challenge is a good combination of DOM APIs, CSS Grid, localStorage and a lot more.

### [PROBLEM STATEMENT LINK](https://github.com/devkodeio/the-dom-challenge/blob/main/color-spotter/README.md)

### Lets work on the solution

Declare variables

```js
let board = document.querySelector(".board");
let currentScore = document.querySelector(".your-score");
let highScore = document.querySelector(".highest-score");

let gridSize = 4;

let LOCAL_STORAGE_PREFIX = "COLOR-SPOTTER";
let SCORE_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX} - highScore`;
let CURRENT_SCORE = 0;

let HIGHEST_SCORE = loadHighestScore() || 0;

let oddBoxIndex;
let squares;
let COLOR;
```

#### Declare the dunctions one by one now

Grid Setup

```javascript
function setUpGrid() {
  squares = makeSquaresGrid(gridSize);
  COLOR = randomColor();
  colorSquares(squares, gridSize);
  setBoardDisplay(gridSize);
  squares.forEach((sqr) => addSquareToElement(board, sqr));
}
```

Grid Reset

```javascript
function cleanBoard() {
  while (board.lastChild) board.removeChild(board.lastChild);
}
```

Shake board on wrong selection

```javascript
function shakeBoard() {
  board.animate(
    [
      { transform: "translateX(3px)" },
      { transform: "translateX(-3px)" },
      { transform: "translateX(0px)" },
    ],
    {
      duration: 120,
      iterations: 6,
      easing: "linear",
    }
  );
}
```

Set the score

```javascript
function updateSpanScore(span, score) {
  span.innerText = score.toString();
}
```

Save High Score to localStorage and fetch it

```javascript
function saveHighestScore() {
  localStorage.setItem(SCORE_STORAGE_KEY, HIGHEST_SCORE.toString());
}

function loadHighestScore() {
  const highestScoreString = localStorage.getItem(SCORE_STORAGE_KEY);
  return parseInt(highestScoreString);
}
```

Generate a random color

```javascript
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
```

Get a random index to change the color
```js
function randomIndexInGrid(gridSize) {
    return Math.floor(Math.random() * (gridSize * gridSize))
}
```
Finally, function to generate the grid

```javascript
function makeSquaresGrid(gridSize) {
    let arr = []
    for(let i = 0; i < gridSize; i++){
        for(let i = 0; i < gridSize; i++){
            let square = document.createElement('div')
            square.classList.add('square')
            arr.push(square)
        }   
    }

    return arr
}
```

Function to add color to the squares

```javascript
function colorSquares(sqrArray, gridSize) {
    oddBoxIndex = randomIndexInGrid(gridSize)
    for(let i = 0; i < sqrArray.length; i++){
        sqrArray[i].style.backgroundColor = `${COLOR}`
        if(i === oddBoxIndex){
            sqrArray[i].style.opacity = '0.7'
        }
    }
}
```

Adding the squares, and setting the grid property
```javascript

function addSquareToElement(element, square) {
    element.appendChild(square)
}

function setBoardDisplay(gridSize) {
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}
```

Now we call the grid setup functions to render the grid

```javascript
setUpGrid()
updateSpanScore(highScore, HIGHEST_SCORE)
```

And add an event listener to get the whoel thing up and running!

```javascript

board.addEventListener('click', e => {
    if(!e.target.matches('.square')) return

    let targetBox = e.target
    if(targetBox === squares[oddBoxIndex]) {
        gridSize++
        cleanBoard()
        setUpGrid()
        CURRENT_SCORE++
        if(CURRENT_SCORE > HIGHEST_SCORE){
            HIGHEST_SCORE = CURRENT_SCORE
            saveHighestScore()
            updateSpanScore(highScore, HIGHEST_SCORE)
        }
        updateSpanScore(currentScore, CURRENT_SCORE)
    }

    else {
        gridSize = 4
        CURRENT_SCORE = 0
        shakeBoard()
        cleanBoard()
        setUpGrid()
        updateSpanScore(currentScore, CURRENT_SCORE)
    }
})
```

### FINAL CODE

```js
let board = document.querySelector(".board")
let currentScore = document.querySelector('.your-score')
let highScore = document.querySelector('.highest-score')

let gridSize = 4

let LOCAL_STORAGE_PREFIX = 'COLOR-SPOTTER'
let SCORE_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX} - highScore`
let CURRENT_SCORE = 0

let HIGHEST_SCORE = loadHighestScore() || 0

let oddBoxIndex
let squares
let COLOR

function setUpGrid() {
    squares = makeSquaresGrid(gridSize)
    COLOR = randomColor()
    colorSquares(squares, gridSize)
    setBoardDisplay(gridSize)
    squares.forEach(sqr => addSquareToElement(board, sqr))
}

function cleanBoard() {
    while(board.lastChild) 
        board.removeChild(board.lastChild)
}

function shakeBoard() {
    board.animate([
        { transform: "translateX(3px)" },
        { transform: "translateX(-3px)"},
        { transform: "translateX(0px)" }
      ],
      {
        duration: 120,
        iterations: 6,
        easing: "linear"
      });
}

function updateSpanScore(span, score) {
    span.innerText = score.toString()
}

function saveHighestScore() {
    localStorage.setItem(SCORE_STORAGE_KEY, HIGHEST_SCORE.toString())
}

function loadHighestScore() {
    const highestScoreString = localStorage.getItem(SCORE_STORAGE_KEY)
    return parseInt(highestScoreString)
}


function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function randomIndexInGrid(gridSize) {
    return Math.floor(Math.random() * (gridSize * gridSize))
}

function makeSquaresGrid(gridSize) {
    let arr = []
    for(let i = 0; i < gridSize; i++){
        for(let i = 0; i < gridSize; i++){
            let square = document.createElement('div')
            square.classList.add('square')
            arr.push(square)
        }   
    }

    return arr
}

function colorSquares(sqrArray, gridSize) {
    oddBoxIndex = randomIndexInGrid(gridSize)
    for(let i = 0; i < sqrArray.length; i++){
        sqrArray[i].style.backgroundColor = `${COLOR}`
        if(i === oddBoxIndex){
            sqrArray[i].style.opacity = '0.7'
        }
    }
}

function addSquareToElement(element, square) {
    element.appendChild(square)
}

function setBoardDisplay(gridSize) {
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}


setUpGrid()
updateSpanScore(highScore, HIGHEST_SCORE)

board.addEventListener('click', e => {
    if(!e.target.matches('.square')) return

    let targetBox = e.target
    if(targetBox === squares[oddBoxIndex]) {
        gridSize++
        cleanBoard()
        setUpGrid()
        CURRENT_SCORE++
        if(CURRENT_SCORE > HIGHEST_SCORE){
            HIGHEST_SCORE = CURRENT_SCORE
            saveHighestScore()
            updateSpanScore(highScore, HIGHEST_SCORE)
        }
        updateSpanScore(currentScore, CURRENT_SCORE)
    }

    else {
        gridSize = 4
        CURRENT_SCORE = 0
        shakeBoard()
        cleanBoard()
        setUpGrid()
        updateSpanScore(currentScore, CURRENT_SCORE)
    }
})
```