function findSecond(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });

    let secondSmallest = numbers[1];
    let secondLargest = numbers[numbers.length - 2];

    return secondSmallest + ", " + secondLargest;
}

document.getElementById("find").addEventListener("click", function() {

    let input = document.getElementById("numbers").value;

    let numbers = input.split(",").map(Number);

    let result = findSecond(numbers);

    document.getElementById("result").innerHTML = result;

});
