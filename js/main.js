/**
 * main.js
 * ─────────────────────────────────────────────────────────────
 * Purpose: Vanilla JS interactions:
 *   1. Fixed nav — toggles `.scrolled` class for opacity change
 *   2. Intersection Observer → active nav highlight as user scrolls
 *   3. Smooth scroll on nav link click
 *
 * No jQuery. No external dependencies.
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── Grab elements ─────────────────────────────────────── */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main .section');

  /* ── 1. Toggle .scrolled on nav when page is scrolled ───── */
  const topnav = document.getElementById('topnav');
  const spacer  = document.getElementById('site-header');

  /**
   * Syncs the #site-header spacer height and section scroll-margin-top
   * to the actual rendered nav height. Called on load and on resize so
   * a two-row mobile nav never overlaps content.
   */
  function syncNavHeight() {
    if (!topnav) return;
    const h = topnav.offsetHeight;
    // Update spacer so content starts below the nav
    if (spacer) spacer.style.height = h + 'px';
    // Update scroll-margin-top so anchor links land correctly
    sections.forEach(s => {
      s.style.scrollMarginTop = (h + 16) + 'px';
    });
  }

  // Run on load, and whenever the window is resized (orientation change etc.)
  syncNavHeight();
  window.addEventListener('resize', syncNavHeight, { passive: true });

  function onScroll() {
    if (!topnav) return;
    topnav.classList.toggle('scrolled', window.scrollY > 10);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 2. Intersection Observer for active nav highlight ─── */

  /**
   * Map from section id → nav link element for O(1) lookup.
   * @type {Map<string, Element>}
   */
  const linkMap = new Map();
  navLinks.forEach(link => {
    const sectionId = link.getAttribute('data-section');
    if (sectionId) linkMap.set(sectionId, link);
  });

  /**
   * Sets the `.active` class on the link matching `id`,
   * and removes it from all others.
   * @param {string} id - Section element id
   */
  function setActive(id) {
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = linkMap.get(id);
    if (activeLink) activeLink.classList.add('active');
  }

  // Observer options: trigger when section crosses 20% from top
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -70% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  /* ── 3. Smooth scroll on nav link click ────────────────── */
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Always offset by the fixed nav height + a small gap
      const navEl = document.getElementById('topnav');
      const navHeight = navEl ? navEl.offsetHeight : 52;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Update active state immediately on click
      setActive(this.getAttribute('data-section'));
    });
  });

  /* ── 3. Highlight first section on page load ────────────── */
  if (sections.length > 0) {
    setActive(sections[0].id);
  }

})();
