function startOrder() {
    let nameInput = document.getElementById("nameInput").value;
    let message = "Order started for " + nameInput + "!";
    document.getElementById("message").innerHTML = message;
}