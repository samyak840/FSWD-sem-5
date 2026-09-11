function reverseWords(str) {
    let words = str.split(" ");
    let reversed = "";

    for (let i = 0; i < words.length; i++) {
        reversed = reversed + words[i].split("").reverse().join("") + " ";
    }

    return reversed;
}

document.getElementById("reverse").addEventListener("click", function() {

    let text = document.getElementById("text").value;

    let result = reverseWords(text);

    document.getElementById("result").innerHTML = result;

});
