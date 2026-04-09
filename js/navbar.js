window.App = window.App || {};

App.navbar = {
  init() {

    /* ================= DROPDOWN ================= */
    const dropdownButtons = document.querySelectorAll(".dropbtn");
    const dropdownMenus = document.querySelectorAll(".dropdown-content");

    dropdownButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        dropdownMenus.forEach(menu => menu.classList.remove("show"));

        const menu = btn.nextElementSibling;
        if (menu) menu.classList.toggle("show");
      });
    });

    /* ===== prevent closing when clicking inside ===== */
    dropdownMenus.forEach(menu => {
      menu.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });

    /* ===== click outside closes all ===== */
    document.addEventListener("click", () => {
      dropdownMenus.forEach(menu => menu.classList.remove("show"));
    });

    /* ===== ESC key closes ===== */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dropdownMenus.forEach(menu => menu.classList.remove("show"));
      }
    });

    /* ================= SCROLL EFFECT ================= */
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const nav = document.querySelector(".navbar");
          if (nav) {
            nav.classList.toggle("scrolled", window.scrollY > 50);
          }
          ticking = false;
        });
        ticking = true;
      }
    });

  }
};