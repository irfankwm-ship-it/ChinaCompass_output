/* China Compass — Signal Category / Severity Filtering */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var pills = document.querySelectorAll('.filter-pill');
    var cards = document.querySelectorAll('.signal-card');
    if (!pills.length || !cards.length) return;

    var activeCategory = 'all';
    var activeSeverity = 'all';

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var group = pill.getAttribute('data-filter-group');
        var value = pill.getAttribute('data-filter');

        // Toggle active state within group
        document.querySelectorAll('.filter-pill[data-filter-group="' + group + '"]')
          .forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        if (group === 'category') activeCategory = value;
        if (group === 'severity') activeSeverity = value;

        applyFilters();
      });
    });

    function applyFilters() {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-category') || '';
        var sev = card.getAttribute('data-severity') || '';
        var showCat = (activeCategory === 'all' || cat === activeCategory);
        var showSev = (activeSeverity === 'all' || sev === activeSeverity);
        var show = showCat && showSev;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });
      // Update count display if present
      var counter = document.getElementById('signal-count');
      if (counter) counter.textContent = visibleCount;
    }
  });
})();
