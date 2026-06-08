document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sélection des boutons / cases cliquables
    const btnDevis = document.getElementById("btn-devis");
    const btnServices = document.getElementById("btn-services");
    const btnInfos = document.getElementById("btn-infos");
    const navServices = document.getElementById("nav-services");
    const navContact = document.getElementById("nav-contact");

    // 2. Sélection des fenêtres pop-up (modales)
    const modalDevis = document.getElementById("modal-devis");
    const modalServices = document.getElementById("modal-services");
    const modalInfos = document.getElementById("modal-infos");

    // 3. Sélection des petites croix (boutons de fermeture)
    const closeDevis = document.getElementById("close-devis");
    const closeServices = document.getElementById("close-services");
    const closeInfos = document.getElementById("close-infos");

    // --- FONCTIONS POUR OUVRIR ET FERMER ---
    
    // Fonction pour ouvrir proprement avec l'effet fluide
    function ouvrirModale(laModale) {
        laModale.style.display = "flex"; // On l'affiche d'abord en flex
        setTimeout(() => {
            laModale.classList.add("show"); // Puis on lance l'animation CSS (opacité)
        }, 10);
        document.body.style.overflow = "hidden"; // On bloque le scroll de la page de fond
    }

    // Fonction pour fermer proprement
    function fermerModale(laModale) {
        laModale.classList.remove("show"); // On retire l'animation
        setTimeout(() => {
            if (!laModale.classList.contains("show")) {
                laModale.style.display = "none"; // On la cache complètement après l'effet
            }
        }, 300); // 300ms correspond au temps de l'effet en CSS
        document.body.style.overflow = "auto"; // On réactive le scroll du fond
    }

    // --- ÉCOUTEURS D'ÉVÉNEMENTS (LES CLICS) ---
    
    // CLIC : Ouverture de la case Devis
    if(btnDevis) btnDevis.addEventListener("click", () => ouvrirModale(modalDevis));
    
    // CLIC : Ouverture des Services (via la case ou le menu du haut)
    if(btnServices) btnServices.addEventListener("click", () => ouvrirModale(modalServices));
    if(navServices) navServices.addEventListener("click", (e) => { e.preventDefault(); ouvrirModale(modalServices); });
    
    // CLIC : Ouverture des Infos / Contact (via la case ou le menu du haut)
    if(btnInfos) btnInfos.addEventListener("click", () => ouvrirModale(modalInfos));
    if(navContact) navContact.addEventListener("click", (e) => { e.preventDefault(); ouvrirModale(modalInfos); });

    // CLIC : Fermeture avec les petites croix (X)
    if(closeDevis) closeDevis.addEventListener("click", () => fermerModale(modalDevis));
    if(closeServices) closeServices.addEventListener("click", () => fermerModale(modalServices));
    if(closeInfos) closeInfos.addEventListener("click", () => fermerModale(modalInfos));

    // CLIC : Fermer si le client clique n'importe où "à côté" de la fenêtre (sur le fond sombre)
    window.addEventListener("click", (e) => {
        if (e.target === modalDevis) fermerModale(modalDevis);
        if (e.target === modalServices) fermerModale(modalServices);
        if (e.target === modalInfos) fermerModale(modalInfos);
    });

    // --- GESTION ENVOI DU FORMULAIRE DE DEVIS ---
    const formDevis = document.getElementById("form-devis");
    if(formDevis) {
        formDevis.addEventListener("submit", (e) => {
            e.preventDefault(); // Empêche la page de se recharger

            // On récupère ce que le client a écrit
            const donnéesClient = {
                nom: document.getElementById("nom").value,
                prenom: document.getElementById("prenom").value,
                telephone: document.getElementById("telephone").value,
                probleme: document.getElementById("probleme").value
            };

            // Alerte de confirmation sympa
            alert(`Merci ${donnéesClient.prenom} ! Nexora a bien reçu votre demande. Nous vous rappellerons au ${donnéesClient.telephone}.`);
            
            // On vide le formulaire et on ferme la fenêtre
            formDevis.reset();
            fermerModale(modalDevis);
        });
    }

    // --- EFFET DESIGN : Lumière interactive qui suit la souris sur les cases ---
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
