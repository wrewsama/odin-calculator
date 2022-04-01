const display = document.querySelector("#display p");
const nums = document.querySelectorAll(".num");
const ops = document.querySelectorAll(".op");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");
let displayText = "";
let firstNum = '';
let operator = null;
let secondNum = '';

let editingFirst = true; // boolean that says whether we are editing firstNum
let done = false; // whether evaluation is complete

function add(x ,y) {
    return parseFloat(x) + parseFloat(y);
}

function multiply(x, y) {
    return x * y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    if (y === "0") {
        return error();
    }
    return x / y;
}

function operate(op, first, second) {
    return op(first, second);
}

function error() {
    clear();
    displayText = "error!"
    display.textContent = displayText;
    return displayText;
}

function buttonWrite(btn) {
    btn.addEventListener("click", () => {
        displayText += btn.textContent;
        display.textContent = displayText;
    });
}

function clear() {
    displayText = "";
    firstNum = "";
    operator = null;
    secondNum = "";
    display.textContent = displayText;
    editingFirst = true;
}

function numButtonWrite(btn) {
    buttonWrite(btn);
    btn.addEventListener("click", () => {
        if (done) {
            clear();
            editingFirst = true;
            done = false;
            displayText += btn.textContent;
            display.textContent = displayText;
        }

        if (editingFirst) {
            firstNum += btn.textContent;
        } else {
            secondNum += btn.textContent;
        }
    })
}

function opButtonWrite(btn) {
    buttonWrite(btn);
    btn.addEventListener("click", () => {
        if (done) {
            firstNum = displayText.substring(0, displayText.length - 3);
            secondNum = "";
            done = false;
        } else if (editingFirst) {
            editingFirst = false;
        } else if (!done && !editingFirst) {
            equalsEvent();
            done = false;
            firstNum = displayText;
            secondNum = "";
            displayText += btn.textContent;
            display.textContent = displayText;
        }

        switch (btn.textContent) {
            case " + ":
                operator = add;
                break;
            case " - ":
                operator = subtract;
                break;
            case " x ":
                operator = multiply;
                break;
            case " / ":
                operator = divide;
                break;
        }
    })
}

function equalsEvent() {
    if (firstNum === "" || operator === null || secondNum === "") {
        alert("error");
    } else {
        displayText = operate(operator, firstNum, secondNum);
        display.textContent = displayText;
        done = true;
    }

}

nums.forEach(numButtonWrite);
ops.forEach(opButtonWrite);
clearButton.addEventListener("click", clear);
buttonWrite(decimalButton);
equalsButton.addEventListener("click", equalsEvent);