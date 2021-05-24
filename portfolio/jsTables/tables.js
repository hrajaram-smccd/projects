/* Hamsa Rajaraman*/

"use strict;"
// window.alert("Connected");
// Create data for the table here.

let products = [
    {
        item:"Burger",
        price: 3.50
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
    }    
];

console.log("Lenth of products " + products.length);

//create a variable for the HTML code to build the table
var tableHTML = "<table>" + 
"<caption>MENU</caption>" + 
"<tr><th>Item</th><th>Price</th></tr>";

// Add rows for product
for(var i = 0; i < products.length; i++ ) {
    // add row
    tableHTML += "<tr>" + 
    "<td>" + products[i].item + "</td>" + 
    "<td>" + products[i].price + "</td>" + 
    "</tr>";
}

// close the table tag.
tableHTML += "</table>";

console.log(tableHTML);

document.getElementById("menu").innerHTML = tableHTML;
