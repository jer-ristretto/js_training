let num1 = 8;
let num2 = 2;

let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");
let sumEl = document.getElementById("sum-el");

num1El.innerText = num1;
num2El.innerText = num2;

function add() {
    sumEl.innerText = "Sum: " + (num1 + num2);
}

function subtract() {
    sumEl.innerText = "Sum: " + (num1 - num2);
}

function divide() {
    sumEl.innerText = "Sum: " + num1 / num2;
}

function multiply() {
    sumEl.innerText = "Sum: " + num1 * num2;
}
