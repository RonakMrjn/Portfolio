/* ================================================================
   PORTFOLIO — main.js
   Handles: scroll animations, navbar, mobile menu, active links
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll shadow ── */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('mailto')) {
      const linkPage = href.split('/').pop();
      if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    }
  });

  /* ── Mobile hamburger ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll-triggered reveal (Intersection Observer) ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after first trigger:
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

  /* ── Stagger children of .stagger-children ── */
  document.querySelectorAll('.stagger-children').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  /* ── Cursor trail effect (subtle) ── */
  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  cursor.style.cssText = `
    position: fixed;
    width: 6px; height: 6px;
    background: var(--text, #1C1B19);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s, transform 0.08s;
    mix-blend-mode: multiply;
  `;
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left  = mouseX + 'px';
    cursor.style.top   = mouseY + 'px';
    cursor.style.opacity = '0.7';
  });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });

  /* ── Hover effect on project cards ── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.style.width  = '12px';
      cursor.style.height = '12px';
      cursor.style.opacity = '0.45';
    });
    card.addEventListener('mouseleave', () => {
      cursor.style.width  = '6px';
      cursor.style.height = '6px';
      cursor.style.opacity = '0.7';
    });
  });

  /* ── Page transition fade ── */
  document.querySelectorAll('a').forEach(link => {
    if (link.href &&
        !link.href.startsWith('mailto') &&
        !link.href.startsWith('#') &&
        link.hostname === location.hostname) {
      link.addEventListener('click', (e) => {
        if (link.href === location.href) return;
        e.preventDefault();
        const dest = link.href;
        document.body.style.transition = 'opacity 0.28s ease';
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = dest; }, 290);
      });
    }
  });

  /* ── Fade in on page load ── */
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.35s ease';
    document.body.style.opacity    = '1';
  });

});
