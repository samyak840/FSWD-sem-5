let image = document.getElementById("image");

let x = 0;
let y = 0;

document.getElementById("left").addEventListener("click", function() {
    x = x - 10;
    image.style.transform = "translate(" + x + "px, " + y + "px)";
});

document.getElementById("right").addEventListener("click", function() {
    x = x + 10;
    image.style.transform = "translate(" + x + "px, " + y + "px)";
});

document.getElementById("up").addEventListener("click", function() {
    y = y - 10;
    image.style.transform = "translate(" + x + "px, " + y + "px)";
});

document.getElementById("down").addEventListener("click", function() {
    y = y + 10;
    image.style.transform = "translate(" + x + "px, " + y + "px)";
});
