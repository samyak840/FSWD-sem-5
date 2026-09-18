function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    function add(a, b, callback) {
        callback(a + b);
    }

    function subtract(a, b, callback) {
        callback(a - b);
    }

    function multiply(a, b, callback) {
        callback(a * b);
    }

    function divide(a, b, callback) {
        if (b === 0) {
            callback("Cannot divide by zero");
        } else {
            callback(a / b);
        }
    }

    function display(result) {
        document.getElementById("result").innerText = "Result: " + result;
    }

    if (operator === "+") {
        add(num1, num2, display);
    } else if (operator === "-") {
        subtract(num1, num2, display);
    } else if (operator === "*") {
        multiply(num1, num2, display);
    } else if (operator === "/") {
        divide(num1, num2, display);
    }
}
