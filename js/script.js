/* ============================================================
   ARMAN MESHRAM — Portfolio Script
   All interactivity, data, and animations
   ============================================================ */

/* ============================================================
   1. DATA STORES (Easy to edit — just update these objects!)
   ============================================================ */

/**
 * SKILLS DATA
 * Proficiency: 1 = Learning, 2 = Comfortable, 3 = Strong
 * Edit the 'level' value to update star ratings.
 */
const skillsData = {
  // Starter proficiency tiers only: replace each level (1 Learning, 2 Comfortable, 3 Strong) with your own assessment.
  frontend: {
    label: 'Frontend',
    color: 'orange',
    skills: [
      { name: 'HTML',          icon: '🌐', level: 3 },
      { name: 'CSS',           icon: '🎨', level: 3 },
      { name: 'JavaScript',    icon: '⚡', level: 2 },
      { name: 'React.js',      icon: '⚛️', level: 2 },
      { name: 'Responsive Design', icon: '📱', level: 2 },
    ]
  },
  backend: {
    label: 'Backend',
    color: 'blue',
    skills: [
      { name: 'C/C++',        icon: '💻', level: 2 },
      { name: 'Python',       icon: '🐍', level: 3 },
      { name: 'Node.js',      icon: '🟢', level: 2 },
      { name: 'Express.js',   icon: '🚂', level: 2 },
      { name: 'Django',       icon: '🎯', level: 2 },
      { name: 'FastAPI',      icon: '⚡', level: 2 },
    ]
  },
  cloud: {
    label: 'DevOps / Cloud',
    color: 'periwinkle',
    skills: [
      { name: 'AWS',          icon: '☁️', level: 1 },
      { name: 'Google Cloud', icon: '🌩️', level: 1 },
      { name: 'Azure',        icon: '🔷', level: 1 },
      { name: 'Ansible',      icon: '🔧', level: 2 },
    ]
  },
  database: {
    label: 'Database',
    color: 'yellow',
    skills: [
      { name: 'PostgreSQL',   icon: '🐘', level: 2 },
      { name: 'MySQL',        icon: '🗄️', level: 2 },
      { name: 'NoSQL',        icon: '📦', level: 1 },
      { name: 'SQLite',       icon: '📋', level: 2 },
    ]
  },
  dataml: {
    label: 'Data & ML',
    color: 'green',
    skills: [
      { name: 'Pandas',        icon: '🐼', level: 2 },
      { name: 'NumPy',         icon: '🔢', level: 2 },
      { name: 'Scikit-learn',  icon: '🤖', level: 2 },
      { name: 'Matplotlib',    icon: '📊', level: 2 },
      { name: 'Seaborn',       icon: '📈', level: 2 },
      { name: 'Jupyter',       icon: '📓', level: 2 },
      { name: 'Agentic AI',    icon: '🧠', level: 1 },
      { name: 'LLM Concepts',  icon: '💬', level: 1 },
    ]
  },
  tools: {
    label: 'Tools & Concepts',
    color: 'orange',
    skills: [
      { name: 'Git/GitHub',    icon: '🔀', level: 3 },
      { name: 'REST APIs',     icon: '🔌', level: 2 },
      { name: 'Scapy',         icon: '🔍', level: 2 },
      { name: 'Blockchain/MetaMask', icon: '⛓️', level: 1 },
      { name: 'Network Automation',  icon: '🌐', level: 2 },
      { name: 'DSA',           icon: '🧮', level: 2 },
    ]
  }
};

/**
 * PROJECTS DATA
 */
const projectsData = [
  {
    id: 'blockchain-ecommerce',
    title: 'Blockchain-Based E-Commerce Platform',
    icon: '⛓️',
    tags: ['full-stack', 'blockchain'],
    tech: ['Python', 'Django', 'SQL', 'MetaMask', 'Blockchain', 'JSON', 'HTML', 'CSS', 'JavaScript'],
    description: 'Blockchain-integrated e-commerce platform combining traditional web technologies with decentralized payments. Django/Python backend for application logic, products, and user interactions; MetaMask integration for crypto wallet connectivity and blockchain transaction workflows; SQL for structured data and JSON for data exchange; architecture aimed at secure, transparent, efficient digital commerce.',
    status: 'In progress',
    github: 'https://github.com/ArmanMeshram/',
    demo: null,
    color: 'orange'
  },
  {
    id: 'netscope',
    title: 'NetScope: Network Traffic Analyzer',
    icon: '🔍',
    tags: ['security', 'full-stack'],
    tech: ['Python', 'Scapy', 'FastAPI', 'React.js', 'SQLite', 'REST APIs', 'JSON'],
    description: 'Application to capture, inspect, and classify packets across TCP, UDP, DNS, and ICMP; interactive dashboard for packet statistics, protocol distribution, traffic rates, and source/destination metadata; REST APIs and database storage for capture sessions and summaries; rule-based anomaly detection for potential security alerts; PCAP analysis plus CSV/JSON export for offline investigation.',
    status: 'In progress',
    github: 'https://github.com/ArmanMeshram/',
    demo: null,
    color: 'blue'
  },
  {
    id: 'housing-price',
    title: 'Housing Price Prediction',
    icon: '🏠',
    tags: ['ai-ml'],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    description: 'Regression pipeline comparing Linear Regression, Ridge, and Decision Tree Regressor with StandardScaler, evaluated using MAE, RMSE, R², and 5-fold cross-validation. Built during AI/ML internship at Maincrafts Technology.',
    status: 'Completed',
    github: 'https://github.com/ArmanMeshram/',
    demo: null,
    color: 'yellow'
  }
];

/**
 * CERTIFICATES DATA
 * Edit this array to add/remove/update certificates.
 */
const certificatesData = [
  {
    id: 'redhat-ansible',
    title: 'Network Automation with Red Hat Ansible Automation Platform (DO457-RHA) v2.3',
    issuer: 'Red Hat',
    issuerClass: 'redhat',
    type: 'Certificate of Attendance',
    date: 'Oct 14, 2026',
    hours: '32 credit hours',
    category: 'devops',
    verify: 'https://www.credly.com/badges/8e184b74-202c-4e96-9fc0-0503aee4adb8',
    image: 'assets/certs/redhat-ansible-do457.png',
    pdf: 'assets/certs/redhat-ansible-do457.pdf'
  },
  {
    id: 'udemy-python',
    title: '100 Days of Code™: The Complete Python Pro Bootcamp',
    issuer: 'Udemy (Instructor: Dr. Angela Yu)',
    issuerClass: 'udemy',
    type: 'Certificate of Completion',
    date: 'Oct 14, 2026',
    hours: '57 hours',
    category: 'python',
    verify: 'https://ude.my/UC-079bd169-56a7-4c29-8034-322d87b3b9f7',
    image: 'assets/certs/udemy-100-days-python.png',
    pdf: 'assets/certs/udemy-100-days-python.pdf'
  },
  {
    id: 'infosys-agentic-ai',
    title: 'Mastering Agentic AI: From Prompt to Protocols to Production',
    issuer: 'Infosys Springboard',
    issuerClass: 'infosys',
    type: 'Course Completion',
    date: 'Completed Aug 22, 2026 (issued Oct 14, 2026)',
    hours: null,
    category: 'ai-ml',
    verify: 'https://verify.onwingspan.com',
    image: 'assets/certs/infosys-agentic-ai.png',
    pdf: 'assets/certs/infosys-agentic-ai.pdf'
  },
  {
    id: 'maincrafts-internship',
    title: 'AI/ML Internship Certificate, Maincrafts Technology',
    issuer: 'Maincrafts Technology',
    issuerClass: 'maincrafts',
    type: 'Internship',
    date: '20 May to 20 June 2026',
    hours: null,
    category: 'internship',
    /* PLACEHOLDER: Add verify link when available. The certificate image is supplied; no PDF scan was provided. */
    verify: null,
    image: 'assets/certs/maincrafts-internship.jpg',
    pdf: null
  },
  {
    id: 'infosys-dsa',
    title: 'Data Structures and Algorithms using Python, Part 1',
    issuer: 'Infosys Springboard',
    issuerClass: 'infosys',
    type: 'Course Completion',
    date: 'Completed Oct 30, 2025 (issued Nov 6, 2025)',
    hours: null,
    category: 'python',
    verify: 'https://verify.onwingspan.com',
    image: 'assets/certs/infosys-dsa-python.png',
    pdf: 'assets/certs/infosys-dsa-python.pdf'
  },
  {
    id: 'redhat-python',
    title: 'Python Programming with Red Hat (AD141-RHA) v9.0',
    issuer: 'Red Hat',
    issuerClass: 'redhat',
    type: 'Certificate of Attendance',
    date: 'Mar 28, 2025',
    hours: '32 credit hours',
    category: 'python',
    verify: 'https://www.credly.com/badges/471cd431-bcfe-4719-bb65-714a319fe448',
    image: 'assets/certs/redhat-python-ad141.png',
    pdf: 'assets/certs/redhat-python-ad141.pdf'
  },
  {
    id: 'udemy-webdev',
    title: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
    issuerClass: 'udemy',
    type: 'Certificate of Completion',
    date: 'Dec 6, 2024',
    hours: '61.5 hours',
    category: 'webdev',
    verify: 'https://ude.my/UC-5717a236-c2d6-4406-96c6-e0a2f1d896cd',
    image: 'assets/certs/udemy-web-dev-bootcamp.png',
    pdf: 'assets/certs/udemy-web-dev-bootcamp.pdf'
  }
];

/* ============================================================
   2. DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initScrollProgress();
  initStickyHeader();
  initMobileNav();
  initCurrentPageNav();
  initDialogKeyboardControls();
  initBackToTop();
  initScrollReveal();
  initPageTransitions();
  initCountUp();

  // Page-specific inits
  if (document.getElementById('skills-container')) initSkillsPage();
  if (document.getElementById('projects-grid'))    initProjectsPage();
  if (document.getElementById('cert-grid'))        initAchievementsPage();
  if (document.getElementById('contact-form'))     initContactPage();
  if (document.querySelector('.gallery-grid'))      initGalleryLightbox();
  if (document.querySelector('.hero-name'))         initHeroAnimation();
  initParallaxDoodles();
});

/* ============================================================
   3. CUSTOM CURSOR
   ============================================================ */
function initCustomCursor() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring on interactive elements
  const hoverTargets = 'a, button, .sticker-card, .skill-badge, .project-card, .cert-card, .gallery-item, input, textarea, .filter-chip, .explore-card';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

/* ============================================================
   4. SCROLL PROGRESS BAR
   ============================================================ */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

/* ============================================================
   5. STICKY HEADER
   ============================================================ */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

/* ============================================================
   6. MOBILE NAV
   ============================================================ */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(overlay.classList.contains('open')));
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* Mark the current page in both desktop and mobile navigation. */
function initCurrentPageNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href], .mobile-nav-overlay a[href]').forEach(link => {
    if (link.getAttribute('href').split('/').pop() === current) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    }
  });
}

function initDialogKeyboardControls() {
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeModal();
    closeLightbox();
  });
  document.querySelectorAll('.modal-overlay, .lightbox').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) {
        closeModal();
        closeLightbox();
      }
    });
  });
}

/* ============================================================
   7. BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   8. SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Don't unobserve stagger containers — they only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    if (prefersReduced) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });
}

/* ============================================================
   9. PAGE TRANSITIONS
   ============================================================ */
function initPageTransitions() {
  const overlay = document.querySelector('.page-transition');
  if (!overlay) return;

  // Exit animation on page load
  overlay.classList.add('active-exit');
  overlay.addEventListener('animationend', () => {
    overlay.classList.remove('active-exit', 'active-enter');
  }, { once: true });

  // Intercept internal links for smooth transition
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Only intercept local page links
    if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active-exit');
        overlay.classList.add('active-enter');

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });
}

/* ============================================================
   10. COUNT-UP ANIMATION
   ============================================================ */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        animateCount(el, target, prefix, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

function animateCount(el, target, prefix, suffix) {
  const duration = 1500;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(ease * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ============================================================
   11. HERO ANIMATION
   ============================================================ */
function initHeroAnimation() {
  const nameEl = document.querySelector('.hero-name');
  if (!nameEl) return;

  const text = nameEl.dataset.name || 'ARMAN MESHRAM';
  nameEl.innerHTML = '';

  let delay = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      const br = document.createElement('br');
      nameEl.appendChild(br);
    } else {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = text[i];
      span.style.animationDelay = `${delay * 0.06}s`;
      nameEl.appendChild(span);
      delay++;
    }
  }
}

/* ============================================================
   12. SKILLS PAGE
   ============================================================ */
function initSkillsPage() {
  const container = document.getElementById('skills-container');
  const filterChips = document.querySelectorAll('.skill-filter');

  renderSkills('all');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderSkills(chip.dataset.filter);
    });
  });
}

function renderSkills(filter) {
  const container = document.getElementById('skills-container');
  container.innerHTML = '';

  const rotations = [-3, 2, -1, 3, -2, 1, -4, 2, -1, 3];

  Object.entries(skillsData).forEach(([key, category]) => {
    if (filter !== 'all' && key !== filter) return;

    const section = document.createElement('div');
    section.className = 'skills-category reveal';

    const h3 = document.createElement('h3');
    h3.textContent = category.label;
    section.appendChild(h3);

    const grid = document.createElement('div');
    grid.className = 'skills-badge-grid reveal-stagger';

    category.skills.forEach((skill, idx) => {
      const badge = document.createElement('div');
      const rotation = rotations[idx % rotations.length];
      badge.className = `skill-badge skill-badge--${category.color}`;
      badge.style.setProperty('--rotate', `${rotation}deg`);

      const stars = '★'.repeat(skill.level) + '☆'.repeat(3 - skill.level);
      const profLabel = skill.level === 3 ? 'Strong' : skill.level === 2 ? 'Comfortable' : 'Learning';

      badge.innerHTML = `
        <span class="skill-icon">${skill.icon}</span>
        <span>${skill.name}</span>
        <span class="skill-stars">${stars}</span>
        <span class="tooltip">${skill.name} — ${profLabel}</span>
      `;

      grid.appendChild(badge);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });

  // Animate badges in with stagger
  requestAnimationFrame(() => {
    const badges = container.querySelectorAll('.skill-badge');
    badges.forEach((badge, i) => {
      setTimeout(() => {
        badge.classList.add('visible');
      }, i * 60);
    });

    // Re-init scroll reveal for new elements
    initScrollReveal();
  });
}

/* ============================================================
   13. PROJECTS PAGE
   ============================================================ */
function initProjectsPage() {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.project-filter');

  renderProjects('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderProjects(filter) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(filter));

  const colors = ['orange', 'blue', 'yellow'];

  filtered.forEach((project, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal';
    card.style.animationDelay = `${idx * 0.1}s`;

    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    const demoBtn = project.demo
      ? `<a href="${project.demo}" target="_blank" class="btn btn--small btn--outline">Live Demo →</a>`
      : '';

    card.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-status">📌 Status: ${project.status}</div>
      <div class="tech-tags">${techTags}</div>
      <div class="project-btns">
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn--small btn--primary">GitHub →</a>
        ${demoBtn}
      </div>
    `;

    // Click to open modal
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${project.title}`);
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Don't open modal if clicking a link
      openProjectModal(project);
    });
    card.addEventListener('keydown', e => {
      if (e.target !== card || (e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault();
      openProjectModal(project);
    });

    grid.appendChild(card);
  });

  // Add "More coming soon" placeholder card
  const placeholder = document.createElement('div');
  placeholder.className = 'project-card project-card--dashed reveal';
  placeholder.innerHTML = `
    <div>
      <div style="font-size:2.5rem;margin-bottom:12px;">🚀</div>
      <h3 style="font-family:var(--font-hand);font-size:1.3rem;">More coming soon…</h3>
      <p style="opacity:0.6;margin-top:8px;">Stay tuned for new projects!</p>
    </div>
  `;
  grid.appendChild(placeholder);

  initScrollReveal();
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const demoBtn = project.demo
    ? `<a href="${project.demo}" target="_blank" class="btn btn--small btn--outline">Live Demo →</a>`
    : '';

  modal.querySelector('.modal-body').innerHTML = `
    <div style="font-size:3rem;margin-bottom:16px;">${project.icon}</div>
    <h2 class="bubble-heading" style="font-size:1.6rem;margin-bottom:16px;">${project.title}</h2>
    <div class="project-status" style="margin-bottom:16px;">📌 Status: ${project.status}</div>
    <p style="line-height:1.8;margin-bottom:20px;">${project.description}</p>
    <div class="tech-tags" style="margin-bottom:24px;">${techTags}</div>
    <div class="project-btns">
      <a href="${project.github}" target="_blank" rel="noopener" class="btn btn--primary">View on GitHub →</a>
      ${demoBtn}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   14. ACHIEVEMENTS PAGE
   ============================================================ */
function initAchievementsPage() {
  const grid = document.getElementById('cert-grid');
  const filterBtns = document.querySelectorAll('.cert-filter');

  renderCertificates('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCertificates(btn.dataset.filter);
    });
  });
}

function renderCertificates(filter) {
  const grid = document.getElementById('cert-grid');
  grid.innerHTML = '';

  const colors = ['orange', 'blue', 'yellow'];
  const filtered = filter === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === filter);

  filtered.forEach((cert, idx) => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.classList.add(`cert-card--${colors[idx % colors.length]}`);
    card.style.animationDelay = `${idx * 0.1}s`;

    const verifyBtn = cert.verify
      ? `<a href="${cert.verify}" target="_blank" rel="noopener" class="btn btn--small btn--primary">Verify ↗</a>`
      : '';

    const hoursText = cert.hours ? `<div class="cert-hours">⏱ ${cert.hours}</div>` : '';

    const thumbnail = cert.image
      ? `<button type="button" class="cert-thumb" aria-label="View certificate: ${cert.title}"><img src="${cert.image}" alt="${cert.title}" loading="lazy"></button>`
      : `<div class="cert-thumb cert-thumb--placeholder" aria-label="Certificate image placeholder">📄<span>Certificate scan to be added</span></div>`;

    card.innerHTML = `
      ${thumbnail}
      <div class="cert-body">
        <span class="cert-issuer-pill cert-issuer-pill--${cert.issuerClass}">${cert.issuer}</span>
        <h4>${cert.title}</h4>
        <div class="cert-meta">${cert.type} · ${cert.date}</div>
        ${hoursText}
        <div class="cert-btns">
          ${verifyBtn}
        </div>
      </div>
    `;

    grid.appendChild(card);
    if (cert.image) {
      card.querySelector('.cert-thumb').addEventListener('click', () => openLightbox(cert.image, cert.pdf || cert.image));
    }
  });

  initScrollReveal();
}

/* ============================================================
   15. LIGHTBOX
   ============================================================ */
function openLightbox(imageSrc, downloadSrc = imageSrc) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const img = lightbox.querySelector('img');
  img.src = imageSrc;

  const downloadBtn = lightbox.querySelector('.lightbox-download');
  if (downloadBtn) {
    downloadBtn.href = downloadSrc;
    downloadBtn.download = downloadSrc.split('/').pop();
  }

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   16. GALLERY LIGHTBOX
   ============================================================ */
function initGalleryLightbox() {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `View ${item.querySelector('img')?.alt || 'gallery photo'}`);
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) openLightbox(img.src, img.src);
    });
    item.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
  });
}

/* ============================================================
   17. CONTACT PAGE
   ============================================================ */
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let valid = true;

    // Name validation
    const name = form.querySelector('#name');
    const nameGroup = name.closest('.form-group');
    if (!name.value.trim()) {
      nameGroup.classList.add('error');
      valid = false;
    } else {
      nameGroup.classList.remove('error');
    }

    // Email validation
    const email = form.querySelector('#email');
    const emailGroup = email.closest('.form-group');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailGroup.classList.add('error');
      valid = false;
    } else {
      emailGroup.classList.remove('error');
    }

    // Message validation
    const message = form.querySelector('#message');
    const msgGroup = message.closest('.form-group');
    if (!message.value.trim()) {
      msgGroup.classList.add('error');
      valid = false;
    } else {
      msgGroup.classList.remove('error');
    }

    if (!valid) return;

    if (form.action.includes('YOUR_FORM_ID')) {
      showToast('Add your Formspree endpoint to enable sending.');
      return;
    }

    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      form.style.display = 'none';
      document.querySelector('.form-success')?.classList.add('show');
    } catch {
      showToast('Message could not be sent. Please email me directly.');
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
    }
  });
}

/* ============================================================
   18. COPY TO CLIPBOARD
   ============================================================ */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied!');
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

/* ============================================================
   20. PARALLAX DOODLES
   ============================================================ */
function initParallaxDoodles() {
  const doodles = document.querySelectorAll('.doodle-parallax');
  if (!doodles.length) return;

  // Only on desktop
  if (window.matchMedia('(hover: none)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    doodles.forEach(doodle => {
      const speed = parseFloat(doodle.dataset.speed || 20);
      doodle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}

/* ============================================================
   21. MODAL & LIGHTBOX KEYBOARD SUPPORT
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeLightbox();

    // Close mobile nav
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.mobile-nav-overlay');
    if (hamburger && hamburger.classList.contains('open')) {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});

/* ============================================================
   22. SVG DOODLE HELPERS
   ============================================================ */
/**
 * Creates an SVG sparkle/star element.
 * Use these functions to generate doodle SVGs dynamically.
 */
function createSparkleSVG(color = '#FFC928', size = 30) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 2L18 12L28 15L18 18L15 28L12 18L2 15L12 12L15 2Z" fill="${color}" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`;
}

function createStarSVG(color = '#FF6B1A', size = 40) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3L25 15L38 17L28 26L31 38L20 32L9 38L12 26L2 17L15 15L20 3Z" fill="${color}" stroke="#111" stroke-width="2" stroke-linejoin="round"/>
  </svg>`;
}

function createSquiggleSVG() {
  return `<svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="draw-in" d="M2 10C12 2 22 18 32 10C42 2 52 18 62 10C72 2 82 18 92 10C102 2 112 18 118 10" stroke="#111" stroke-width="2" stroke-linecap="round"/>
  </svg>`;
}

/* ============================================================
   23. INITIALIZE DOODLE DECORATIONS
   ============================================================ */
// This is called from HTML inline to place doodles
function placeDoodles() {
  document.querySelectorAll('.doodle-sparkle').forEach(el => {
    el.innerHTML = createSparkleSVG(el.dataset.color || '#FFC928', el.dataset.size || 30);
  });
  document.querySelectorAll('.doodle-star').forEach(el => {
    el.innerHTML = createStarSVG(el.dataset.color || '#FF6B1A', el.dataset.size || 40);
  });
  document.querySelectorAll('.doodle-squiggle').forEach(el => {
    el.innerHTML = createSquiggleSVG();
  });
}

// Run on load
document.addEventListener('DOMContentLoaded', placeDoodles);

/* ============================================================
   DECO POLISH — graceful fallback for unavailable gallery photos
   This additive block leaves the existing lightbox and page logic intact.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery-item img').forEach(image => {
    const item = image.closest('.gallery-item');
    if (!item) return;

    const showFallback = () => {
      item.classList.add('is-missing');
      item.setAttribute('aria-label', 'Photo coming soon');
    };

    if (image.complete && image.naturalWidth === 0) showFallback();
    image.addEventListener('error', showFallback, { once: true });

    // A missing image gets the visual fallback instead of opening a broken lightbox.
    item.addEventListener('click', event => {
      if (!item.classList.contains('is-missing')) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
  });
});
