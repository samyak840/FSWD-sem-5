function countLetters(word) {
    let count = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (count[letter]) {
            count[letter]++;
        } else {
            count[letter] = 1;
        }
    }

    return count;
}

document.getElementById("count").addEventListener("click", function() {

    let word = document.getElementById("word").value;

    let result = countLetters(word);
    let output = "";

    for (let letter in result) {
        output = output + letter + ":" + result[letter] + ", ";
    }

    document.getElementById("result").innerHTML = output.slice(0, -2);

});
