window.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  if (!menuBtn || !sidebar) {
    console.log("Elements introuvables");
    return;
  }

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
});
