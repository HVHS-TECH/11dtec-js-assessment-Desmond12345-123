const output = document.getElementById("outputMessage");

let cart = [
    {name: "Classic Glazed", amount: 0},
    {name: "Chocolate Sprinkles", amount: 0},
    {name: "Strawberry Frosted", amount: 0},
    {name: "Matcha Green Tea", amount: 0},
    {name: "Cookies and Cream", amount: 0},
    {name: "Lotus Biscoff", amount: 0},
    {name: "Salted Caramel", amount: 0},
    {name: "Pistachio", amount: 0},
    {name: "Blueberry Cheesecake", amount: 0},
    {name: "Tiramisu", amount: 0},
    {name: "Choco Hazelnut", amount: 0},
    {name: "Red Velvet", amount: 0}
];

let menuItems = [
    { name: "Classic Glazed", price: 5.99 },
    { name: "Chocolate Sprinkles", price: 6.70 },
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
function addClassicGlazed() {
    cart.push(menuItems[0]);
}

function minusClassicGlazed() {
    const item = cart.find(i => i.name === "Classic Glazed");
    if (item && item.amount > 0) {
        item.amount--;
    }
}


//Order Chocolate Sprinkles
function addChocolateSprinkles() {
    cart.push(menuItems[1]);
}

function minusChocolateSprinkles() {
    const item = cart.find(i => i.name === "Chocolate Sprinkles");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Strawberry Frosted
function addStrawberryFrosted() {
    cart.push(menuItems[2]);
}

function minusStrawberryFrosted() {
    const item = cart.find(i => i.name === "Strawberry Frosted");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Matcha Green Tea
function addMatchaGreenTea() {
    cart.push(menuItems[3]);
}

function minusMatchaGreenTea() {
    const item = cart.find(i => i.name === "Matcha Green Tea");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Cookies and Cream
function addCookiesAndCream() {
    cart.push(menuItems[4]);
}

function minusCookiesAndCream() {
    const item = cart.find(i => i.name === "Cookies and Cream");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Lotus Biscoff
function addLotusBiscoff() {
    cart.push(menuItems[5]);
}

function minusLotusBiscoff() {
    const item = cart.find(i => i.name === "Lotus Biscoff");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Salted Caramel
function addSaltedCaramel() {
    cart.push(menuItems[6]);
}

function minusSaltedCaramel() {
    const item = cart.find(i => i.name === "Salted Caramel");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Pistachio
function addPistachio() {
    cart.push(menuItems[7]);
}

function minusPistachio() {
    const item = cart.find(i => i.name === "Pistachio");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Blueberry Cheesecake
function addBlueberryCheesecake() {
    cart.push(menuItems[8]);
}

function minusBlueberryCheesecake() {
    const item = cart.find(i => i.name === "Blueberry Cheesecake");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Tiramisu
function addTiramisu() {
    cart.push(menuItems[9]);
}

function minusTiramisu() {
    const item = cart.find(i => i.name === "Tiramisu");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Choco Hazelnut
function addChocoHazelnut() {
    cart.push(menuItems[10]);
}

function minusChocoHazelnut() {
    const item = cart.find(i => i.name === "Choco Hazelnut");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

//Order Red Velvet
function addRedVelvet() {
    cart.push(menuItems[11]);
}

function minusRedVelvet() {
    const item = cart.find(i => i.name === "Red Velvet");
    if (item && item.amount > 0) {
        item.amount--;
    }
}

