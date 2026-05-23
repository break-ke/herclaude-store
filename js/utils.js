/* ============================================
   herclaude — Utility Functions Stub
   Placeholder for helper functions (formatting,
   DOM helpers, debounce, etc.)
   ============================================ */

// Utility module
const Utils = (() => {
  'use strict';

  // --- Formatting ---
  function formatPrice(cents) {
    // placeholder: expects number in dollars
    return `$${Number(cents).toFixed(2)}`;
  }

  // --- DOM Helpers ---
  function $(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$(selector, context = document) {
    return [...context.querySelectorAll(selector)];
  }

  function createElement(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'className') el.className = val;
      else if (key === 'dataset') Object.assign(el.dataset, val);
      else el.setAttribute(key, val);
    }
    children.forEach(child => {
      if (typeof child === 'string') el.appendChild(document.createTextNode(child));
      else el.appendChild(child);
    });
    return el;
  }

  // --- Debounce ---
  function debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // --- Public API ---
  return { formatPrice, $, $$, createElement, debounce };
})();
