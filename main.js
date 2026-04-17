(() => {
  // --- Mobile menu toggle ---
  const nav = document.querySelector('.site-nav');
  const toggle = nav && nav.querySelector('.site-nav__toggle');
  const list = nav && nav.querySelector('.site-nav__list');

  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    list.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Scroll-spy for in-page nav (progressive enhancement) ---
  const links = list ? Array.from(list.querySelectorAll('a[href^="#"]')) : [];
  const targets = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (targets.length && 'IntersectionObserver' in window) {
    const byId = new Map(targets.map((t) => [t.id, t]));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((a) => {
              a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    byId.forEach((t) => observer.observe(t));
  }

  // --- Dynamic footer year ---
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
