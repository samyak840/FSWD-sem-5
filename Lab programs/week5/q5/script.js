let image = document.getElementById("myImage");
let message = document.getElementById("message");

image.addEventListener("mouseover", function() {
    message.innerText = "Mouse is over the image";
});

image.addEventListener("mouseout", function() {
    message.innerText = "Mouse left the image";
});

image.addEventListener("click", function() {
    message.innerText = "Image clicked";
});
