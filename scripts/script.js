var totalPrice = 0;
var n = 1;

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
}