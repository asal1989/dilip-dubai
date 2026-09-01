(function () {
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header scroll state
  var header = document.querySelector('header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
    });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  if (reduceMotion) return;

  // Scroll reveal via IntersectionObserver
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    // Safety net: content must never stay invisible because an observer
    // callback got delayed or missed in some environment. Anything still
    // unrevealed after a few seconds is forced visible outright.
    setTimeout(function () {
      document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { el.classList.add('in'); });
    }, 2500);
  }

  // Hero parallax on pointer move
  var field = document.querySelector('.parallax-field');
  if (field) {
    var layers = field.querySelectorAll('.p-layer');
    var hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var yPos = (e.clientY - rect.top) / rect.height - 0.5;
      layers.forEach(function (layer) {
        var depth = parseFloat(layer.dataset.depth || '10');
        layer.style.transform = 'translate3d(' + (x * depth) + 'px, ' + (yPos * depth) + 'px, 0)';
      });
    });
  }

  // 3D tilt on cards
  document.querySelectorAll('.tilt-wrap').forEach(function (wrap) {
    var card = wrap.querySelector('.card');
    if (!card) return;
    wrap.addEventListener('mousemove', function (e) {
      var rect = wrap.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'rotateY(' + (px * 10) + 'deg) rotateX(' + (py * -10) + 'deg)';
    });
    wrap.addEventListener('mouseleave', function () { card.style.transform = 'rotateY(0) rotateX(0)'; });
  });

  // Magnetic pull on primary buttons — the button nudges toward the
  // cursor within its own bounds, a small, deliberate touch that reads
  // as "designed" rather than a stock hover state.
  document.querySelectorAll('.btn-primary').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.18) + 'px, ' + (y * 0.35 - 3) + 'px)';
    });
    btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
  });

  // Animated counters
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        cio.unobserve(entry.target);
        var el = entry.target;
        var raw = el.dataset.count;
        var match = raw.match(/^(\d+)(.*)$/);
        if (!match) { return; } // non-numeric values (e.g. "24/7") stay static
        var target = parseInt(match[1], 10);
        var suffix = match[2] || '';
        var start = 0;
        var dur = 900;
        var t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }
})();
