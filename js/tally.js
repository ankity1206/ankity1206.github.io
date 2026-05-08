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

    console.error("Tally script not loaded");

  }

}

/* =========================
   KEYBOARD SHORTCUT
========================= */
document.addEventListener("keydown", function(e) {

  /* avoid triggering inside form fields */
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