const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

toggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('nav a, .header-cta').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 700, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('section:not(.hero) h2, .project, .service-list article, .process-steps article').forEach((el) => {
  el.style.opacity = '0';
  observer.observe(el);
});
