const output = document.getElementById("outputMessage");

let cart = [];



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

//Order classic glazed
function orderClassicGlazed() {
    cart.push("Classic Glazed");
}


//Order Chocolate Sprinkles
function orderChocolateSprinkles() {
    cart.push("Chocolate Sprinkles");
}

//Order Strawberry Frosted
function orderStrawberryFrosted() {
    cart.push("Strawberry Frosted");
}

//Order Matcha Green Tea
function orderMatchaGreenTea() {
    cart.push("Matcha Green Tea");
}

//Order Cookies and Cream
function orderCookiesAndCream() {
    cart.push("Cookies and Cream");
}

//Order Lotus Biscoff
function orderLotusBiscoff() {
    cart.push("Lotus Biscoff");
}

//Order Salted Caramel
function orderSaltedCaramel() {
    cart.push("Salted Caramel");
}

//Order Pistachio
function orderPistachio() {
    cart.push("Pistachio");
}

//Order Blueberry Cheesecake
function orderBlueberryCheesecake() {
    cart.push("Blueberry Cheesecake");
}

//Order Tiramisu
function orderTiramisu() {
    cart.push("Tiramisu");
}

//Order Choco Hazelnut
function orderChocoHazelnut() {
    cart.push("Choco Hazelnut");
}

//Order Rev Velvet
function orderRedVelvet() {
    cart.push("Red Velvet");
}

