const products = [
  { name: "Wireless Headphones", category: "electronics", price: 1499, rating: 4.6, image: "headphone.webp" },
  { name: "Smartphone", category: "electronics", price: 9999, rating: 4.8, image: "phone.jpeg" },
  { name: "T-shirt", category: "clothing", price: 499, rating: 4.3, image: "T SHIRT.jpeg" },
  { name: "sunglass", category: "clothing", price: 499, rating: 4.3, image: "sunglass.jpeg" },
  { name: "Sneakers", category: "clothing", price: 1899, rating: 4.5, image: "SNEAKERS.jpeg" },
  { name: "Smart Watch", category: "electronics", price: 2499, rating: 4.2, image: "watch.webp" },
  { name: "Laptop", category: "electronics", price: 2499, rating: 4.2, image: "laptop.jpeg" },
  { name: "flour", category: "food", price: 2499, rating: 4.2, image: "flour.jpeg" },
  { name: "salt", category: "food", price: 2499, rating: 4.2, image: "salt.jpeg" },
  { name: "rice", category: "food", price: 2499, rating: 4.2, image: "rice.jpeg" },
  { name: "tea", category: "food", price: 2499, rating: 4.2, image: "tea.jpeg" },
  { name: "milk", category: "food", price: 2499, rating: 4.2, image: "milk.jpeg" }
];

function displayProducts(items) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>Rating: ⭐ ${product.rating}</p>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filter").value;
  let filtered = category === "all" ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const order = document.getElementById("sort").value;
  let sorted = [...products];
  sorted.sort((a, b) => order === "asc" ? a.rating - b.rating : b.rating - a.rating);
  displayProducts(sorted);
}

function addToCart(productName) {
  alert(`${productName} added to cart! 🛒`);
}

// Load products on page load
displayProducts(products);
