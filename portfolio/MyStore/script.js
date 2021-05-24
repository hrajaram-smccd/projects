"using strict;"
// Hamsa Rajaraman

var item = document.getElementById("item");
var qty = document.getElementById("qty");
var orderTotal = document.getElementById("orderTotal");
var receipt = document.getElementById("receipt");

//create array of objects 
//each product is an object with item and price 
const inventory = [
    {
        item:"Burger",
        price: 3.50
    },
    {
        item:"Taco",
        price: 4.00
    },    
    {
        item:"Veggie Pizza",
        price: 7.00
    },    
    {
        item:"Fries",
        price: 2.50
    },
    {
        item:"Drink",
        price: 1.00
    },
    {
        item:"Ice Cream",
        price: 2.00
    },
    {
        item:"Water",
        price: 0.00
    }    
];

//declare any global variables
let grandtotal = 0;

//display the inventory in a table on the webpage
console.log("Lenth of inventory " + inventory.length);

//create a variable for the HTML code to build the table
var tableHTML = "<table border='1' width='100%'>" + 
"<caption>MENU</caption>" + 
"<tr><th>Item</th><th>Price</th></tr>";

// Add rows for product
for(var i = 0; i < inventory.length; i++ ) {
    // add row
    tableHTML += "<tr>" + 
    "<td>" + inventory[i].item + "</td>" + 
    "<td align='right'>" + "$ " + inventory[i].price.toFixed(2) + "</td>" + 
    "</tr>";
}

// close the table tag.
tableHTML += "</table>";
console.log(tableHTML);
document.getElementById("menu").innerHTML = tableHTML;

//function to run when add is clicked
function addItem(){
    console.log("addItem button clicked");

    // Check for missing values
    if (item.value == "" || qty.value == "") {
        alert("Please enter Item and Quantity.");
    }
    else {
        // check if item is valid and get price from inventory
        let itemprice = findPrice(item.value);
        if (itemprice < 0) {
            alert("Please enter Item from menu.");
        }
        else {
            // Calculate Item total
            let quantity = parseInt(qty.value);
            let itemTotal = itemprice * quantity;

            // Add to grand total
            grandtotal += itemTotal;
            console.log(grandtotal);

            // Update totals and receipt
            orderTotal.innerHTML = grandtotal.toFixed(2);
            receipt.value += qty.value + "   " + item.value + " at $ " + itemprice.toFixed(2) + " each  = $ " + itemTotal.toFixed(2) + "\n";

            // reset order form
            item.value = "";
            qty.value = "";
        }
    }
}

//function to run when clear is clicked
function newOrder(){
    console.log("newOrder button clicked");

    receipt.value = "";
    orderTotal.innerHTML = "";
    grandtotal = 0;
    item.value = "";
    qty.value = "";
}

// Function to run when place order is clicked
function placeOrder() {
    console.log("placeOrder button clicked");
    console.log(grandtotal);
    if (grandtotal > 0) {
        alert("Order placed, will arrive shortly.");
        newOrder();
    }
    else {
        alert("Please enter items in order.");
    }
}

//this function searches for useritem in the inventory array
//it returns the price if found
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (let i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}
