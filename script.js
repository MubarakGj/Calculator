// let mathOpResult = 1;
let displayValue = null;
let operation = null;
let values = [];
let temp = "";

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
    // let num1 = Number(input1);
    // let num2 = Number(input2);
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
    temp += e.target.name;
    display.textContent = (display.textContent === "") ? temp : `${display.textContent}${e.target.name}`
}));

// set the numeric value when operator is clicked
let operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", (e) => {
    if ((temp.length > 0) && (e.target.name !== "equals")) {
        operation = e.target.name;
        display.textContent = `${display.textContent} ${e.target.textContent} `;
    }
    if(temp.length !== 0){
        values.push(Number(temp));
    }
    console.log(values);
    temp = "";
    
}));

//calculate result and display
const display = document.querySelector("#display");
const equalBtn = document.querySelector("#equals");
equalBtn.addEventListener("click", (e) => {
    if ((values.length > 0) && (values.every(num => num !== ""))) {
        displayValue = calculate(operation);
        display.textContent = displayValue;
        values = [];
    }
});

//Clear screen
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    displayValue = "";
    temp = "";
    values = [];
});


