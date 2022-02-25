const keyWhite = document.querySelectorAll(".key-white");
const displayCalc = document.querySelector(".container__display-calc");
const displayOperations = document.querySelector(
  ".container__display-operations"
);

keyWhite.forEach((key) => {
  key.addEventListener("click", function (e) {
    appendNumber(key.textContent);
  });
});

function appendNumber(number) {
  displayOperations.textContent += number;
  displayOperations.textContent += " ";
}

