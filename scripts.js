// Sample product data (replace with your own data)
const products = [
  { name: "Product 1", price: "$10", image: "product1.jpg" },
  { name: "Product 2", price: "$15", image: "product2.jpg" },
  { name: "Product 3", price: "$20", image: "product3.jpg" }
];

// Function to generate product cards dynamically
function generateProductCards() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="card">
        <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: ${product.price}</p>
          <button class="btn btn-primary" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
        </div>
      </div>
    `;

    productList.appendChild(card);
  });
}

// Function to simulate adding a product to the cart
function addToCart(name, price) {
  alert(`Added ${name} to cart. Price: ${price}`);
}

// Generate product cards when the page loads
document.addEventListener("DOMContentLoaded", generateProductCards);
