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

//Functgion to update the donut counter

function updateCounters() {
    cart.forEach((item, index) => {
        
}