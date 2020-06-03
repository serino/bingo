let resultParagraph = document.getElementById("resultParagraph");
let numbersDrawnParagraph = document.getElementById("numbersDrawnParagraph");
let squares = document.querySelectorAll(".square");

let allNumbersArray = [];
let nextIndexToDraw = 0;
let intervalId = null;
let gameOver = false;

addEventListeners();
createNumbersArray();
shuffle();
addNumbersToSquares();
shuffle();
intervalId = setInterval(drawNumbers, 100);

// functions start here, don't put any non-function code below this

function addEventListeners() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", makeSquareRed);
  }
}

function createNumbersArray() {
  for (let i = 1; i <= 40; i++) {
    allNumbersArray.push(i);
  }
}

function addNumbersToSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = allNumbersArray[i];
  }
}

function drawNumbers() {
  numbersDrawnParagraph.innerHTML = numbersDrawnParagraph.innerHTML + " " + allNumbersArray[nextIndexToDraw];
  nextIndexToDraw++;
  if (nextIndexToDraw == 20) {
    clearInterval(intervalId);
    setTimeout(endGame, 3000);
  }
}

function makeSquareRed() {
  for (let i = 0; i < nextIndexToDraw; i++) {
    if (this.innerHTML == allNumbersArray[i] && gameOver == false) {
      this.style.backgroundColor = "red";
      if (isBingo() == true) {
        endGame();
      }
    }
  }
}

function endGame() {
  if (gameOver == false) {
    if (isBingo() == true) {
      resultParagraph.innerHTML = "BINGO!";
    }
    else {
      resultParagraph.innerHTML = "GAME OVER";
    }

    clearInterval(intervalId);
    setTimeout(restartGame, 3000);
    gameOver = true;
  }
}

function restartGame() {
  gameOver = false;
  shuffle();
  addNumbersToSquares();
  shuffle();
  intervalId = setInterval(drawNumbers, 100);
  nextIndexToDraw = 0;
  numbersDrawnParagraph.innerHTML = "";
  resultParagraph.innerHTML = "";
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "";
  }
}

function shuffle() {
  for (let i = 0; i < 100; i++) {
    let randomNumber1 = Math.floor(Math.random() * 40);
    let randomNumber2 = Math.floor(Math.random() * 40);
    let extraCup = allNumbersArray[randomNumber1];
    allNumbersArray[randomNumber1] = allNumbersArray[randomNumber2];
    allNumbersArray[randomNumber2] = extraCup;
  }
}

function isBingo() {
  if (squares[0].style.backgroundColor == "red" &&
    squares[1].style.backgroundColor == "red" &&
    squares[2].style.backgroundColor == "red") {
    return true
  }
  else if (squares[0].style.backgroundColor == "red" &&
    squares[3].style.backgroundColor == "red" &&
    squares[6].style.backgroundColor == "red") {
    return true
  }
  else if (squares[0].style.backgroundColor == "red" &&
    squares[4].style.backgroundColor == "red" &&
    squares[8].style.backgroundColor == "red") {
    return true
  }
  else if (squares[1].style.backgroundColor == "red" &&
    squares[4].style.backgroundColor == "red" &&
    squares[7].style.backgroundColor == "red") {
    return true
  }
  else if (squares[2].style.backgroundColor == "red" &&
    squares[4].style.backgroundColor == "red" &&
    squares[6].style.backgroundColor == "red") {
    return true
  }
  else if (squares[2].style.backgroundColor == "red" &&
    squares[5].style.backgroundColor == "red" &&
    squares[8].style.backgroundColor == "red") {
    return true
  }
  else if (squares[3].style.backgroundColor == "red" &&
    squares[4].style.backgroundColor == "red" &&
    squares[5].style.backgroundColor == "red") {
    return true
  }
  else if (squares[6].style.backgroundColor == "red" &&
    squares[7].style.backgroundColor == "red" &&
    squares[8].style.backgroundColor == "red") {
    return true
  }

  return false
}

// Instructions:
// #1 when user lands on page, automatically have program create an array of 20 random numbers between 1 and 40. And automatically start printing the array in the numbersDrawnParagraph.

// #2 when user land on page, automatically have program add a random number between 1 and 40 in each of the 9 boxes on the page.

// #3 make a function that checks to see if the random number in the box that the user clicks on is equal to any of the  20 random numbers in the array that was automatically created earlier.if yes, make backgroundColor of the square red, else do nothing.If the user is able to get 3 redBoxes in a row, user wins and game is over.If user cannot get 3 red boxes in a row with all of the drawn numbers, game is over.

// cheat sheet if you get stuck with handling random numbers - https://www.mrcodeswildride.com/shuffle

