(function () {
  var SITE = {
    name: "Ankit Yadav",
    email: "mailto:hak171562@gmail.com",
    github: "https://github.com/ankity1206",
    resume: "https://drive.google.com/file/d/1fiaLy9py9AgcZHLEAY3RUhps0uBKTH_G/view?usp=sharing",
    nav: [
      { label: "Home",             href: "/"                     },
      { label: "Towards Research", href: "towards-research.html" },
      { label: "Misc",             href: "misc.html"             }
    ],
    links: []
  };

  if (location.protocol !== "file:" && location.pathname.endsWith("/index.html")) {
    var cleanPath = location.pathname.replace(/\/index\.html$/, "/") + location.search + location.hash;
    history.replaceState(null, "", cleanPath);
  }

  function currentPage() {
    var file = location.pathname.split("/").pop();
    return (file === "" || file === "index.html") ? "/" : file;
  }

  function renderHeader() {
    var page = currentPage();
    var nav = SITE.nav.map(function (n) {
      var cur = n.href === page ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + '>' + n.label + '</a>';
    }).join("");
    var mailIcon = '<svg class="btn-icon" viewBox="0 0 16 16" aria-hidden="true">' +
                     '<path fill="currentColor" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>' +
                   '</svg>';
    var githubIcon = '<svg class="btn-icon" viewBox="0 0 16 16" aria-hidden="true">' +
                       '<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>' +
                     '</svg>';
    return '<header class="site-header">' +
             '<div class="site-title"><a href="/">' + SITE.name + '</a></div>' +
             '<nav class="site-nav">' + nav + '</nav>' +
             '<a href="' + SITE.email + '" class="resume-btn" aria-label="Email">' + mailIcon + '</a>' +
             '<a href="' + SITE.github + '" class="resume-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">' + githubIcon + '</a>' +
             '<a href="' + SITE.resume + '" class="resume-btn" target="_blank" rel="noopener noreferrer">Resume</a>' +
             '<button type="button" class="theme-toggle" data-theme-toggle></button>' +
           '</header>';
  }

  function renderFooter() {
    var links = SITE.links.map(function (l) {
      return ' · <a href="' + l.href + '">' + l.label + '</a>';
    }).join("");
    return '<footer class="site-footer">&copy; ' + new Date().getFullYear() +
           ' ' + SITE.name + links + '</footer>';
  }

  function mount(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  mount("site-header", renderHeader());
  mount("site-footer", renderFooter());
})();
