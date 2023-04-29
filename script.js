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

function calculate(e) {
    const input1 = document.querySelector("#num1").value;
    const input2 = document.querySelector("#num2").value;
    let num1 = Number(input1);
    let num2 = Number(input2);
    let output = 0;
    switch (e.target.name) {
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
    const result = document.querySelector("#result");
    result.textContent = "Result: "+output;

}

//Logics
const addBtn = document.querySelectorAll("button");
addBtn.addEventListener("click", (e)=>{calculate(e)});

