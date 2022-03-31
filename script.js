const display = document.querySelector("#display p");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");
let displayText = "";
let firstNum = '';
let operator = '';
let secondNum = '';

let editingFirst = true; // boolean that says whether we are editing firstNum

function add(x ,y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function operate(op, first, second) {
    return op(first, second);
}

function buttonWrite(btn) {
    btn.addEventListener("click", () => {
        displayText += btn.textContent;
        display.textContent = displayText;
    });
}

function clear() {
    displayText = "";
    display.textContent = displayText;
}

function numButtonWrite(btn) {
    buttonWrite(btn);
    btn.addEventListener("click", () => {
        if (editingFirst) {
            firstNum += btn.textContent;
        } else {
            secondNum += btn.textContent;
        }
    })
}

function opButtonWrite(btn) {
    // TODO
}

nums.forEach(numButtonWrite);
ops.forEach(buttonWrite);
clearButton.addEventListener("click", clear);
buttonWrite(decimalButton);