function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let div = document.getElementById("cart-items");

    if (!div) return;

    if (cart.length === 0) {
        div.innerHTML = "<p>Your cart is empty</p>";
        return;
    }

    div.innerHTML = "";
    cart.forEach(item => {
        div.innerHTML += `
            <div class="product-card">
                <img src="${item.image}">
                <h2>${item.name}</h2>
                <p>₦${item.price}</p>
            </div>
        `;
    });
}
