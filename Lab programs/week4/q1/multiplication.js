let button = document.getElementById("generate");

button.addEventListener("click", function () {

    let number = Number(document.getElementById("number").value);

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result = result + number + " x " + i + " = " + (number * i) + "<br>";
    }

    document.getElementById("result").innerHTML = result;

});
