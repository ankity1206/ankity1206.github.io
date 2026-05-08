/* =========================
   LOAD TALLY SCRIPT
========================= */
(function loadTallyScript() {

  if (window.Tally) return;

  const script = document.createElement("script");

  script.src = "https://tally.so/widgets/embed.js";

  script.async = true;

  document.head.appendChild(script);

})();

/* =========================
   OPEN TALLY MODAL
========================= */
function openTally() {

  if (typeof Tally !== "undefined") {

    Tally.openPopup('9qOQ4G', {

      layout: 'modal',

      width: 600,

      hideTitle: true,

      overlay: true,

      autoClose: 3000,

      onSubmit: function(data) {

        console.log("Form submitted:", data);

      }

    });

  }
  else {

    console.error("Tally script not loaded yet");

  }

}

/* =========================
   KEYBOARD SHORTCUT
========================= */
document.addEventListener("keydown", function(e) {

  const tag = document.activeElement.tagName.toLowerCase();

  if (
    tag === "input" ||
    tag === "textarea"
  ) {
    return;
  }

  if (e.key.toLowerCase() === "u") {

    e.preventDefault();

    openTally();

  }

});