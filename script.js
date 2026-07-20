const output = document.getElementById("outputMessage");

// First and last name input fields1
function getFirstname() {
    const firstNameField = document.getElementById("firstName");
    const firstName = firstNameField.value;
    output.innerHTML += "<p>Hello, " + firstName + "!</p>"
}       
function getLastname() {
    const lastNameField = document.getElementById("lastName");
    const lastName = lastNameField.value;
    output.innerHTML += "<p>Hello, " + lastName + "!</p>"
}       
// Function to open the cart
function openCart() {
    output.innerHTML += "<p>Cart opened!</p>";
}

// Function of cart button to go to cart.html
function goToCart() {
    window.location.href = "cart.html";
}


//Function to go to checkout.html
function goToCheckout() {
    window.location.href = "checkout.html";
}

//Homepage function to go back to index.html
function homepage() {
    window.location.href = "index.html";
}