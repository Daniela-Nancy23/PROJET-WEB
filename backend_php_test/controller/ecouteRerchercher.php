<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $resultats = json_decode($_POST['produit'], true);

    //  echo $resultats;

    // Afficher les résultats
    if (!empty($resultats)) {
        echo "<h2>Résultats de la recherche :</h2>";
        echo "<ul>";
        foreach ($resultats as $produit) {
            echo "<li>" . $produit['nom'] . " (Prix: " . $produit['prix'] . ")</li>";
        }
        echo "</ul>";
    } else {
        echo "Aucun résultat trouvé.";
    }
}
?>