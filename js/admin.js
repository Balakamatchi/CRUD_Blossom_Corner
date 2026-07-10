// ==========================================
// ADD FORM VARIABLES
// ==========================================

let addFlowerName = document.getElementById("addFlowerName");
let addFlowerPrice = document.getElementById("addFlowerPrice");
let addFlowerImage = document.getElementById("addFlowerImage");

// ==========================================
// UPDATE FORM VARIABLES
// ==========================================

let updateFlowerName = document.getElementById("updateFlowerName");
let updateFlowerPrice = document.getElementById("updateFlowerPrice");
let updateFlowerImage = document.getElementById("updateFlowerImage");

let editingId = null;

// ==========================================
// ADD PRODUCT
// ==========================================

function addFlower(){

    if(
        addFlowerName.value.trim()==="" ||
        addFlowerPrice.value.trim()==="" ||
        addFlowerImage.value.trim()===""
    ){
        alert("Please fill all fields.");
        return;
    }

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    let newId = Math.max(...flowers.map(f=>f.id),0)+1;

    flowers.push({

        id:newId,

        name:addFlowerName.value,

        price:Number(addFlowerPrice.value),

        image:addFlowerImage.value

    });

    localStorage.setItem("flowers",JSON.stringify(flowers));

    clearAddFields();

    displayFlowers();

    alert("Flower Added Successfully.");

}

// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayFlowers(){

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    let output="";

    flowers.forEach(flower=>{

        output += `

        <div class="card">

            <img src="${flower.image}" alt="${flower.name}">

            <h3>${flower.name}</h3>

            <p>₹${flower.price}</p>

            <button onclick="editFlower(${flower.id})">
                Edit
            </button>

            <button onclick="deleteFlower(${flower.id})">
                Delete
            </button>

        </div>

        `;

    });

    document.getElementById("flowers").innerHTML = output;

}

// ==========================================
// LOAD UPDATE FORM
// ==========================================

function editFlower(id){

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    let flower = flowers.find(f=>f.id===id);

    if(!flower) return;

    updateFlowerName.value = flower.name;
    updateFlowerPrice.value = flower.price;
    updateFlowerImage.value = flower.image;

    editingId = id;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ==========================================
// UPDATE PRODUCT
// ==========================================

function updateFlower(){

    if(editingId===null){

        alert("Select a flower first.");

        return;

    }

    if(
        updateFlowerName.value.trim()==="" ||
        updateFlowerPrice.value.trim()==="" ||
        updateFlowerImage.value.trim()===""
    ){

        alert("Please fill all fields.");

        return;

    }

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    flowers.forEach(flower=>{

        if(flower.id===editingId){

            flower.name = updateFlowerName.value;

            flower.price = Number(updateFlowerPrice.value);

            flower.image = updateFlowerImage.value;

        }

    });

    localStorage.setItem("flowers",JSON.stringify(flowers));

    editingId = null;

    clearUpdateFields();

    displayFlowers();

    alert("Flower Updated Successfully.");

}

// ==========================================
// DELETE PRODUCT
// ==========================================

function deleteFlower(id){

    if(!confirm("Delete this flower?")) return;

    let flowers = JSON.parse(localStorage.getItem("flowers")) || [];

    flowers = flowers.filter(f=>f.id!==id);

    localStorage.setItem("flowers",JSON.stringify(flowers));

    displayFlowers();

    alert("Flower Deleted.");

}

// ==========================================
// CLEAR ADD FORM
// ==========================================

function clearAddFields(){

    addFlowerName.value="";

    addFlowerPrice.value="";

    addFlowerImage.value="";

}

// ==========================================
// CLEAR UPDATE FORM
// ==========================================

function clearUpdateFields(){

    updateFlowerName.value="";

    updateFlowerPrice.value="";

    updateFlowerImage.value="";

}