const output = document.getElementById("outputMessage");

let cart = [];

let menuItems = [
    { name: "Classic Glazed", price: 5.99 },
    { name: "Chocolate Sprinkles", price: 6.70},
    { name: "Strawberry Frosted", price: 6.50 },
    { name: "Matcha Green Tea", price: 5.50 },
    { name: "Cookies and Cream", price: 6.00 },
    { name: "Lotus Biscoff", price: 6.25 },
    { name: "Salted Caramel", price: 6.75 },
    { name: "Pistachio", price: 6.25 },
    { name: "Blueberry Cheesecake", price: 7.00 },
    { name: "Tiramisu", price: 7.50 },
    { name: "Choco Hazelnut", price: 7.25 },
    { name: "Red Velvet", price: 7.75 }
];



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
    cart.push(menuItems[0]);
}


//Order Chocolate Sprinkles
function orderChocolateSprinkles() {
    cart.push(menuItems[1]);
}

//Order Strawberry Frosted
function orderStrawberryFrosted() {
    cart.push(menuItems[2]);
}

//Order Matcha Green Tea
function orderMatchaGreenTea() {
    cart.push(menuItems[3]);
}

//Order Cookies and Cream
function orderCookiesAndCream() {
    cart.push(menuItems[4]);
}

//Order Lotus Biscoff
function orderLotusBiscoff() {
    cart.push(menuItems[5]);
}

//Order Salted Caramel
function orderSaltedCaramel() {
    cart.push(menuItems[6]);
}

//Order Pistachio
function orderPistachio() {
    cart.push(menuItems[7]);
}

//Order Blueberry Cheesecake
function orderBlueberryCheesecake() {
    cart.push(menuItems[8]);
}

//Order Tiramisu
function orderTiramisu() {
    cart.push(menuItems[9]);
}

//Order Choco Hazelnut
function orderChocoHazelnut() {
    cart.push(menuItems[10]);
}

//Order Red Velvet
function orderRedVelvet() {
    cart.push(menuItems[11]);
}


//Function add item to cart
if (addClassicGlazed) {
    addClassicGlazed.addEventListener("click", function() {
        orderClassicGlazed();
        updateQuantity("quantityClassicGlazed", 1);
    });
elif (addChocolateSprinkles) {
    addChocolateSprinkles.addEventListener("click", function() {
        orderChocolateSprinkles();
        updateQuantity("quantityChocolateSprinkles", 1);
    });
}
elif (addStrawberryFrosted) {
    addStrawberryFrosted.addEventListener("click", function() {
        orderStrawberryFrosted();
        updateQuantity("quantityStrawberryFrosted", 1);
    });
}
elif (addMatchaGreenTea) {
    addMatchaGreenTea.addEventListener("click", function() {
        orderMatchaGreenTea();
        updateQuantity("quantityMatchaGreenTea", 1);
    });
}
elif (addCookiesAndCream) {
    addCookiesAndCream.addEventListener("click", function() {
        orderCookiesAndCream();
        updateQuantity("quantityCookiesAndCream", 1);
    });
}
elif (addLotusBiscoff) {
    addLotusBiscoff.addEventListener("click", function() {
        orderLotusBiscoff();
        updateQuantity("quantityLotusBiscoff", 1);
    });
}
elif (addSaltedCaramel) {
    addSaltedCaramel.addEventListener("click", function() {
        orderSaltedCaramel();
        updateQuantity("quantitySaltedCaramel", 1);
    });
}
elif (addPistachio)