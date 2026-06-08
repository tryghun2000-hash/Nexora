document.addEventListener("DOMContentLoaded", () => {
    
    // Sélection des éléments (Boutons / Cases)
    const btnDevis = document.getElementById("btn-devis");
    const btnServices = document.getElementById("btn-services");
    const btnInfos = document.getElementById("btn-infos");
    const navServices = document.getElementById("nav-services");
    const navContact = document.getElementById("nav-contact");

    // Sélection des fenêtres Modales
    const modalDevis = document.getElementById("modal-devis");
    const modalServices = document.getElementById("modal-services");
    const modal減nfos = document.getElementById("modal-infos");

    // Sélection des boutons de fermeture (Croix)
    const closeDevis = document.getElementById("close-devis");
    const closeServices = document.getElementById("close-services");
    const closeInfos = document.getElementById("close-infos");

    // --- FONCTIONS D'OUVERTURE / FERMETURE ---
    function openModal(modal) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Empêche de scroller le fond
    }

    function closeModal(modal) {
        modal.classList.remove("show");
        // Petit délai pour enlever le display flex après la transition d'opacité
        setTimeout(() => {
            if(!modal.classList.contains("show")) {
                modal.style.display = "none";
            }
        }, 300);
        document.body.style.overflow = "auto"; // Réactive le scroll
    }

    // On force l'affichage en flex juste avant d'ajouter la classe 'show' pour la transition CSS
    function triggerOpen(modal) {
        modal.style.display = "flex";
        setTimeout(() => openModal(modal), 10);
    }

    // --- ECOUTEURS D'EVENEMENTS (CLICS) ---
    
    // Ouvrir Devis
    btnDevis.addEventListener("click", () => triggerOpen(modalDevis));
    
    // Ouvrir Services (depuis la case ou la barre de navigation)
    btnServices.addEventListener("click", () => triggerOpen(modalServices));
    navServices.addEventListener("click", (e) => { e.preventDefault(); triggerOpen(modalServices); });
    
    // Ouvrir Infos / Contact (depuis la case ou la barre de navigation)
    btnInfos.addEventListener("click", () => triggerOpen(modal減nfos));
    navContact.addEventListener("click", (e) => { e.preventDefault(); triggerOpen(modal減nfos)); });

    // Fermeture via la Croix
    closeDevis.addEventListener("click", () => closeModal(modalDevis));
    closeServices.addEventListener("click", () => closeModal(modalServices));
    closeInfos.addEventListener("click", () => closeModal(modal減nfos));

    // Fermeture si l'utilisateur clique en dehors de la boîte blanche (sur le fond sombre)
    window.addEventListener("click", (e) => {
        if (e.target === modalDevis) closeModal(modalDevis);
        if (e.target === modalServices) closeModal(modalServices);
        if (e.target === modal減nfos) closeModal(modal減nfos);
    });

    // --- GESTION DU FORMULAIRE DE DEVIS ---
    const formDevis = document.getElementById("form-devis");
    formDevis.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Récupération des données saisies par le client
        const donnéesDevis = {
            nom: document.getElementById("nom").value,
            prenom: document.getElementById("prenom").value,
            telephone: document.getElementById("telephone").value,
            probleme: document.getElementById("probleme").value
        };

        // Message de confirmation à l'utilisateur
        alert(`Merci ${donnéesDevis.prenom} ! Votre demande de devis a bien été prise en compte. Nous vous recontacterons au ${donnéesDevis.telephone}.`);
        
        // Réinitialisation et fermeture du formulaire
        formDevis.reset();
        closeModal(modalDevis);
    });

    // --- EFFET VISUEL MOUSE-MOVE SOURIS SUR LES CASES ---
    // Ajoute un effet de lumière qui suit la souris sur les tuiles (comme sur les sites modernes)
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
