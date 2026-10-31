/* components.js — shared header and footer.
   Edit SITE below to change the name, nav, or contact links. */
(function () {
  var SITE = {
    name: "Ankit Yadav",
    nav: [
      { label: "Home",     href: "index.html"    },
      { label: "Research", href: "research.html" },
      { label: "Seminars", href: "seminars.html" }
    ],
    // Optional footer links, e.g. { label: "GitHub", href: "https://github.com/ankity1206" }
    links: []
  };

  function currentPage() {
    var file = location.pathname.split("/").pop();
    return file === "" ? "index.html" : file;
  }

  function renderHeader() {
    var page = currentPage();
    var nav = SITE.nav.map(function (n) {
      var cur = n.href === page ? ' aria-current="page"' : "";
      return '<a href="' + n.href + '"' + cur + '>' + n.label + '</a>';
    }).join("");
    return '<header class="site-header">' +
             '<div class="site-title"><a href="index.html">' + SITE.name + '</a></div>' +
             '<nav class="site-nav">' + nav + '</nav>' +
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
