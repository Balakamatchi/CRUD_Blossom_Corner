// CREATE DEFAULT ADMIN ACCOUNT


let users = JSON.parse(localStorage.getItem("users")) || [];

// Check whether an admin account already exists
let adminExists = users.some(user => user.role === "admin");

if (!adminExists) {

    users.push({

        username: "Cupid",
        email: "cupid@blossom.com",
        phone: "9128643634",
        password: "27102024",
        role: "admin"

    });

    localStorage.setItem("users", JSON.stringify(users));

}


// REGISTER CUSTOMER

function register() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (
        username == "" ||
        email == "" ||
        phone == "" ||
        password == "" ||
        confirmPassword == ""
    ) {

        alert("Please fill all fields.");
        return;

    }

    if (password != confirmPassword) {

        alert("Passwords do not match.");
        return;

    }

    let users = JSON.parse(localStorage.getItem("users"));

    let exists = users.find(user => user.username === username);

    if (exists) {

        alert("Username already exists.");
        return;

    }

    let customer = {

        username: username,
        email: email,
        phone: phone,
        password: password,

        // Every registration becomes Customer

        role: "customer"

    };

    users.push(customer);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "login.html";

}

// LOGIN


function login() {

    let username = document.getElementById("loginUsername").value.trim();

    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users"));

    let foundUser = users.find(user =>

        user.username === username &&
        user.password === password

    );

    if (!foundUser) {

        alert("Invalid Username or Password");

        return;

    }

    localStorage.setItem(

        "loggedInUser",

        JSON.stringify(foundUser)

    );

    alert("Login Successful");

    if (foundUser.role === "admin") {

        window.location.href = "admin.html";

    }

    else {

        window.location.href = "home.html";

    }

}

// LOGOUT

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";

}