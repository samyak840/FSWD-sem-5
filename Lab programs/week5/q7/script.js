let timer;
let running = false;

function changeLight(color, message, callback) {
    if (!running) return;

    document.getElementById("light").style.backgroundColor = color;
    document.getElementById("message").innerText = message;

    timer = setTimeout(callback, 2000);
}

function redLight() {
    changeLight("red", "Red - Stop", greenLight);
}

function greenLight() {
    changeLight("green", "Green - Go", yellowLight);
}

function yellowLight() {
    changeLight("yellow", "Yellow - Wait", redLight);
}

function startTraffic() {
    if (!running) {
        running = true;
        redLight();
    }
}

function stopTraffic() {
    running = false;
    clearTimeout(timer);
    document.getElementById("light").style.backgroundColor = "gray";
    document.getElementById("message").innerText = "Traffic light stopped";
}
