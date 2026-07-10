function displayOrders(){

    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let myOrders = orders.filter(order =>
        order.customer === user.username
    );

    let output = "";

    if(myOrders.length === 0){

        output = "<h2 style='text-align:center; margin-top:50px; color:#c40d69; font-size:40px;'>Place Your First Order!</h2><h3 style='text-align:center; margin-top:50px; color:#c40d64; font-size:30px;'><a href='products.html'>View All Products →</a></h3>";

    }else{

        myOrders.forEach(order=>{

            output += `

            <div class="dot">

                <h2>Order Id : #${order.orderId}</h2>
                <br>
                <p><b>Date & Time :</b> ${order.date}</p>
                <br>
                <p><b>Total :</b> ₹${order.total}</p>
                <br>
                <p><b>Status :</b>
                    <span class="${
                        order.status === "Delivered"
                            ? "status-delivered"
                            : "status-pending"
                    }">${order.status}</span>
                </p>
                <br>

                <table class="orderTable">

                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

            `;

            order.items.forEach((item,index)=>{

                output += `

                    <tr>

                        <td>${index+1}</td>

                        <td>${item.name}</td>

                        <td>₹${item.price}</td>

                        <td>${item.quantity}</td>

                        <td>₹${item.price * item.quantity}</td>

                    </tr>

                `;

            });

            output += `

                    <tr>

                        <td colspan="4" style="text-align:right;">
                            <b>Grand Total</b>
                        </td>

                        <td>
                            <b>₹${order.total}</b>
                        </td>

                    </tr>

                </table>

            </div>

            <br>

            `;

        });

    }

    document.getElementById("orders").innerHTML = output;

}