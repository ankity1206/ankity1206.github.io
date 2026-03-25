// ================= TALLY POPUP =================

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
  } else {
    console.error("Tally script not loaded");
  }
}


// ================= FUTURE EXTENSIONS =================

// Example: keyboard shortcut (press "u")
document.addEventListener("keydown", function(e){
  if(e.key === "u"){
    openTally();
  }
});
