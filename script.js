function startOrder() {
    let nameInput = document.getElementById("customerName").value;
    let message = "Order started for " + CustomerName + "!";
    document.getElementById("outputMessage").innerHTML = message;
}


function getFormInput() {
    const nameField = document.getElementById("nameField");
    userName = nameField.value;
    output.innerHTML += "<p>Hello, " + userName + "!</p>"
}       


function emailInput() {
    const emailField = document.getElementById("emailField");
    userEmail = emailField.value;
    output.innerHTML += "<p>Your email is: " + userEmail + "!</p>"
}