const cache = {};
const VERSION = "v2"; // 🔥 update when needed

/* 🔥 FAVICON INJECTOR (runs immediately) */
(function () {
  // avoid duplicate favicon
  if (!document.querySelector("link[rel='icon']")) {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/favicon.png";
    document.head.appendChild(link);
  }
})();

async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    if (cache[file]) {
      el.innerHTML = cache[file];
    } else {
      const res = await fetch(file + "?v=" + VERSION);
      if (!res.ok) throw new Error(`Failed to load ${file}`);

      const data = await res.text();
      cache[file] = data;
      el.innerHTML = data;
    }

    if (componentInit[id]) {
      componentInit[id]();
    }

  } catch (err) {
    console.error("Component load error:", err);
    el.innerHTML = `<div style="color:red">Failed to load component</div>`;
  }
}

/* INIT */
const componentInit = {
  navbar: () => {
    if (typeof loadNavbar === "function") {
      loadNavbar();
    }
  },
  footer: () => {}
};

/* BOOT */
(async () => {
  await Promise.all([
    loadComponent("navbar", "/components/navbar.html"),
    loadComponent("footer", "/components/footer.html")
  ]);

  /* 🔥 PREFETCH (inline, no extra request) */
  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest("a");
    if (!link || !link.href) return;

    const url = new URL(link.href);

    // only same-origin links
    if (url.origin !== location.origin) return;

    fetch(link.href, { method: "GET" });
  });
})();