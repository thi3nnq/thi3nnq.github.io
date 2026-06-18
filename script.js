// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle (persisted) =====
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const icon = toggle.querySelector('.theme-icon');

const saved = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const initial = saved || (prefersLight ? 'light' : 'dark');
applyTheme(initial);

function applyTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    icon.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    icon.textContent = '🌙';
  }
}

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
