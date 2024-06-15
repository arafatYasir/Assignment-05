var totalPrice = 0.00;
var n = 1;

// Adding products in the cart
function add(name, price)
{
    const product = document.createElement("h3");
    product.innerText = n + ". " + name;
    const cart = document.getElementById("cart-section");
    cart.appendChild(product);
    cart.style.marginBottom = "16px";

    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice + " TK";
    n++;
    
    if(totalPrice > 0) {
        const purchaseBtn = document.getElementById("purchase-btn");
        purchaseBtn.disabled = false;
    }
}
// Coupon button function
document.getElementById("coupon-field").addEventListener("keyup", function() {
    const couponField = document.getElementById("coupon-field");
    const couponCode = couponField.value;
    
    if(couponCode == "SELL20") {
        document.getElementById("coupon-apply-btn").disabled = false;
    }
    else {
        document.getElementById("coupon-apply-btn").disabled = true;
    }
});

// Coupon Apply button function
document.getElementById("coupon-apply-btn").addEventListener("click", function() {
    if(totalPrice >= 200) {
        const discountAmount = (totalPrice / 100) * 20;
        document.getElementById("discount").innerText = discountAmount.toFixed(2) + " TK";

        const total = totalPrice - discountAmount;
        document.getElementById("total").innerText = total.toFixed(2) + " TK";
    }
    else {
        alert("To recieve discount you have to buy at least 200 TK product");
    }
});