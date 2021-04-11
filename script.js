// Setting DOM to all boxes or input field

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let printValue = document.getElementById("print");

let resetBtn = document.getElementById("btn");
flag = 1;

const win = function () {
  b1.disabled = true;
  b2.disabled = true;
  b3.disabled = true;
  b4.disabled = true;
  b5.disabled = true;
  b6.disabled = true;
  b7.disabled = true;
  b8.disabled = true;
  b9.disabled = true;
};

// Function called whenever user tab on any box
const playing = function () {
  // Checking if Player X won or not and after
  // that disabled all the other fields
  if (b1.value == "X" && b2.value == "X" && b3.value == "X") {
    printValue.textContent = "Player X won";
    b1.style.color = "#60b347";
    b2.style.color = "#60b347";
    b3.style.color = "#60b347";
    win();
  } else if (b1.value == "X" && b4.value == "X" && b7.value == "X") {
    printValue.textContent = "Player X won";
    b1.style.color = "#60b347";
    b4.style.color = "#60b347";
    b7.style.color = "#60b347";
    win();
  } else if (b7.value == "X" && b8.value == "X" && b9.value == "X") {
    printValue.textContent = "Player X won";
    b7.style.color = "#60b347";
    b8.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b3.value == "X" && b6.value == "X" && b9.value == "X") {
    printValue.textContent = "Player X won";
    b3.style.color = "#60b347";
    b6.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b1.value == "X" && b5.value == "X" && b9.value == "X") {
    printValue.textContent = "Player X won";
    b1.style.color = "#60b347";
    b5.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b3.value == "X" && b5.value == "X" && b7.value == "X") {
    printValue.textContent = "Player X won";
    b3.style.color = "#60b347";
    b5.style.color = "#60b347";
    b7.style.color = "#60b347";
    win();
  } else if (b2.value == "X" && b5.value == "X" && b8.value == "X") {
    printValue.textContent = "Player X won";
    b2.style.color = "#60b347";
    b5.style.color = "#60b347";
    b8.style.color = "#60b347";
    win();
  } else if (b4.value == "X" && b5.value == "X" && b6.value == "X") {
    printValue.textContent = "Player X won";
    b4.style.color = "#60b347";
    b5.style.color = "#60b347";
    b6.style.color = "#60b347";
    win();
  }

  // Checking of Player X finsh
  // Checking for Player 0 starts, Is player 0 won or
  // not and after that disabled all the other fields
  else if (b1.value == "0" && b2.value == "0" && b3.value == "0") {
    printValue.textContent = "Player 0 won";
    b1.style.color = "#60b347";
    b2.style.color = "#60b347";
    b3.style.color = "#60b347";
    win();
  } else if (b1.value == "0" && b4.value == "0" && b7.value == "0") {
    printValue.textContent = "Player 0 won";
    b1.style.color = "#60b347";
    b4.style.color = "#60b347";
    b7.style.color = "#60b347";
    win();
  } else if (b7.value == "0" && b8.value == "0" && b9.value == "0") {
    printValue.textContent = "Player 0 won";
    b7.style.color = "#60b347";
    b8.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b3.value == "0" && b6.value == "0" && b9.value == "0") {
    printValue.textContent = "Player 0 won";
    b3.style.color = "#60b347";
    b6.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b1.value == "0" && b5.value == "0" && b9.value == "0") {
    printValue.textContent = "Player 0 won";
    b1.style.color = "#60b347";
    b5.style.color = "#60b347";
    b9.style.color = "#60b347";
    win();
  } else if (b3.value == "0" && b5.value == "0" && b7.value == "0") {
    printValue.textContent = "Player 0 won";
    b3.style.color = "#60b347";
    b5.style.color = "#60b347";
    b7.style.color = "#60b347";
    win();
  } else if (b2.value == "0" && b5.value == "0" && b8.value == "0") {
    printValue.textContent = "Player 0 won";
    b2.style.color = "#60b347";
    b5.style.color = "#60b347";
    b8.style.color = "#60b347";
    win();
  } else if (b4.value == "0" && b5.value == "0" && b6.value == "0") {
    printValue.textContent = "Player 0 won";
    b4.style.color = "#60b347";
    b5.style.color = "#60b347";
    b6.style.color = "#60b347";
    win();
  }

  // Checking of Player 0 finsh
  // Here, Checking about Tie
  else if (
    (b1.value == "X" || b1.value == "0") &&
    (b2.value == "X" || b2.value == "0") &&
    (b3.value == "X" || b3.value == "0") &&
    (b4.value == "X" || b4.value == "0") &&
    (b5.value == "X" || b5.value == "0") &&
    (b6.value == "X" || b6.value == "0") &&
    (b7.value == "X" || b7.value == "0") &&
    (b8.value == "X" || b8.value == "0") &&
    (b9.value == "X" || b9.value == "0")
  ) {
    printValue.textContent = "Match Tie";
  } else {
    // Here, Printing Result
    if (flag == 1) {
      printValue.textContent = "Player X Turn";
    } else {
      printValue.textContent = "Player 0 Turn";
    }
  }
};

// Function to reset game
const reset = function () {
  location.reload();
  b1.value = "";
  b2.value = "";
  b3.value = "";
  b4.value = "";
  b5.value = "";
  b6.value = "";
  b7.value = "";
  b8.value = "";
  b9.value = "";
};
resetBtn.addEventListener("click", reset);

// Here onwards, functions check turn of the player
// and put accordingly value X or 0

const grid1 = function () {
  if (flag == 1) {
    b1.value = "X";
    b1.disabled = true;
    flag = 0;
  } else {
    b1.value = "0";
    b1.disabled = true;
    flag = 1;
  }
  playing();
};
b1.addEventListener("click", grid1);

const grid2 = function () {
  if (flag == 1) {
    b2.value = "X";
    b2.disabled = true;
    flag = 0;
  } else {
    b2.value = "0";
    b2.disabled = true;
    flag = 1;
  }
  playing();
};
b2.addEventListener("click", grid2);

const grid3 = function () {
  if (flag == 1) {
    b3.value = "X";
    b3.disabled = true;
    flag = 0;
  } else {
    b3.value = "0";
    b3.disabled = true;
    flag = 1;
  }
  playing();
};
b3.addEventListener("click", grid3);

const grid4 = function () {
  if (flag == 1) {
    b4.value = "X";
    b4.disabled = true;
    flag = 0;
  } else {
    b4.value = "0";
    b4.disabled = true;
    flag = 1;
  }
  playing();
};
b4.addEventListener("click", grid4);

const grid5 = function () {
  if (flag == 1) {
    b5.value = "X";
    b5.disabled = true;
    flag = 0;
  } else {
    b5.value = "0";
    b5.disabled = true;
    flag = 1;
  }
  playing();
};
b5.addEventListener("click", grid5);

const grid6 = function () {
  if (flag == 1) {
    b6.value = "X";
    b6.disabled = true;
    flag = 0;
  } else {
    b6.value = "0";
    b6.disabled = true;
    flag = 1;
  }
  playing();
};
b6.addEventListener("click", grid6);

const grid7 = function () {
  if (flag == 1) {
    b7.value = "X";
    b7.disabled = true;
    flag = 0;
  } else {
    b7.value = "0";
    b7.disabled = true;
    flag = 1;
  }
  playing();
};
b7.addEventListener("click", grid7);

const grid8 = function () {
  if (flag == 1) {
    b8.value = "X";
    b8.disabled = true;
    flag = 0;
  } else {
    b8.value = "0";
    b8.disabled = true;
    flag = 1;
  }
  playing();
};
b8.addEventListener("click", grid8);

const grid9 = function () {
  if (flag == 1) {
    b9.value = "X";
    b9.disabled = true;
    flag = 0;
  } else {
    b9.value = "0";
    b9.disabled = true;
    flag = 1;
  }
  playing();
};
b9.addEventListener("click", grid9);
