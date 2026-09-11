let button = document.getElementById("validate");

button.addEventListener("click", function () {

    let username = document.getElementById("username").value;

    let firstCharacter = username[0];
    let lastCharacter = username[username.length - 1];

    if (
        username.length === 10 &&
        firstCharacter >= "0" &&
        firstCharacter <= "9" &&
        ((lastCharacter >= "A" && lastCharacter <= "Z") ||
        (lastCharacter >= "a" && lastCharacter <= "z"))
    ) {
        document.getElementById("result").innerHTML = "Valid Username";
    } else {
        document.getElementById("result").innerHTML = "Invalid Username";
    }

});
