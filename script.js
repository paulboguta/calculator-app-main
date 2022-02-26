const keyWhite = document.querySelectorAll(".key-white");
const displayCalc = document.querySelector(".container__display-calc");
const displayOperations = document.querySelector(
  ".container__display-operations"
);
const keys = document.querySelectorAll(".key");
const keyNumber = document.querySelectorAll(".key-num");
const keyOperator = document.querySelectorAll(".key-operator");
const keyReset = document.querySelector(".key-reset");

keys.forEach((key) => {
  key.addEventListener("click", function (e) {
   
  
    
});

// CALCULATION FUNCTIONS

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a = "",
  b = 1,
  operator = "",
  calc = 0;

// RESETING CALCULATION
keyReset.addEventListener("click", function (e) {
  clear();
});

// HANDLING DISPLAYING OPERATIONS
keyWhite.forEach((key) => {
  key.addEventListener("click", function (e) {
    appendNumber(key.textContent);
  });
});

function appendNumber(number) {
  displayOperations.textContent += number;
  displayOperations.textContent += " ";
}

// FUNCTION CLEARING CALCULATOR
function clear() {
  a = "";
  b = "";
  operator = "";
  calc = 0;
  displayCalc.textContent = "";
  displayOperations.textContent = "";
}
