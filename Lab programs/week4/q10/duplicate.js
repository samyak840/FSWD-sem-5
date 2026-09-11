function removeDuplicates(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result = result + str[i];
        }
    }

    return result;
}

document.getElementById("remove").addEventListener("click", function() {

    let text = document.getElementById("text").value;

    let result = removeDuplicates(text);

    document.getElementById("result").innerHTML = result;

});
