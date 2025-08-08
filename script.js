/* =========================================================
   Uber Eats Clone – Pure Front-End
   ========================================================= */

(() => {
  /* ---------- MOCK DATA ---------- */
  const restaurants = [
    {
      id: 1,
      name: 'Pizza Palace',
      cuisine: 'Pizza',
      rating: 4.7,
      deliveryTime: '25–35 min',
      deliveryFee: 2.99,
      image: 'https://picsum.photos/seed/pizza/600/400',
      menu: [
        { category: 'Pizza', name: 'Margherita', price: 9.99, description: 'Fresh mozzarella & basil', image: 'https://picsum.photos/seed/marg/200/200' },
        { category: 'Pizza', name: 'Pepperoni', price: 11.99, description: 'Classic pepperoni', image: 'https://picsum.photos/seed/pep/200/200' },
        { category: 'Drinks', name: 'Cola', price: 1.99, description: '330ml can', image: 'https://picsum.photos/seed/cola/200/200' }
      ]
    },
    {
      id: 2,
      name: 'Burger Barn',
      cuisine: 'Burgers',
      rating: 4.5,
      deliveryTime: '20–30 min',
      deliveryFee: 1.99,
      image: 'https://picsum.photos/seed/burger/600/400',
      menu: [
        { category: 'Burgers', name: 'Classic Cheese', price: 8.49, description: 'Beef patty, cheese, lettuce', image: 'https://picsum.photos/seed/cheese/200/200' },
        { category: 'Burgers', name: 'BBQ Bacon', price: 9.99, description: 'Bacon, BBQ sauce, onion rings', image: 'https://picsum.photos/seed/bbq/200/200' },
        { category: 'Sides', name: 'Fries', price: 2.99, description: 'Crispy golden fries', image: 'https://picsum.photos/seed/fries/200/200' }
      ]
    },
    /* Add 13 more restaurants to reach 15 */
    ...Array.from({ length: 13 }, (_, i) => ({
      id: i + 3,
      name: `Restaurant ${i + 3}`,
      cuisine: ['Asian', 'Dessert', 'Healthy'][i % 3],
      rating: (4 + Math.random()).toFixed(1),
      deliveryTime: `${20 + i % 3 * 5}-${30 + i % 3 * 10} min`,
      deliveryFee: (1.5 + i * 0.2).toFixed(2),
      image: `https://picsum.photos/seed/r${i}/600/400`,
      menu: Array.from({ length: 5 }, (__, j) => ({
        category: ['Mains', 'Sides', 'Drinks'][j % 3],
        name: `Item ${j + 1}`,
        price: (5 + j * 1.5).toFixed(2),
        description: 'Delicious dish',
        image: `https://picsum.photos/seed/item${j}/200/200`
      }))
    }))
  ];

  /* ---------- STATE ---------- */
  let cart = JSON.parse(localStorage.getItem('ueCart') || '[]');
  let activeRestaurant = null;
  let orderHistory = JSON.parse(localStorage.getItem('ueOrders') || '[]');

  /* ---------- DOM ---------- */
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const restaurantList = qs('#restaurantList');
  const searchInput = qs('#searchInput');
  const categoryFilters = qs('#categoryFilters');
  const cartBtn = qs('#cartBtn');
  const cartSidebar = qs('#cartSidebar');
  const closeCart = qs('#closeCart');
  const cartItems = qs('#cartItems');
  const cartTotals = qs('#cartTotals');
  const checkoutBtn = qs('#checkoutBtn');
  const menuModal = qs('#menuModal');
  const closeMenu = qs('#closeMenu');
  const menuContent = qs('#menuContent');
  const checkoutModal = qs('#checkoutModal');
  const closeCheckout = qs('#closeCheckout');
  const checkoutForm = qs('#checkoutForm');
  const orderStatus = qs('#orderStatus');
  const closeStatus = qs('#closeStatus');

  /* ---------- UTILS ---------- */
  const saveCart = () => localStorage.setItem('ueCart', JSON.stringify(cart));
  const renderCartCount = () => {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    qs('#cartCount').textContent = count;
  };
  const formatPrice = p => `$${Number(p).toFixed(2)}`;

  /* ---------- RESTAURANT RENDER ---------- */
  const createRestaurantCard = r => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img class="card__img" src="${r.image}" alt="${r.name}" loading="lazy"/>
      <div class="card__body">
        <h3 class="card__title">${r.name}</h3>
        <div class="card__meta">
          <span>${r.cuisine}</span>
          <span>★ ${r.rating}</span>
          <span>${r.deliveryTime}</span>
          <span>${formatPrice(r.deliveryFee)} delivery</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openMenu(r));
    return card;
  };

  const renderRestaurants = (list = restaurants) => {
    restaurantList.innerHTML = '';
    list.forEach(r => restaurantList.appendChild(createRestaurantCard(r)));
  };

  /* ---------- FILTER & SEARCH ---------- */
  const filterByCategory = category => {
    let filtered = restaurants;
    if (category !== 'all') filtered = restaurants.filter(r => r.cuisine === category);
    renderRestaurants(filtered);
  };

  const debounce = (fn, ms) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  };

  const handleSearch = debounce(term => {
    const lower = term.toLowerCase();
    const filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(lower) ||
      r.cuisine.toLowerCase().includes(lower)
    );
    renderRestaurants(filtered);
  }, 300);

  /* ---------- MENU ---------- */
  const openMenu = restaurant => {
    activeRestaurant = restaurant;
    menuContent.innerHTML = '';
    const grouped = restaurant.menu.reduce((acc, item) => {
      (acc[item.category] ||= []).push(item);
      return acc;
    }, {});

    Object.entries(grouped).forEach(([cat, items]) => {
      const section = document.createElement('div');
      section.className = 'menu-category';
      section.innerHTML = `<h3>${cat}</h3>`;
      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
          <img class="menu-item__img" src="${item.image}" alt="${item.name}"/>
          <div class="menu-item__body">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <p class="menu-item__price">${formatPrice(item.price)}</p>
            <div class="quantity-controls">
              <button data-action="decrease" data-id="${item.name}">-</button>
              <span>0</span>
              <button data-action="increase" data-id="${item.name}">+</button>
            </div>
          </div>
        `;
        const [dec, qty, inc] = qsa('button, span', div);
        const updateQty = () => {
          const inCart = cart.find(i => i.name === item.name);
          qty.textContent = inCart ? inCart.quantity : 0;
        };
        updateQty();
        dec.addEventListener('click', () => changeCart(item, -1, updateQty));
        inc.addEventListener('click', () => changeCart(item, 1, updateQty));
        section.appendChild(div);
      });
      menuContent.appendChild(section);
    });
    menuModal.setAttribute('aria-hidden', 'false');
  };

  const closeMenuModal = () => menuModal.setAttribute('aria-hidden', 'true');

  /* ---------- CART ---------- */
  const changeCart = (item, delta, cb) => {
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += delta;
      if (existing.quantity <= 0) cart = cart.filter(i => i !== existing);
    } else if (delta > 0) {
      cart.push({ ...item, quantity: 1 });
    }
    saveCart();
    renderCartCount();
    if (cb) cb();
    renderCart();
  };

  const renderCart = () => {
    cartItems.innerHTML = '';
    if (!cart.length) {
      cartItems.innerHTML = '<p>Your cart is empty</p>';
      cartTotals.innerHTML = '';
      return;
    }
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img class="cart-item__img" src="${item.image}" alt="${item.name}"/>
        <div>
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)} &times; ${item.quantity}</p>
          <button class="btn--text" data-remove="${item.name}">Remove</button>
        </div>
      `;
      qs('[data-remove]', div).addEventListener('click', () => {
        changeCart(item, -item.quantity);
      });
      cartItems.appendChild(div);
    });

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const tax = subtotal * 0.08;
    const delivery = activeRestaurant ? activeRestaurant.deliveryFee : 2.99;
    const total = subtotal + tax + delivery;

    cartTotals.innerHTML = `
      <p><span>Subtotal</span> <span>${formatPrice(subtotal)}</span></p>
      <p><span>Tax</span> <span>${formatPrice(tax)}</span></p>
      <p><span>Delivery</span> <span>${formatPrice(delivery)}</span></p>
      <p><strong><span>Total</span> <span>${formatPrice(total)}</span></strong></p>
    `;
  };

  const toggleCart = () => {
    const hidden = cartSidebar.getAttribute('aria-hidden') !== 'false';
    cartSidebar.setAttribute('aria-hidden', String(!hidden));
    if (!hidden) renderCart();
  };

  /* ---------- CHECKOUT ---------- */
  const openCheckout = () => {
    cartSidebar.setAttribute('aria-hidden', 'true');
    checkoutModal.setAttribute('aria-hidden', 'false');
  };
  const closeCheckoutModal = () => checkoutModal.setAttribute('aria-hidden', 'true');

  const placeOrder = e => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));
    const order = {
      id: Date.now(),
      items: [...cart],
      customer: data,
      total: cart.reduce((s, i) => s + i.price * i.quantity, 0) * 1.08 + 2.99,
      placedAt: new Date().toLocaleString()
    };
    orderHistory.unshift(order);
    localStorage.setItem('ueOrders', JSON.stringify(orderHistory));
    cart = [];
    saveCart();
    renderCartCount();
    closeCheckoutModal();
    showOrderStatus(order.id);
  };

  const showOrderStatus = id => {
    qs('#orderId').textContent = `Order #${id}`;
    orderStatus.setAttribute('aria-hidden', 'false');
    let step = 0;
    const steps = ['preparing', 'onTheWay', 'delivered'];
    const interval = setInterval(() => {
      step++;
      qsa('.step').forEach(el => el.classList.remove('active'));
      qs(`[data-step="${steps[step]}"]`).classList.add('active');
      if (step === 2) clearInterval(interval);
    }, 3000);
  };

  /* ---------- INIT ---------- */
  const init = () => {
    // Simulate loading
    setTimeout(() => renderRestaurants(), 600);

    // Event listeners
    categoryFilters.addEventListener('click', e => {
      if (!e.target.matches('.filter-btn')) return;
      qsa('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterByCategory(e.target.dataset.category);
    });

    searchInput.addEventListener('input', e => handleSearch(e.target.value));
    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    closeMenu.addEventListener('click', closeMenuModal);
    checkoutBtn.addEventListener('click', openCheckout);
    closeCheckout.addEventListener('click', closeCheckoutModal);
    checkoutForm.addEventListener('submit', placeOrder);
    closeStatus.addEventListener('click', () => orderStatus.setAttribute('aria-hidden', 'true'));

    // Close modals on outside click
    [menuModal, checkoutModal].forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
      });
    });

    renderCartCount();
  };

  init();
})();