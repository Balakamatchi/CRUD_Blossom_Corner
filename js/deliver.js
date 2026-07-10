function displayAllOrders(){

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let output="";

    if(orders.length==0){

        output="<h2>No Orders Found.</h2>";

    }

    orders.forEach(order=>{

        output+=`

        <div class="dot">
        
        <h2>Order Id : #${order.orderId}</h2>
        <br>
        <p><b>Customer :</b> ${order.customer}</p>
        <br>
        <p><b>Date & Time :</b> ${order.date}</p>
        <br>
        <p><b>Total :</b> ₹${order.total}</p>
        <br>
        <p>
            <b>Status :</b>

            <span class="${
                order.status === "Delivered"
                    ? "status-delivered"
                    : "status-pending"
                }">
                ${order.status}
            </span>
        </p>

        <table class="orderTable">

        <tr>

        <th>S.No</th>

        <th>Product</th>

        <th>Price</th>

        <th>Qty</th>

        <th>Subtotal</th>

        </tr>

        `;

        order.items.forEach((item,index)=>{

            output+=`

            <tr>

            <td>${index+1}</td>

            <td>${item.name}</td>

            <td>₹${item.price}</td>

            <td>${item.quantity}</td>

            <td>₹${item.price*item.quantity}</td>

            </tr>

            `;

        });

        output+=`

        </table>

        <br>

        `;
        if ((order.status || "Pending") === "Pending") {

            output += `

                <button onclick="deliverOrder(${order.orderId})">
                    Deliver Order
                </button>

            `;

        } else {

            output += `

                <p class="status-delivered">
                    ✅ Order Delivered
                </p>

            `;

        }
        output+=`

        </div>

        <br>

        `;

    });

    document.getElementById("orders").innerHTML=output;

}


function deliverOrder(id){

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.forEach(order=>{

        if(order.orderId==id){

            order.status="Delivered";

        }

    });

    localStorage.setItem("orders",JSON.stringify(orders));

    alert("Order Delivered Successfully.");

    displayAllOrders();

}