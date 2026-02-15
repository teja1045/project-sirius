const data = {
  year: new Date().getFullYear(),
  phones: ['+1 937-797-3975', '+1 937-797-3904'],
  emails: ['info@siriussteelservices.com', 'mark@siriussteelservices.com'],
  offices: [
    { name: 'Ohio', address: '1985 W Henderson Road #2211,<br>Columbus, OH 43220' },
    { name: 'Florida', address: '8270, Woodland Center Blvd<br>Tampa, FL 33614' },
    { name: 'Canada', address: '2482 Yonge St #13 Toronto, ON<br>M4P 2H5, Canada' }
  ],
  slides: [
    {
      title: 'Experts and High Quality Works',
      text: 'Comprehensive structural steel detailing, accurate connection design, and coordinated fabrication packages for complex projects.',
      bg: 'linear-gradient(125deg, rgba(26,52,82,.78), rgba(38,121,143,.75)), linear-gradient(120deg,#2b8ea1,#5ac2c6)'
    },
    {
      title: 'Connection Design that Reduces Rework',
      text: 'We leverage SDS2 and Tekla workflows to detect clashes early and keep erection teams moving in the field.',
      bg: 'linear-gradient(125deg, rgba(36,47,84,.78), rgba(58,93,158,.75)), linear-gradient(120deg,#2d4f90,#4f7fcb)'
    },
    {
      title: 'Fast Turnaround. Reliable Output.',
      text: 'From bid support to final issue drawings, we provide clear communication, timely submissions, and dependable quality.',
      bg: 'linear-gradient(125deg, rgba(62,50,42,.72), rgba(129,89,60,.72)), linear-gradient(120deg,#6a5f4f,#a48358)'
    }
  ],
  stats: [
    { value: '17+', label: 'Years' },
    { value: '1200+', label: 'Projects' },
    { value: '99%', label: 'Retention' }
  ],
  values: [
    {
      id: '01',
      title: 'Customer Driven',
      body: 'At Sirius, we work with clients as partners by ensuring full-time support, progression reporting, and reliable quotations.'
    },
    {
      id: '02',
      title: 'Professional Team',
      body: 'Our extremely talented team has deep software and field experience, delivering quality-driven and practical detailing solutions.'
    },
    {
      id: '03',
      title: 'Integrity',
      body: 'We use sophisticated tools and disciplined QA workflows, combined with ethical business practices for sustainable growth.'
    },
    {
      id: '04',
      title: 'Flexibility',
      body: 'Our project management model helps distribute workloads and respond quickly to changing schedules across time zones.'
    }
  ],
  projects: [
    {
      name: 'North River Manufacturing Plant',
      desc: 'Heavy industrial framing with crane support steel and coordinated erection sequencing.'
    },
    {
      name: 'Harbor Point Distribution Hub',
      desc: 'Fast-track logistics center detailing package delivered ahead of construction schedule.'
    },
    {
      name: 'Metro Medical Tower Expansion',
      desc: 'Complex retrofit steel package with phased release strategy for an active site environment.'
    }
  ],
  whyPoints: ['Expert in Structural and Misc. Steel', 'Connection Design', 'PEMB']
};

const officeList = document.querySelector('#officeList');
const siteNav = document.querySelector('#siteNav');
const menuToggle = document.querySelector('#menuToggle');
const heroSection = document.querySelector('#heroSection');
const heroTitle = document.querySelector('#heroTitle');
const heroText = document.querySelector('#heroText');
const heroStats = document.querySelector('#heroStats');
const valuesGrid = document.querySelector('#valuesGrid');
const projectsGrid = document.querySelector('#projectsGrid');
const whyPoints = document.querySelector('#whyPoints');
const year = document.querySelector('#year');
const quoteForm = document.querySelector('#quoteForm');

let slideIndex = 0;
let timer;

function renderTop() {
  if (!officeList) return;
  const offices = data.offices
    .map((o) => `<article class="contact-box"><h3>${o.name}</h3><p>${o.address}</p></article>`)
    .join('');
  officeList.innerHTML = `
    ${offices}
    <article class="contact-box strong"><h3>Call Us</h3><p>${data.phones[0]}<br>${data.phones[1]}</p></article>
    <article class="contact-box strong"><h3>Email</h3><p>${data.emails[0]}<br>${data.emails[1]}</p></article>
  `;
}

function renderSlide() {
  const s = data.slides[slideIndex];
  if (heroSection) heroSection.style.backgroundImage = s.bg;
  if (heroTitle) heroTitle.textContent = s.title;
  if (heroText) heroText.textContent = s.text;
}

function nextSlide(step = 1) {
  slideIndex = (slideIndex + step + data.slides.length) % data.slides.length;
  renderSlide();
}

function renderStats() {
  if (!heroStats) return;
  heroStats.innerHTML = data.stats.map((s) => `<div><strong>${s.value}</strong><span>${s.label}</span></div>`).join('');
}

function renderValues() {
  if (!valuesGrid) return;
  valuesGrid.innerHTML = data.values
    .map((v) => `<article class="value-card"><span class="num">${v.id}</span><h3>${v.title}</h3><p>${v.body}</p></article>`)
    .join('');
}

function renderProjects() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = data.projects
    .map((p) => `<article class="project-card"><h3>${p.name}</h3><p>${p.desc}</p></article>`)
    .join('');
}

function renderWhy() {
  if (!whyPoints) return;
  whyPoints.innerHTML = data.whyPoints.map((w) => `<li>${w}</li>`).join('');
}

document.querySelector('#prevSlide')?.addEventListener('click', () => {
  nextSlide(-1);
  clearInterval(timer);
  timer = setInterval(() => nextSlide(1), 5000);
});

document.querySelector('#nextSlide')?.addEventListener('click', () => {
  nextSlide(1);
  clearInterval(timer);
  timer = setInterval(() => nextSlide(1), 5000);
});

menuToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('open');
});

quoteForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Your quote request has been captured.');
});

if (year) year.textContent = String(data.year);
renderTop();
renderSlide();
renderStats();
renderValues();
renderProjects();
renderWhy();
timer = setInterval(() => nextSlide(1), 5000);
