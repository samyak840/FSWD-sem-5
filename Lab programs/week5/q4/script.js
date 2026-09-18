function task(message) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            document.getElementById("result").innerHTML += message + "<br>";
            resolve();
        }, 1000);
    });
}

async function startOrder() {
    document.getElementById("result").innerHTML = "";

    await task("Order Placed");
    await task("Order Shipped");
    await task("Order Delivered");
}

