 document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      nav.classList.toggle('open');
      if (nav.classList.contains('open')) {
        menuBtn.textContent = '✕';
      } else {
        menuBtn.textContent = '☰';
      }
    });
  }

  var navLinks = document.querySelectorAll('#nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      this.classList.add('active');
      if (nav) {
        nav.classList.remove('open');
        if (menuBtn) menuBtn.textContent = '☰';
      }
    });
  });
});