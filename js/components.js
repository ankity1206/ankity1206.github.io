/**
 * components.js
 * ─────────────────────────────────────────────────────────────
 * Shared header & footer components for every page.
 *
 * HOW TO USE ON ANY PAGE
 * ──────────────────────
 * 1. Add a placeholder where you want the header:
 *      <div id="site-header"></div>
 *
 * 2. Add a placeholder where you want the footer:
 *      <div id="site-footer"></div>
 *
 * 3. Include this script (adjust path depth with ROOT if needed):
 *      <script src="js/components.js"></script>
 *
 * For pages in subdirectories (e.g. blog/post.html), set the
 * data-root attribute on the script tag to go up to the repo root:
 *      <script src="../js/components.js" data-root="../"></script>
 *
 * EDITING
 * ───────
 * • Nav links  → edit NAV_LINKS below
 * • Footer text → edit renderFooter() below
 * • Site name   → edit SITE_NAME below
 * ─────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────────────
   * ROOT is the path prefix to reach the repo root from the
   * current page. Override via data-root on the <script> tag.
   * Default '' works for all top-level pages (index.html, etc.)
   * ────────────────────────────────────────────────────────── */
  const scriptEl = document.currentScript;
  const ROOT     = scriptEl ? (scriptEl.getAttribute('data-root') || '') : '';

  /* ── Site-wide constants ─────────────────────────────────── */
  const SITE_NAME  = 'Ankit Yadav';
  const SITE_ROLE  = 'M.Tech. CS · ISI Kolkata';
  const CV_PATH    = ROOT + 'Ankit_resume_nvidia.pdf';

  /* ── Nav links ───────────────────────────────────────────────
   * Each entry: { label, href, datSection (optional) }
   *   - Use '#id' hrefs for same-page anchors (index.html only)
   *   - Use 'page.html' hrefs for cross-page navigation
   * ────────────────────────────────────────────────────────── */
  const NAV_LINKS = [
    { label: 'About',     href: ROOT + 'index.html#about',     dataSection: 'about'     },
    { label: 'Education', href: ROOT + 'index.html#education', dataSection: 'education' },
    { label: 'Research',  href: ROOT + 'index.html#research',  dataSection: 'research'  },
    // { label: 'Skills',    href: ROOT + 'index.html#skills',    dataSection: 'skills'    },
    { label: 'Seminars',  href: ROOT + 'index.html#seminars',  dataSection: 'seminars'  },
  ];

  /* ══════════════════════════════════════════════════════════
   * renderHeader()
   * Injects the <nav> top bar into #site-header.
   * ══════════════════════════════════════════════════════════ */
  function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;

    const linksHTML = NAV_LINKS.map(link =>
      `<li>
        <a href="${link.href}"
           class="nav-link"
           ${link.dataSection ? `data-section="${link.dataSection}"` : ''}>
          ${link.label}
        </a>
      </li>`
    ).join('\n      ');

    el.innerHTML = `
      <nav class="topnav" id="topnav" role="navigation" aria-label="Main navigation">
        <a href="${ROOT}index.html" class="nav-name" aria-label="${SITE_NAME} — home">${SITE_NAME}</a>

        <ul class="nav-links" role="list">
          ${linksHTML}
        </ul>

        <!--
        <a href="${CV_PATH}" target="_blank" rel="noopener" class="cv-link">
          Download CV ↗
        </a>
        -->
      </nav>
    `.trim();
  }

  /* ══════════════════════════════════════════════════════════
   * renderFooter()
   * Injects the <footer> into #site-footer.
   * ══════════════════════════════════════════════════════════ */
  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;

    const year = new Date().getFullYear();

    el.innerHTML = `
      <footer class="site-footer" role="contentinfo">
        <p>${SITE_NAME} · Indian Statistical Institute, Kolkata — 700108</p>
        <p class="footer-copy">© ${year}</p>
      </footer>
    `.trim();
  }

  /* ── Boot: render both components as soon as DOM is ready ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderHeader();
      renderFooter();
    });
  } else {
    // DOMContentLoaded already fired (script loaded async/defer or at end of body)
    renderHeader();
    renderFooter();
  }

})();
