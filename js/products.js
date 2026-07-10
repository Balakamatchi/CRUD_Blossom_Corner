// ==========================================
// CUSTOMER PRODUCT VIEW
// ==========================================

function displayCustomerFlowers() {

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    let output = "";

    flowers.forEach(flower => {

        output += `

        <div class="card">

            <img src="${flower.image}" alt="${flower.name}">

            <h3>${flower.name}</h3>

            <p>₹${flower.price}</p>

            <button onclick="addToCart(${flower.id})">
                Add To Cart
            </button>

        </div>

        `;

    });

    document.getElementById("flowers").innerHTML = output;

}

// ==========================================
// HOME PAGE BEST SELLERS
// ==========================================

function displayBestSellers() {

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    let output = "";

    let bestSellers = flowers.slice(0, Math.min(5, flowers.length));

    bestSellers.forEach(flower => {

        output += `

        <div class="card">

            <img src="${flower.image}" alt="${flower.name}">

            <h3>${flower.name}</h3>

            <p>₹${flower.price}</p>

            <button onclick="addToCart(${flower.id})">
                Add To Cart
            </button>

        </div>

        `;

    });

    document.getElementById("bestSellers").innerHTML = output;

}

// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = flowers.find(f => f.id === id);

    if (!product) {
        return;
    }

    // Check if product already exists in cart
    let existingItem = cart.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            ...product,
            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product.name + " added to cart 🌸");

}