const displayCalc = document.querySelector(".container__display-calc");
const displayOperations = document.querySelector(
  ".container__display-operations"
);

const keyNumber = document.querySelectorAll(".key-num");
const keyOperator = document.querySelectorAll(".key-operator");
const keyReset = document.querySelector(".key-reset");
const keyDel = document.querySelector(".key-del");
const keyEqual = document.querySelector(".key-equal");

let a = "", // current operation
  b = "", // previous operation
  operator = undefined; //operator

// CALCULATE FUNCTION

const calculate = () => {
  let calc;
  if (!a || !b) return;

  let currCalc = parseFloat(a);
  let prevCalc = parseFloat(b);

  if (isNaN(currCalc) || isNaN(prevCalc)) return;

  switch (operator) {
    case "+":
      calc = prevCalc + currCalc;
      break;

    case "-":
      calc = prevCalc - currCalc;
      break;

    case "x":
      calc = prevCalc * currCalc;
      break;

    case "/":
      calc = prevCalc / currCalc;
      break;
    default:
      return;
  }

  a = parseFloat(calc.toFixed(2)); // round to 1 decimal
  operator = undefined;
  b = "";
};

// HANDLING GETTING OPERATOR
keyOperator.forEach((op) => {
  op.addEventListener("click", () => {
    getOperator(op.textContent);
    displayCalculation();
  });
});

const getOperator = (op) => {
  if (a === "") {
    return;
  }

  if (b !== "") {
    calculate();
  }

  operator = op;
  b = a;
  a = "";
};

// HANDLING DISPLAYING OPERATIONS

const displayCalculation = () => {
  displayCalc.textContent = a;
  displayOperations.textContent = b;

  if (operator != null) {
    displayOperations.textContent = b + operator;
  } else {
    displayOperations.textContent = "";
  }
};

const addNumber = (number) => {
  if (number === ".") {
    if (a.includes(".")) {
      return;
    }
  }
  if (a.toString().length > 14) {
    return;
  } else {
    a = a.toString() + number.toString();
  }
};

keyNumber.forEach((number) => {
  number.addEventListener("click", () => {
    addNumber(number.textContent);
    displayCalculation();
  });
});

// HANDLING EQUAL (=) BUTTON

keyEqual.addEventListener("click", () => {
  calculate();
  displayCalculation();
});

///// HANDLING RESET AND DELETE BUTTON ////
// FUNCTION CLEARING CALCULATOR
keyReset.addEventListener("click", () => {
  clear();
});

const clear = () => {
  a = "";
  b = "";
  operator = "";
  displayCalc.textContent = "";
  displayOperations.textContent = "";
};

// DELETING LAST DIGIT
keyDel.addEventListener("click", () => {
  deleteDigit();
  displayCalculation();
});

const deleteDigit = () => {
  a = a.toString().slice(0, -1);
};

//// HANDLING THEMES ////

const themeTitle = document.querySelector(".theme-selection__title");
const themeNumber = document.querySelectorAll(".theme-selection__number");
const logo = document.querySelector(".container__top-bar--logo");

const toggle1 = document.getElementById("toggle1");
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");

document.documentElement.setAttribute("data-theme", "1");

themeNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggle(btn.textContent);
  });
});

function setColor(color) {
  logo.style.color = `${color}`;
  themeTitle.style.color = `${color}`;
  displayCalc.style.color = `${color}`;
  themeNumber.forEach((number) => {
    number.style.color = `${color}`;
  });
}

function toggle(i) {
  if (i === "1") {
    document.documentElement.setAttribute("data-theme", i);

    toggle1.classList.remove("opacity");
    toggle2.classList.add("opacity");
    toggle3.classList.add("opacity");

    setColor("white");
  } else if (i === "2") {
    document.documentElement.setAttribute("data-theme", i);

    toggle1.classList.add("opacity");
    toggle2.classList.remove("opacity");
    toggle3.classList.add("opacity");

    setColor("black");
  } else if (i === "3") {
    document.documentElement.setAttribute("data-theme", i);
    setColor("yellow");

    toggle1.classList.add("opacity");
    toggle2.classList.add("opacity");
    toggle3.classList.remove("opacity");
  }
}
