const prefetched = new Set();

document.addEventListener("mouseover", (e) => {
  const link = e.target.closest("a");
  if (!link || !link.href) return;

  const url = new URL(link.href);
  if (url.origin !== location.origin) return;

  if (prefetched.has(link.href)) return;

  prefetched.add(link.href);
  fetch(link.href);
});