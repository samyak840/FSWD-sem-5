function findFirstNonRepeated(str) {
    let count = {};

    for (let i = 0; i < str.length; i++) {
        let character = str[i];

        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i];
        }
    }

    return "No non-repeated character";
}

document.getElementById("find").addEventListener("click", function() {

    let text = document.getElementById("text").value;

    let result = findFirstNonRepeated(text);

    document.getElementById("result").innerHTML = result;

});
