/* ============================================
   herclaude — Shopping Cart Logic Stub
   Placeholder for cart CRUD, localStorage
   persistence, quantity adjustments, etc.
   ============================================ */

const Cart = (() => {
  'use strict';

  const STORAGE_KEY = 'herclaude_cart';

  // --- Internal state ---
  let _items = [];

  // --- Init ---
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      _items = raw ? JSON.parse(raw) : [];
    } catch {
      _items = [];
    }
    return _items;
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_items));
  }

  // --- CRUD ---
  function getAll() {
    return [..._items];
  }

  function getCount() {
    return _items.reduce((sum, item) => sum + item.quantity, 0);
  }

  function add(productId, quantity = 1) {
    const existing = _items.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      _items.push({ productId, quantity });
    }
    save();
    // dispatch a simple custom event so other components can react
    document.dispatchEvent(new CustomEvent('cart:updated'));
  }

  function updateQuantity(productId, quantity) {
    const item = _items.find(item => item.productId === productId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        _items = _items.filter(i => i.productId !== productId);
      }
      save();
      document.dispatchEvent(new CustomEvent('cart:updated'));
    }
  }

  function remove(productId) {
    _items = _items.filter(item => item.productId !== productId);
    save();
    document.dispatchEvent(new CustomEvent('cart:updated'));
  }

  function clear() {
    _items = [];
    save();
  }

  function getSubtotal() {
    return _items.reduce(function(sum, item) {
      var p = typeof products !== 'undefined' && products.find(function(prod) { return prod.id === item.productId; });
      return sum + (p ? p.price * item.quantity : 0);
    }, 0);
  }

  function init() {
    load();
    _updateBadge();
    document.addEventListener('cart:updated', _updateBadge);
  }

  function _updateBadge() {
    var badge = document.getElementById('cart-count');
    if (badge) {
      var count = getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  }

  // --- Public API ---
  return { load, save, getAll, getCount, add, updateQuantity, remove, clear, getSubtotal, init };
})();
