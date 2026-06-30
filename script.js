const header = document.querySelector(".site-header");
const menu = document.querySelector(".menu-toggle");

menu.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll("nav a").forEach((link) =>
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }),
);

const items = document.querySelectorAll(
  ".service-grid article, .timeline article, .about-content, .why-panel",
);
items.forEach((item) => item.classList.add("fade-up"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
items.forEach((item) => observer.observe(item));
