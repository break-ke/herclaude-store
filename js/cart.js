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
    // placeholder
  }

  function updateQuantity(productId, quantity) {
    // placeholder
  }

  function remove(productId) {
    // placeholder
  }

  function clear() {
    _items = [];
    save();
  }

  function getSubtotal() {
    // placeholder — needs product data lookup
    return 0;
  }

  // --- Public API ---
  return { load, save, getAll, getCount, add, updateQuantity, remove, clear, getSubtotal };
})();
