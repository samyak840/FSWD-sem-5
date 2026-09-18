function task(message) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            document.getElementById("result").innerHTML += message + "<br>";
            resolve();
        }, 1000);
    });
}

function startOrder() {
    document.getElementById("result").innerHTML = "";

    task("Order Placed")
        .then(function() {
            return task("Order Shipped");
        })
        .then(function() {
            return task("Order Delivered");
        });
}
