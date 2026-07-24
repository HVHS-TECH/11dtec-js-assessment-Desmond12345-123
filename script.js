const output = document.getElementById("outputMessage");

let cart = [
    { key: "classicGlazed", count: 0 },
    { key: "chocolateSprinkles", count: 0 },
    { key: "strawberryFrosted", count: 0 },
    { key: "matchaGreenTea", count: 0 },
    { key: "cookiesAndCream", count: 0 },
    { key: "lotusBiscoff", count: 0 },
    { key: "saltedCaramel", count: 0 },
    { key: "pistachio", count: 0 },
    { key: "blueberryCheesecake", count: 0 },
    { key: "tiramisu", count: 0 },
    { key: "chocoHazelnut", count: 0 },
    { key: "redVelvet", count: 0 }
];

const priceLookup = {
    classicGlazed: 5.99,
    chocolateSprinkles: 6.70,
    strawberryFrosted: 6.50,
    matchaGreenTea: 5.50,
    cookiesAndCream: 6.00,
    lotusBiscoff: 6.25,
    saltedCaramel: 6.75,
    pistachio: 6.25,
    blueberryCheesecake: 7.00,
    tiramisu: 7.50,
    chocoHazelnut: 7.25,
    redVelvet: 7.75
};


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
    cart.forEach(item => {
        const id = item.key + "Count";
        const element = document.getElementById(id);
        if (element) {
            element.textContent = item.count;
        }
    });
}

function addClassicGlazed() {
    cart[0].count++;
    updateCounters();
    saveCart();
}

function removeClassicGlazed() {
    if (cart[0].count > 0) {
        cart[0].count--;
        updateCounters();
        saveCart();
    }
}

function addChocolateSprinkles() {
    cart[1].count++;
    updateCounters();
    saveCart();
}

function removeChocolateSprinkles() {
    if (cart[1].count > 0) {
        cart[1].count--;
        updateCounters();
        saveCart();
    }
}

function addStrawberryFrosted() {
    cart[2].count++;
    updateCounters();
    saveCart();
}

function removeStrawberryFrosted() {
    if (cart[2].count > 0) {
        cart[2].count--;
        updateCounters();
        saveCart();
    }
}

function addMatchaGreenTea() {
    cart[3].count++;
    updateCounters();
    saveCart();
}

function removeMatchaGreenTea() {
    if (cart[3].count > 0) {
        cart[3].count--;
        updateCounters();
        saveCart();
    }
}

function addCookiesAndCream() {
    cart[4].count++;
    updateCounters();
    saveCart();
}

function removeCookiesAndCream() {
    if (cart[4].count > 0) {
        cart[4].count--;
        updateCounters();
        saveCart();
    }
}

function addLotusBiscoff() {
    cart[5].count++;
    updateCounters();
    saveCart();
}

function removeLotusBiscoff() {
    if (cart[5].count > 0) {
        cart[5].count--;
        updateCounters();
        saveCart();
    }
}

function addSaltedCaramel() {
    cart[6].count++;
    updateCounters();
    saveCart();
}

function removeSaltedCaramel() {
    if (cart[6].count > 0) {
        cart[6].count--;
        updateCounters();
        saveCart();
    }
}

function addPistachio() {
    cart[7].count++;
    updateCounters();
    saveCart();
}

function removePistachio() {
    if (cart[7].count > 0) {
        cart[7].count--;
        updateCounters();
        saveCart();
    }
}

function addBlueberryCheesecake() {
    cart[8].count++;
    updateCounters();
    saveCart();
}

function removeBlueberryCheesecake() {
    if (cart[8].count > 0) {
        cart[8].count--;
        updateCounters();
        saveCart();
    }
}

function addTiramisu() {
    cart[9].count++;
    updateCounters();
    saveCart();
}

function removeTiramisu() {
    if (cart[9].count > 0) {
        cart[9].count--;
        updateCounters();
        saveCart();
    }
}

function addChocoHazelnut() {
    cart[10].count++;
    updateCounters();
    saveCart();
}

function removeChocoHazelnut() {
    if (cart[10].count > 0) {
        cart[10].count--;
        updateCounters();
        saveCart();
    }
}

function addRedVelvet() {
    cart[11].count++;
    updateCounters();
    saveCart();
}

function removeRedVelvet() {
    if (cart[11].count > 0) {
        cart[11].count--;
        updateCounters();
        saveCart();
    }
}


//functino for recipet

function printReceipt() {
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const money = Number(document.getElementById("moneyAmount").value);
    if (money > 1000000000000) {
    document.getElementById("receipt").innerHTML = "<p>Money amount too large. Maximum allowed is 1,000,000,000,000.</p>";
    return;
}

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;
    let printReceipt = `<h2>Receipt for ${first} ${last}</h2>`;

    printReceipt += "<p>Items:</p>";

    cart.forEach(item => {
        if (item.count > 0) {
            printReceipt += `<p>${item.key}: ${item.count}</p>`;
            total += item.count * priceLookup[item.key];
        }
    });

    printReceipt += "<p><strong>Total items:</strong> " + total.toFixed(2) + "</p>";
    printReceipt += "<p><strong>Your money:</strong> $" + money.toFixed(2) + "</p>";

    if (money >= total) {
        printReceipt += "<p><strong>Change:</strong> $" + (money - total).toFixed(2) + "</p>";
    } else {
        printReceipt += "<p><strong>Insufficient funds. Please add more money.</strong></p>";
    }

    document.getElementById("receipt").innerHTML = printReceipt;
}









//function for validator/boundarys

function validateName(name) {
    return /^[A-Za-z]+$/.test(name);
}

function getFirstname() {
    const firstName = document.getElementById("firstName").value;

    if (!validateName(firstName)) {
        output.innerHTML += "<p>Invalid first name. Letters only.</p>";
        return;
    }

    output.innerHTML += "<p>Hello, " + firstName + "!</p>";
}

function getLastname() {
    const lastName = document.getElementById("lastName").value;

    if (!validateName(lastName)) {
        output.innerHTML += "<p>Invalid last name. Letters only.</p>";
        return;
    }

    output.innerHTML += "<p>Hello, " + lastName + "!</p>";
}
