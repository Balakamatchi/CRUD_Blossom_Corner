// ================================
// DISPLAY CART
// ================================

function displayCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let output="";

let total=0;

if(cart.length===0){

document.getElementById("cartItems").innerHTML=

"<div class='empty-cart'><h2>Your Cart is Empty !!!</h2></div>";

document.getElementById("totalPrice").innerHTML=0;

return;

}

cart.forEach((item,index)=>{

total += item.price * item.quantity;

output += `

<div class="card">

    <img src="${item.image}" alt="${item.name}">

    <h3>${item.name}</h3>

    <p>Price : ₹${item.price}</p>

    <p>Quantity : ${item.quantity}</p>

    <p><b>Subtotal : ₹${item.price * item.quantity}</b></p>

    <button onclick="removeCart(${index})">
        Remove
    </button>

</div>

`;

});

document.getElementById("cartItems").innerHTML=output;

document.getElementById("totalPrice").innerHTML=total;

}



// ================================
// REMOVE PRODUCT
// ================================

function removeCart(index){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}



// ================================
// BUY PRODUCTS
// ================================

function buyProducts(){

    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length===0){

        alert("Your cart is empty.");

        return;

    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let total = 0;

    cart.forEach(item=>{

        total += item.price * item.quantity;

    });

    let order = {

        orderId: Date.now(),

        customer: user.username,

        items: cart,

        total: total,

        date: new Date().toLocaleString(),

        status: "Pending"

    };

    orders.push(order);

    localStorage.setItem("orders",JSON.stringify(orders));

    alert(
        "🌸 Order Placed Successfully!\n\n"+
        "Total Amount : ₹"+total
    );

    localStorage.removeItem("cart");

    displayCart();

}