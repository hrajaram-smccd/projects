// Prompt for price.
var price = prompt("Enter Price in $");
// Prompt for quantity.
var quantity = prompt("Enter Quantity");

// Check if price and quantity are valid numbers
if ((!isNaN(price)) && (!isNaN(quantity))) {
    // Calculate subtotal
    var subTotal = quantity * price;
    var discount = 0;
    // Calculate Discount
    if (subTotal >= 500) {
        discount = subTotal * 0.05;
    }
    else {
        discount = subTotal * 0.03;
    }
    // Calculate total
    var total = subTotal - discount;

    // write output
    document.write("<p>Subtotal: $ " + subTotal.toFixed(2) + "</p>");
    document.write("<p>Discount: $ " + discount.toFixed(2) + "</p>");
    document.write("<p>Total: $ " + total.toFixed(2) + "</p>");
    document.write("<p>Programmed by Hamsa Rajaraman</p>");
}