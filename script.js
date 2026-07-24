const output = document.getElementById("outputMessage");

let cart = [
    {classicGlazed: 0},
    {chocolateSprinkles: 0},
    {strawberryFrosted: 0},
    {matchaGreenTea: 0},
    {cookiesAndCream: 0},
    {lotusBiscoff: 0},
    {saltedCaramel: 0},
    {pistachio: 0},
    {blueberryCheesecake: 0},
    {tiramisu: 0},
    {chocoHazelnut: 0},
    {redVelvet: 0}
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


//save cart funciton 
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

//load cart function
function loadCart() {
    const saved = localStorage.getItem("cart");
    if (saved) {
        cart = JSON.parse(saved);
    }
}
loadCart();

//Functgion to update the donut counter

function updateCounters() {
    for(let item in cart) {
        const element = document.getElementById(item + "Count");
        if (element) {
            element.textContent = cart[item];
        }
    }
}

function addClassicGlazed() {
    cart[0].classicGlazed++;
    updateCounters();
    saveCart();
}

function removeClassicGlazed() {
    if (cart[0].classicGlazed > 0) {
        cart[0].classicGlazed--;
        updateCounters();
        saveCart();
    }
}

function addChocolateSprinkles() {
    cart[1].chocolateSprinkles++;
    updateCounters();
    saveCart();
}

function removeChocolateSprinkles() {
    if (cart[1].chocolateSprinkles > 0) {
        cart[1].chocolateSprinkles--;
        updateCounters();
        saveCart();
    }
}

function addStrawberryFrosted() {
    cart[2].strawberryFrosted++;
    updateCounters();
    saveCart();
}

function removeStrawberryFrosted() {
    if (cart[2].strawberryFrosted > 0) {
        cart[2].strawberryFrosted--;
        updateCounters();
        saveCart();
    }
}

function addMatchaGreenTea() {
    cart[3].matchaGreenTea++;
    updateCounters();
    saveCart();
}

function removeMatchaGreenTea() {
    if (cart[3].matchaGreenTea > 0) {
        cart[3].matchaGreenTea--;
        updateCounters();
        saveCart();
    }
}

function addCookiesAndCream() {
    cart[4].cookiesAndCream++;
    updateCounters();
    saveCart();
}

function removeCookiesAndCream() {
    if (cart[4].cookiesAndCream > 0) {
        cart[4].cookiesAndCream--;
        updateCounters();
        saveCart();
    }
}

function addLotusBiscoff() {
    cart[5].lotusBiscoff++;
    updateCounters();
    saveCart();
}

function removeLotusBiscoff() {
    if (cart[5].lotusBiscoff > 0) {
        cart[5].lotusBiscoff--;
        updateCounters();
        saveCart();
    }
}

function addSaltedCaramel() {
    cart[6].saltedCaramel++;
    updateCounters();
    saveCart();
}

function removeSaltedCaramel() {
    if (cart[6].saltedCaramel > 0) {
        cart[6].saltedCaramel--;
        updateCounters();
        saveCart();
    }
}

function addPistachio() {
    cart[7].pistachio++;
    updateCounters();
    saveCart();
}

function removePistachio() {
    if (cart[7].pistachio > 0) {
        cart[7].pistachio--;
        updateCounters();
        saveCart();
    }
}

function addBlueberryCheesecake() {
    cart[8].blueberryCheesecake++;
    updateCounters();
    saveCart();
}

function removeBlueberryCheesecake() {
    if (cart[8].blueberryCheesecake > 0) {
        cart[8].blueberryCheesecake--;
        updateCounters();
        saveCart();
    }
}

function addTiramisu() {
    cart[9].tiramisu++;
    updateCounters();
    saveCart();
}

function removeTiramisu() {
    if (cart[9].tiramisu > 0) {
        cart[9].tiramisu--;
        updateCounters();
        saveCart();
    }
}

function addChocoHazelnut() {
    cart[10].chocoHazelnut++;
    updateCounters();
    saveCart();
}

function removeChocoHazelnut() {
    if (cart[10].chocoHazelnut > 0) {
        cart[10].chocoHazelnut--;
        updateCounters();
        saveCart();
    }
}


function addRedVelvet() {
    cart[11].redVelvet++;
    updateCounters();
    saveCart();
}

function removeRedVelvet() {
    if (cart[11].redVelvet > 0) {
        cart[11].redVelvet--;
        updateCounters();
        saveCart();
    }
}
