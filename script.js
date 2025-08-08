// Uber Eats Clone - Vanilla JS Implementation

// Data Storage
const data = {
    restaurants: [
        {
            id: 1,
            name: "Burger Palace",
            cuisine: "American, Burgers",
            rating: 4.5,
            deliveryTime: "20-30 min",
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
            categories: ["Burgers", "American"],
            menu: {
                "Burgers": [
                    {
                        id: 101,
                        name: "Classic Cheeseburger",
                        description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
                        price: 8.99,
                        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80"
                    },
                    {
                        id: 102,
                        name: "Bacon Burger",
                        description: "Classic cheeseburger with crispy bacon strips",
                        price: 10.99,
                        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                    }
                ],
                "Sides": [
                    {
                        id: 103,
                        name: "French Fries",
                        description: "Crispy golden fries with a pinch of salt",
                        price: 3.99,
                        image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    }
                ],
                "Drinks": [
                    {
                        id: 104,
                        name: "Soda",
                        description: "Choice of Coke, Pepsi, Sprite or Dr. Pepper",
                        price: 1.99,
                        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1430&q=80"
                    }
                ]
            }
        },
        {
            id: 2,
            name: "Pizza Heaven",
            cuisine: "Italian, Pizza",
            rating: 4.7,
            deliveryTime: "25-35 min",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1381&q=80",
            categories: ["Pizza", "Italian"],
            menu: {
                "Pizza": [
                    {
                        id: 201,
                        name: "Margherita Pizza",
                        description: "Classic pizza with tomato sauce, mozzarella, and basil",
                        price: 12.99,
                        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    },
                    {
                        id: 202,
                        name: "Pepperoni Pizza",
                        description: "Classic pizza with tomato sauce, mozzarella, and pepperoni",
                        price: 14.99,
                        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    }
                ],
                "Sides": [
                    {
                        id: 203,
                        name: "Garlic Bread",
                        description: "Toasted bread with garlic butter",
                        price: 4.99,
                        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80"
                    }
                ]
            }
        },
        {
            id: 3,
            name: "Sushi World",
            cuisine: "Japanese, Sushi",
            rating: 4.8,
            deliveryTime: "30-40 min",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            categories: ["Sushi", "Japanese", "Asian"],
            menu: {
                "Sushi Rolls": [
                    {
                        id: 301,
                        name: "California Roll",
                        description: "Crab, avocado, and cucumber",
                        price: 8.99,
                        image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    },
                    {
                        id: 302,
                        name: "Spicy Tuna Roll",
                        description: "Fresh tuna with spicy mayo",
                        price: 9.99,
                        image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    }
                ],
                "Appetizers": [
                    {
                        id: 303,
                        name: "Miso Soup",
                        description: "Traditional Japanese soup with tofu and seaweed",
                        price: 2.99,
                        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    }
                ]
            }
        },
        // More restaurants can be added here
    ],
    categories: [
        { name: "All", icon: "fa-utensils" },
        { name: "Burgers", icon: "fa-hamburger" },
        { name: "Pizza", icon: "fa-pizza-slice" },
        { name: "Sushi", icon: "fa-fish" },
        { name: "Asian", icon: "fa-utensils" },
        { name: "Italian", icon: "fa-cheese" },
        { name: "Mexican", icon: "fa-pepper-hot" },
        { name: "Desserts", icon: "fa-ice-cream" },
        { name: "Healthy", icon: "fa-apple-alt" }
    ]
};

// DOM Elements
const elements = {
    restaurantGrid: document.getElementById('restaurantGrid'),
    categoryList: document.getElementById('categoryList'),
    searchInput: document.getElementById('searchInput'),
    sortSelect: document.getElementById('sortSelect'),
    menuModal: document.getElementById('menuModal'),
    closeModal: document.getElementById('closeModal'),
    menuRestaurantName: document.getElementById('menuRestaurantName'),
    menuRestaurantCuisine: document.getElementById('menuRestaurantCuisine'),
    menuRestaurantRating: document.getElementById('menuRestaurantRating'),
    menuRestaurantDeliveryTime: document.getElementById('menuRestaurantDeliveryTime'),
    menuCategories: document.getElementById('menuCategories'),
    menuItems: document.getElementById('menuItems'),
    cartButton: document.getElementById('cartButton'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartSidebar: document.getElementById('cartSidebar'),
    closeCart: document.getElementById('closeCart'),
    cartItems: document.getElementById('cartItems'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTax: document.getElementById('cartTax'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutButton: document.getElementById('checkoutButton'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutModal: document.getElementById('closeCheckoutModal'),
    checkoutForm: document.getElementById('checkoutForm'),
    confirmationModal: document.getElementById('confirmationModal'),
    closeConfirmationModal: document.getElementById('closeConfirmationModal'),
    estimatedTime: document.getElementById('estimatedTime'),
    orderNumber: document.getElementById('orderNumber'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    hamburger: document.getElementById('hamburger'),
    mobileNav: document.getElementById('mobileNav'),
    closeNav: document.getElementById('closeNav')
};

// State Management
const state = {
    cart: [],
    currentRestaurant: null,
    currentCategory: 'All',
    currentMenuCategory: null,
    darkMode: false,
    orders: []
};

// Initialize the app
function init() {
    loadCart();
    renderCategories();
    renderRestaurants();
    setupEventListeners();
    checkDarkMode();
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        state.cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const count = state.cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Render categories
function renderCategories() {
    elements.categoryList.innerHTML = '';
    data.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = `category-item ${category.name === state.currentCategory ? 'active' : ''}`;
        categoryElement.innerHTML = `
            <i class="fas ${category.icon}"></i>
            <span>${category.name}</span>
        `;
        categoryElement.addEventListener('click', () => {
            state.currentCategory = category.name;
            renderCategories();
            renderRestaurants();
        });
        elements.categoryList.appendChild(categoryElement);
    });
}

// Render restaurants
function renderRestaurants() {
    elements.restaurantGrid.innerHTML = '<div class="skeleton-loader"></div>'.repeat(6);
    
    // Simulate loading delay
    setTimeout(() => {
        let filteredRestaurants = [...data.restaurants];
        
        // Filter by category
        if (state.currentCategory !== 'All') {
            filteredRestaurants = filteredRestaurants.filter(restaurant => 
                restaurant.categories.includes(state.currentCategory)
            );
        }
        
        // Filter by search term
        const searchTerm = elements.searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredRestaurants = filteredRestaurants.filter(restaurant => 
                restaurant.name.toLowerCase().includes(searchTerm) || 
                restaurant.cuisine.toLowerCase().includes(searchTerm)
            );
        }
        
        // Sort restaurants
        const sortBy = elements.sortSelect.value;
        filteredRestaurants.sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'deliveryTime') {
                const aTime = parseInt(a.deliveryTime.split('-')[0]);
                const bTime = parseInt(b.deliveryTime.split('-')[0]);
                return aTime - bTime;
            }
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return 0;
        });
        
        // Render restaurants
        elements.restaurantGrid.innerHTML = '';
        filteredRestaurants.forEach(restaurant => {
            const restaurantElement = document.createElement('div');
            restaurantElement.className = 'restaurant-card';
            restaurantElement.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <p>${restaurant.cuisine}</p>
                    <div class="restaurant-meta">
                        <span class="rating">★ ${restaurant.rating}</span>
                        <span class="delivery-time">${restaurant.deliveryTime}</span>
                    </div>
                </div>
            `;
            restaurantElement.addEventListener('click', () => openRestaurantMenu(restaurant));
            elements.restaurantGrid.appendChild(restaurantElement);
        });
    }, 500);
}

// Open restaurant menu
function openRestaurantMenu(restaurant) {
    state.currentRestaurant = restaurant;
    state.currentMenuCategory = Object.keys(restaurant.menu)[0];
    
    // Update restaurant info
    elements.menuRestaurantName.textContent = restaurant.name;
    elements.menuRestaurantCuisine.textContent = restaurant.cuisine;
    elements.menuRestaurantRating.textContent = `★ ${restaurant.rating}`;
    elements.menuRestaurantDeliveryTime.textContent = restaurant.deliveryTime;
    
    // Render menu categories
    renderMenuCategories();
    
    // Render menu items
    renderMenuItems();
    
    // Show modal
    elements.menuModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render menu categories
function renderMenuCategories() {
    elements.menuCategories.innerHTML = '';
    Object.keys(state.currentRestaurant.menu).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = `menu-category ${category === state.currentMenuCategory ? 'active' : ''}`;
        categoryElement.textContent = category;
        categoryElement.addEventListener('click', () => {
            state.currentMenuCategory = category;
            renderMenuCategories();
            renderMenuItems();
        });
        elements.menuCategories.appendChild(categoryElement);
    });
}

// Render menu items
function renderMenuItems() {
    elements.menuItems.innerHTML = '';
    const items = state.currentRestaurant.menu[state.currentMenuCategory];
    
    items.forEach(item => {
        const cartItem = state.cart.find(ci => ci.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                <div class="menu-item-actions">
                    ${quantity > 0 ? `
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                    ` : ''}
                    <button class="add-to-cart" data-id="${item.id}">
                        ${quantity > 0 ? 'Update' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        if (quantity > 0) {
            itemElement.querySelector('.minus').addEventListener('click', (e) => {
                updateCartItem(item.id, -1);
                e.stopPropagation();
            });
            itemElement.querySelector('.plus').addEventListener('click', (e) => {
                updateCartItem(item.id, 1);
                e.stopPropagation();
            });
        }
        
        itemElement.querySelector('.add-to-cart').addEventListener('click', (e) => {
            updateCartItem(item.id, 1);
            e.stopPropagation();
        });
        
        elements.menuItems.appendChild(itemElement);
    });
}

// Update cart item quantity
function updateCartItem(itemId, change) {
    const itemIndex = state.cart.findIndex(item => item.id === itemId);
    const restaurant = state.currentRestaurant;
    const menuItem = Object.values(restaurant.menu)
        .flat()
        .find(item => item.id === itemId);
    
    if (itemIndex >= 0) {
        // Update existing item
        const newQuantity = state.cart[itemIndex].quantity + change;
        if (newQuantity <= 0) {
            state.cart.splice(itemIndex, 1);
        } else {
            state.cart[itemIndex].quantity = newQuantity;
        }
    } else if (change > 0) {
        // Add new item
        state.cart.push({
            id: itemId,
            restaurantId: restaurant.id,
            restaurantName: restaurant.name,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
            image: menuItem.image
        });
    }
    
    saveCart();
    renderMenuItems();
    renderCartItems();
}

// Open cart sidebar
function openCart() {
    elements.cartOverlay.classList.add('active');
    elements.cartSidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartItems();
}

// Close cart sidebar
function closeCart() {
    elements.cartOverlay.classList.remove('active');
    elements.cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Render cart items
function renderCartItems() {
    elements.cartItems.innerHTML = '';
    
    if (state.cart.length === 0) {
        elements.cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        elements.cartSubtotal.textContent = '$0.00';
        elements.cartTax.textContent = '$0.00';
        elements.cartTotal.textContent = '$0.00';
        return;
    }
    
    let subtotal = 0;
    
    state.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity} = $${itemTotal.toFixed(2)}</div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        cartItemElement.querySelector('.minus').addEventListener('click', () => {
            updateCartItem(item.id, -1);
        });
        
        cartItemElement.querySelector('.plus').addEventListener('click', () => {
            updateCartItem(item.id, 1);
        });
        
        cartItemElement.querySelector('.remove-item').addEventListener('click', () => {
            const itemIndex = state.cart.findIndex(ci => ci.id === item.id);
            if (itemIndex >= 0) {
                state.cart.splice(itemIndex, 1);
                saveCart();
                renderCartItems();
                renderMenuItems();
            }
        });
        
        elements.cartItems.appendChild(cartItemElement);
    });
    
    const tax = subtotal * 0.1; // 10% tax
    const deliveryFee = 2.99;
    const total = subtotal + tax + deliveryFee;
    
    elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    elements.cartTax.textContent = `$${tax.toFixed(2)}`;
    elements.cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Open checkout modal
function openCheckout() {
    closeCart();
    elements.checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close checkout modal
function closeCheckout() {
    elements.checkoutModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show order confirmation
function showOrderConfirmation() {
    closeCheckout();
    
    // Generate random order number and estimated time
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    const minutes = Math.floor(30 + Math.random() * 30);
    const estimatedTime = `${minutes}-${minutes + 15} minutes`;
    
    elements.orderNumber.textContent = orderNumber;
    elements.estimatedTime.textContent = estimatedTime;
    
    // Save order to history
    const order = {
        id: orderNumber,
        date: new Date().toISOString(),
        items: [...state.cart],
        total: parseFloat(document.getElementById('cartTotal').textContent.replace('$', ''))
    };
    
    state.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(state.orders));
    
    // Clear cart
    state.cart = [];
    saveCart();
    
    // Show confirmation
    elements.confirmationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Simulate order progress
    setTimeout(() => {
        document.querySelectorAll('.tracking-steps .step')[1].classList.add('active');
    }, 10000);
    
    setTimeout(() => {
        document.querySelectorAll('.tracking-steps .step')[2].classList.add('active');
    }, 20000);
}

// Close order confirmation
function closeConfirmation() {
    elements.confirmationModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle dark mode
function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', state.darkMode);
    elements.darkModeToggle.innerHTML = state.darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Check dark mode preference
function checkDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
        state.darkMode = savedMode === 'true';
        document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
        elements.darkModeToggle.innerHTML = state.darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search with debounce
    let searchTimeout;
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            renderRestaurants();
        }, 300);
    });
    
    // Sort change
    elements.sortSelect.addEventListener('change', renderRestaurants);
    
    // Modal close
    elements.closeModal.addEventListener('click', () => {
        elements.menuModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Cart open/close
    elements.cartButton.addEventListener('click', openCart);
    elements.closeCart.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', closeCart);
    
    // Checkout
    elements.checkoutButton.addEventListener('click', openCheckout);
    elements.closeCheckoutModal.addEventListener('click', closeCheckout);
    
    // Order confirmation
    elements.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showOrderConfirmation();
    });
    
    elements.closeConfirmationModal.addEventListener('click', closeConfirmation);
    
    // Dark mode toggle
    elements.darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Mobile navigation
    elements.hamburger.addEventListener('click', () => {
        elements.mobileNav.classList.add('active');
    });
    
    elements.closeNav.addEventListener('click', () => {
        elements.mobileNav.classList.remove('active');
    });
    
    // Close modals on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.menuModal.classList.contains('active')) {
                elements.menuModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else if (elements.cartSidebar.classList.contains('active')) {
                closeCart();
            } else if (elements.checkoutModal.classList.contains('active')) {
                closeCheckout();
            } else if (elements.confirmationModal.classList.contains('active')) {
                closeConfirmation();
            }
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);