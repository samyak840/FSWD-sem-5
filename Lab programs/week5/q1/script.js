function validateMobile() {
    let mobile = document.getElementById("mobile").value;
    let pattern = /^[6-9]\d{9}$/;

    if (pattern.test(mobile)) {
        document.getElementById("result").innerText = "Valid mobile number";
    } else {
        document.getElementById("result").innerText = "Invalid mobile number";
    }
}
