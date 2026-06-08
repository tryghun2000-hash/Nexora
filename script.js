window.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const form = document.getElementById("devisForm");
  const successPage = document.getElementById("successPage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.style.display = "none";
    successPage.classList.remove("hidden");
  });

});

// retour accueil
function goHome() {
  location.reload();
}
