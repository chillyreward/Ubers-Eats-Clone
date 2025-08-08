// script.js

// ----------- Mock Data -----------
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    category: "Pizza",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1601924582975-7e34c3ba1b0e" // Pizza
  },
  {
    id: 2,
    name: "Burger Bros",
    category: "Burgers",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349" // Burger
  },
  {
    id: 3,
    name: "Dragon Wok",
    category: "Asian",
    cuisine: "Chinese",
    rating: 4.7,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1600628422012-51ab6d9fd3a2" // Noodles
  },
  {
    id: 4,
    name: "Sweet Treats",
    category: "Dessert",
    cuisine: "Bakery",
    rating: 4.8,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1606813902872-5f1e5df32755" // Desserts
  },
  {
    id: 5,
    name: "Taco Town",
    category: "Tacos",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1601924579530-c5ad8e23f52c" // Tacos
  },
  {
    id: 6,
    name: "Curry Express",
    category: "Asian",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1605470657576-0efc1c4190a7" // Curry
  },
  {
    id: 7,
    name: "Sushi World",
    category: "Asian",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1562158070-622a1ff18a89" // Sushi
  },
  {
    id: 8,
    name: "Grill House",
    category: "Burgers",
    cuisine: "Grill",
    rating: 4.2,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1612197524266-b681bfb01ea5" // Grilled meat
  },
  {
    id: 9,
    name: "Healthy Bowl",
    category: "Healthy",
    cuisine: "Salads",
    rating: 4.3,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" // Salad
  },
  {
    id: 10,
    name: "Pasta Point",
    category: "Pasta",
    cuisine: "Italian",
    rating: 4.4,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1625941210159-43d11d1b8d7f" // Pasta
  },
  {
    id: 11,
    name: "Falafel Joint",
    category: "Wraps",
    cuisine: "Middle Eastern",
    rating: 4.1,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1625941210532-2b3d8f9324cf" // Falafel
  },
  {
    id: 12,
    name: "Crepe Kingdom",
    category: "Dessert",
    cuisine: "French",
    rating: 4.6,
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" // Crepes
  },
  {
    id: 13,
    name: "Donut Drive",
    category: "Dessert",
    cuisine: "Bakery",
    rating: 4.5,
    deliveryTime: "15-20 min",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" // Donuts
  },
  {
    id: 14,
    name: "BBQ Pit",
    category: "Grill",
    cuisine: "American",
    rating: 4.7,
    deliveryTime: "30-45 min",
    image: "https://images.unsplash.com/photo-1601924757063-25fc25fc4e94" // BBQ
  },
  {
    id: 15,
    name: "Noodle Nest",
    category: "Asian",
    cuisine: "Thai",
    rating: 4.4,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1617196032283-7203b7971b54" // Thai noodles
  }
];

// ----------- Global State -----------
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let filteredRestaurants = [...restaurants];

// ----------- DOM References -----------
const restaurantGrid = document.getElementById("restaurantGrid");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

// ----------- Render Restaurants -----------
function renderRestaurants(data) {
  restaurantGrid.innerHTML = "";
  data.forEach((restaurant) => {
    const card = document.createElement("div");
    card.classList.add("restaurant-card");
    card.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}" />
      <div class="restaurant-info">
        <h3>${restaurant.name}</h3>
        <p>${restaurant.cuisine} • ${restaurant.rating} ★ • ${restaurant.deliveryTime}</p>
        <button onclick="addToCart(${restaurant.id})">+ Add</button>
      </div>
    `;
    restaurantGrid.appendChild(card);
  });
}

// ----------- Add to Cart -----------
function addToCart(id) {
  const item = restaurants.find((r) => r.id === id);
  const exists = cart.find((i) => i.id === id);
  if (exists) {
    exists.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
}

// ----------- Update Cart UI -----------
function updateCart() {
  cartItems.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.qty * 500; // Assume fixed price
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>KSH ${item.qty * 500}</span>
    `;
    cartItems.appendChild(div);
  });

  subtotalEl.textContent = `KSH ${subtotal}`;
  const delivery = 100;
  totalEl.textContent = `KSH ${subtotal + delivery}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ----------- Toggle Cart Modal -----------
document.querySelector(".cart-icon").addEventListener("click", () => {
  cartModal.classList.add("visible");
  overlay.classList.add("visible");
  updateCart();
});

document.getElementById("closeCartBtn").addEventListener("click", () => {
  cartModal.classList.remove("visible");
  overlay.classList.remove("visible");
});

overlay.addEventListener("click", () => {
  cartModal.classList.remove("visible");
  overlay.classList.remove("visible");
});

// ----------- Search (Debounced) -----------
let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const query = searchInput.value.toLowerCase();
    const results = restaurants.filter((r) =>
      r.name.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query)
    );
    renderRestaurants(results);
  }, 300);
});

// ----------- Filter by Category -----------
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    if (category === "All") {
      renderRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((r) => r.category === category);
      renderRestaurants(filtered);
    }
  });
});

// ----------- Init -----------
renderRestaurants(restaurants);
updateCart();
