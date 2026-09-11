document.getElementById("check").addEventListener("click", function() {

    let password = document.getElementById("password").value;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < password.length; i++) {
        let character = password[i];

        if (character >= "A" && character <= "Z") {
            hasUppercase = true;
        } else if (character >= "a" && character <= "z") {
            hasLowercase = true;
        } else if (character >= "0" && character <= "9") {
            hasNumber = true;
        } else {
            hasSpecial = true;
        }
    }

    if (
        password.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecial
    ) {
        document.getElementById("result").innerHTML = "Strong Password";
    } else {
        document.getElementById("result").innerHTML = "Not a Strong Password";
    }

});
