const productList = document.getElementById("product-list");

function displayProducts(list) {
  productList.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₦${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function filterCategory(cat) {
  if (cat === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === cat);
    displayProducts(filtered);
  }
}

displayProducts(products);
