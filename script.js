window.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const form = document.getElementById("devisForm");
  const successPage = document.getElementById("successPage");

  // sécurité : on s'assure que ça ne s'affiche JAMAIS au chargement
  successPage.classList.add("hidden");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // sécurité : si champ vide → rien ne se passe
    if (!name || !phone || !message) return;

    form.style.display = "none";
    successPage.classList.remove("hidden");
  });

});

function goHome() {
  location.reload();
}
