/* China Compass — Theme Toggle
   Reads/writes localStorage, toggles data-theme on <html> */
(function () {
  var KEY = 'cc-theme';
  var html = document.documentElement;

  function set(theme) {
    html.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) { /* ok */ }
  }

  // Inline <script> in <head> already sets initial theme to avoid flash.
  // This wires up the toggle button.
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = html.getAttribute('data-theme') || 'light';
      set(current === 'dark' ? 'light' : 'dark');
    });
  });
})();
