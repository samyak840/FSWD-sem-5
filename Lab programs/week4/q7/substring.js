function generateSubstrings(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result = result + str.substring(i, j) + ", ";
        }
    }

    return result.slice(0, -2);
}

document.getElementById("generate").addEventListener("click", function() {

    let text = document.getElementById("text").value;

    let result = generateSubstrings(text);

    document.getElementById("result").innerHTML = result;

});
