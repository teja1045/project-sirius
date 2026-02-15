const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('#year');
const title = document.querySelector('#heroTitle');
const text = document.querySelector('#heroText');
const prev = document.querySelector('#prevSlide');
const next = document.querySelector('#nextSlide');
const heroBg = document.querySelector('#heroBg');
const valueCards = document.querySelector('#valueCards');

const slides = [
  {
    title: 'Experts and High Quality Works',
    text: 'Precision detailing and steel design solutions for commercial and industrial projects.',
    background: 'linear-gradient(120deg, #248ea0, #57b7c0 35%, #6ec9cd)'
  },
  {
    title: 'Engineered Drawings that Build Faster',
    text: 'Clash-free models and practical connection details that reduce field revisions.',
    background: 'linear-gradient(120deg, #1e3f76, #365f9a 38%, #3f8cbf)'
  },
  {
    title: 'Trusted by Contractors Across Regions',
    text: 'From bid support to final shop drawings, we deliver clarity and speed.',
    background: 'linear-gradient(120deg, #4d5056, #6f747e 42%, #8d939d)'
  }
];

const values = [
  {
    n: '01',
    title: 'Customer Driven',
    body: 'We operate as a partner-first team with responsive support, clear reports, and reliable quotations.'
  },
  {
    n: '02',
    title: 'Professional Team',
    body: 'Highly experienced detailers and engineers delivering accurate models and practical solutions.'
  },
  {
    n: '03',
    title: 'Integrity',
    body: 'We follow ethical business practices, licensed workflows, and strict quality control standards.'
  },
  {
    n: '04',
    title: 'Flexibility',
    body: 'Scalable production capacity and timezone-aligned collaboration for global project delivery.'
  }
];

let i = 0;
let autoplay;

function renderValues() {
  if (!valueCards) return;
  valueCards.innerHTML = values
    .map(
      (v) => `
        <article class="value-card reveal" data-tilt>
          <span class="num">${v.n}</span>
          <h3>${v.title}</h3>
          <p>${v.body}</p>
        </article>
      `
    )
    .join('');
}

function renderSlide() {
  if (!title || !text || !heroBg) return;
  title.textContent = slides[i].title;
  text.textContent = slides[i].text;
  heroBg.style.background = slides[i].background;
}

function changeSlide(step) {
  i = (i + step + slides.length) % slides.length;
  renderSlide();
}

function startAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => changeSlide(1), 5000);
}

function setupCounters() {
  const counters = document.querySelectorAll('.counter');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        const start = performance.now();
        const duration = 1200;

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          el.textContent = String(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => io.observe(counter));
}

function setupReveal() {
  const elements = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => io.observe(el));
}

function setupNavActive() {
  const links = document.querySelectorAll('.site-nav a');
  const sections = [...document.querySelectorAll('main section, header#home')];

  window.addEventListener('scroll', () => {
    const top = window.scrollY + 120;
    let id = 'home';

    sections.forEach((section) => {
      if (section.offsetTop <= top) id = section.id || 'home';
    });

    links.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', active);
    });
  });
}

function setupTilt() {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 6;
      const ry = (x - 0.5) * 6;
      const hover = e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom;
      card.style.transform = hover ? `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)` : '';
    });
  });
}

if (prev && next) {
  prev.addEventListener('click', () => {
    changeSlide(-1);
    startAutoplay();
  });
  next.addEventListener('click', () => {
    changeSlide(1);
    startAutoplay();
  });
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

if (year) year.textContent = new Date().getFullYear();

renderValues();
renderSlide();
startAutoplay();
setupCounters();
setupReveal();
setupNavActive();
setupTilt();
