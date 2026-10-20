# ankity1206.github.io

Personal academic portfolio and website of **Ankit Yadav** (M.Tech Computer Science, ISI Kolkata; M.Sc Mathematics, IIT Bombay).

Live Site: [https://ankity1206.github.io/](https://ankity1206.github.io/)

---

### Features & Architecture
- **Single Page Architecture:** Fast, accessible, single-page layout featuring Education, DRDO Research Project, Workshops, GitHub Repositories, and Contact sections.
- **Modern Non-Flashy Background:** Pure CSS deep dark theme with subtle radial ambient glow and geometric dot matrix (zero battery drain, no canvas animation loops).
- **Responsive Navigation:** Fixed glassmorphism navbar with scroll spy, mobile hamburger drawer, and direct CV/Resume download.
- **Course Archive:** Integrated route to lecture notes and course slides (`/notes/`).

---

### Directory Structure
```text
.
├── index.html                  # Main single-page portfolio
├── 404.html                    # Modern 404 error page
├── css/
│   └── style.css               # Clean modern stylesheet
├── data/
│   └── Resume.pdf              # Academic CV
├── .nojekyll                   # Disables Jekyll build for GitHub Pages
├── images/
│   └── preview.jpeg            # Social share Open Graph preview image
├── notes/                      # Academic course notes archive
│   ├── index.html
│   └── Mtech/
│       ├── index.html
│       └── second-sem/
│           ├── ML-I/           # Machine Learning-I lectures & JSON
│           ├── OS/             # Operating Systems lectures & JSON
│           └── DBMS/           # Database Management Systems & JSON
├── favicon.png                 # Optimized 64x64 PNG favicon
├── favicon.ico                 # Fallback 32x32 ICO favicon
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Search crawler directives
└── llms.txt                    # LLM crawler summary
```

---

### Editing Repositories
In `index.html`, locate the `<section id="repositories">` section. Each project is wrapped in an `<a class="card-modern repo-card">` card. Update the GitHub URL, repository name, description, and language dot tags as needed.
