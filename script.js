window.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  document.querySelectorAll("#sidebar a").forEach(a => {
    a.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });

  const form = document.getElementById("devisForm");
  const success = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.style.display = "none";
    success.classList.remove("hidden");
  });

});

function goHome() {
  location.reload();
}
