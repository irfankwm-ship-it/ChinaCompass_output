/* China Compass — Language Redirect (root index.html only)
   Checks localStorage preference, then browser language, redirects to /en/ or /zh/ */
(function () {
  var KEY = 'cc-lang';
  var stored;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* ok */ }

  if (stored === 'zh' || stored === 'en') {
    window.location.replace(stored + '/');
    return;
  }

  var lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  var target = (lang.indexOf('zh') === 0) ? 'zh' : 'en';
  window.location.replace(target + '/');
})();
