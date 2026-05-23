/* ============================================
   herclaude — Page Routing Stub
   Placeholder for SPA-like page switching
   (hash-based or history API routing)
   ============================================ */

const Router = (() => {
  'use strict';

  // --- Route table ---
  const _routes = new Map();

  // --- Current state ---
  let _currentRoute = null;

  // --- Registration ---
  function register(path, handler) {
    _routes.set(path, handler);
  }

  function unregister(path) {
    _routes.delete(path);
  }

  // --- Navigation ---
  function navigate(path, data = {}) {
    // placeholder — will update _currentRoute, call handler, update URL
    if (_routes.has(path)) {
      _currentRoute = { path, data };
      _routes.get(path)(data);
    }
  }

  function getCurrentRoute() {
    return _currentRoute ? { ..._currentRoute } : null;
  }

  // --- Init ---
  function init() {
    // placeholder — attach popstate / hashchange listeners
  }

  // --- Public API ---
  return { register, unregister, navigate, getCurrentRoute, init };
})();
