const output = document.getElementById("outputMessage");



function getFirstname() {
    const firstNameField = document.getElementById("firstName");
    const firstName = firstNameField.value;
    output.innerHTML += "<p>Hello, " + firstName + "!</p>"
}       
