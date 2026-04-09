const cache = {};

async function loadComponent(id, file) {
  try {
    const el = document.getElementById(id);
    if (!el) return;

    // use cache to avoid re-fetching
    if (cache[file]) {
      el.innerHTML = cache[file];
      return;
    }

    const res = await fetch(file);

    if (!res.ok) throw new Error(`Failed to load ${file}`);

    const data = await res.text();
    cache[file] = data;

    el.innerHTML = data;

  } catch (err) {
    console.error("Component load error:", err);
  }
}

(async () => {
  // load BOTH in parallel (faster + safer)
  await Promise.all([
    loadComponent("navbar", "/components/navbar.html"),
    loadComponent("footer", "/components/footer.html")
  ]);

  // show navbar after load
  const nav = document.getElementById("navbar");
  if (nav) nav.style.visibility = "visible";

  // init navbar AFTER load
  if (window.App && App.navbar) {
    App.navbar.init();
  }
})();