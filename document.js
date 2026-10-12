document.addEventListener('DOMContentLoaded', function () {
  var pageLinks = document.querySelectorAll('[data-page]');

  pageLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      var pageName = this.getAttribute('data-page');

      // Itago lahat ng pages
      document.querySelectorAll('.page').forEach(function (p) {
        p.style.display = 'none';
      });

      // Ipakita ang pinindot na page
      var targetPage = document.getElementById('page-' + pageName);
      if (targetPage) {
        targetPage.style.display = 'block';
      }

      // I-highlight ang active na nav link
      document.querySelectorAll('#nav a').forEach(function (navLink) {
        navLink.classList.remove('active');
      });
      this.classList.add('active');

      // I-scroll pataas
      window.scrollTo(0, 0);

      // Isara ang mobile menu
      var nav = document.getElementById('nav');
      if (nav) nav.classList.remove('open');
    });
  });

  // Mobile menu toggle
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

});