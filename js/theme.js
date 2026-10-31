/* theme.js — toggle behaviour. Works with any element having [data-theme-toggle]. */
(function () {
  var root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncButtons() {
    var next = current() === "dark" ? "light" : "dark";
    var buttons = document.querySelectorAll("[data-theme-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].textContent = next === "dark" ? "Dark theme" : "Light theme";
      buttons[i].setAttribute("aria-label", "Switch to " + next + " theme");
    }
  }

  function set(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    syncButtons();
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-theme-toggle]")) {
      set(current() === "dark" ? "light" : "dark");
    }
  });

  syncButtons();
})();
