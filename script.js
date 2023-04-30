let displayString = "";
let operation = null;
let values = [];
let temp = "";
let mathOpResult = 0;
let backup;

//Mathematical functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulus(num1, num2) {
    return num1 % num2;
}

function power(num1, num2) {
    return num1 ** num2;
}

function squareRoot(num) {
    return Math.sqrt(num);
}

function calculate(operation) {
    const num1 = values[0];
    const num2 = values[1];
    let output = 0;
    switch (operation) {
        case "add":
            output = add(num1, num2);
            break;
        case "subtract":
            output = subtract(num1, num2);
            break;
        case "multiply":
            output = multiply(num1, num2);
            break;
        case "divide":
            output = divide(num1, num2);
            break;
        case "modulus":
            output = modulus(num1, num2);
            break;
        case "power":
            output = power(num1, num2);
            break;
        case "squareroot":
            output = squareRoot(num1);
            break;
    }
    return output;
}

//read entered numeric value
let numerics = document.querySelectorAll(".number");
numerics.forEach(numericBtn => numericBtn.addEventListener("click", (e) => {
    if (e.target.name !== ".") {
        temp += e.target.name;
        displayString += e.target.name;
        displayValues(displayString);
    } else if (e.target.name === "." && !temp.includes(".")) {
        temp += e.target.name;
        displayString += e.target.name;
        displayValues(displayString);
    }
}));

// set the numeric value when operator is clicked
let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", (e) => {
    if (temp !== "" || backup !== undefined) {
        if (e.target.name !== "equals") {
            displayString += ` ${e.target.textContent} `;
            if (temp !== "") {
                values.push(Number(temp));
            }
            if (values.length >= 2) {
                mathOpResult = roundOffDecimals(calculate(operation));
                values = [];
                values[0] = mathOpResult;
            }
            operation = e.target.name;
        }
        else {
            values.push(Number(temp));
            if (values.length >= 2) {
                mathOpResult = roundOffDecimals(calculate(operation));
                values = [];
                values[0] = mathOpResult;
                displayString = mathOpResult.toString();
                backup = mathOpResult;
            }
        }
        temp = "";
        displayValues(displayString);
    }
}));

//Clear screen
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    mathOpResult = 0;
    displayString = "";
    temp = "";
    values = [];
    operation = "";
    backup = undefined;
    displayValues(displayString);
});

const display = document.querySelector("#display");
//display the passed content
function displayValues(displayVal) {
    display.textContent = displayVal;
}

//rounds of input to 2 decimal points
function roundOffDecimals(numberValue){
    if(numberValue.toString().includes(".")){
        numberValue = numberValue.toFixed(1);
    }
    return numberValue;
}

//remove last entered number when backspace pressed
const backspaceBtn = document.querySelector("#backspace"); 
backspaceBtn.addEventListener("click", () => {
    displayString = displayString.substring(0,displayString.length-1);
    temp = temp.substring(0,temp.length-1);
    displayValues(displayString);
});