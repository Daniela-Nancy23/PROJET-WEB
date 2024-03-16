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