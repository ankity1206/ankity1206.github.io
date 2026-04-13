async function loadNavbar() {
  const container = document.getElementById("nav-container");

  const res = await fetch("/data/navbar.json");
  const data = await res.json();

  const current = window.location.pathname.replace(/\/$/, "");

  /* LINKS */
  data.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;

    if (current === link.url.replace(/\/$/, "")) {
      a.classList.add("active");
    }

    container.appendChild(a);
  });

  /* DROPDOWNS */
  data.dropdowns.forEach(drop => {
    const wrapper = document.createElement("div");
    wrapper.className = "dropdown";

    const btn = document.createElement("button");
    btn.className = "dropbtn";
    btn.textContent = drop.name + " ▾";

    const menu = document.createElement("div");
    menu.className = "dropdown-content";

    drop.items.forEach(item => {
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.name;

      if (current === item.url.replace(/\/$/, "")) {
        a.classList.add("active");
      }

      menu.appendChild(a);
    });

    /* 🔥 HOVER SUPPORT (desktop) */
    wrapper.addEventListener("mouseenter", () => {
      if (window.innerWidth > 700) {
        menu.style.display = "block";
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (window.innerWidth > 700) {
        menu.style.display = "none";
      }
    });

    /* CLICK (mobile) */
    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll(".dropdown-content").forEach(d => {
        if (d !== menu) d.style.display = "none";
      });

      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    });

    wrapper.appendChild(btn);
    wrapper.appendChild(menu);
    container.appendChild(wrapper);
  });

  /* CLOSE ON OUTSIDE CLICK */
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach(d => {
      d.style.display = "none";
    });
  });
}

/* 🔥 NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});