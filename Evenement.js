const boutonsLike = document.querySelectorAll(".bouton-like");

boutonsLike.forEach(function(bouton) {
    let nbLikes = 0;
    const nombreLikes = bouton.querySelector(".nombre-likes");

    bouton.addEventListener("click", function() {
        bouton.classList.toggle("active");

        if (bouton.classList.contains("active")) {
            nbLikes++;
        } else {
            nbLikes--;
        }

        nombreLikes.textContent = nbLikes;
    });
});


 // Sélectionnez le bouton principal et le groupe de boutons
 const boutonAfficher = document.getElementById('bouton-afficher');
 const groupeBoutons = document.getElementById('groupe-boutons');
 
 // Ajoutez un écouteur d'événements sur le bouton principal
 boutonAfficher.addEventListener('click', function() {
     // Vérifiez si le groupe de boutons est visible ou non
     if (groupeBoutons.style.display === 'none') {
         // Affichez le groupe de boutons s'il est caché
         groupeBoutons.style.display = 'block';
     } else {
         // Cachez le groupe de boutons s'il est affiché
         groupeBoutons.style.display = 'none';
     }
 });


 const iconesCommentaire = document.querySelectorAll(".icone-commentaire");

iconesCommentaire.forEach(function(icone) {
    const contenuCommentaire = icone.nextElementSibling;

    icone.addEventListener("click", function() {
        contenuCommentaire.style.display = contenuCommentaire.style.display === "none" ? "block" : "none";
    });
});

