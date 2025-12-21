document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("product-list");

  if (!productList) {
    alert("Product list not found");
    return;
  }

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₦${product.price}</p>
      <button>Add to Cart</button>
    `;

    productList.appendChild(div);
  });
});
