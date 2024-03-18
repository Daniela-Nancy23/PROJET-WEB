<?php
// Vérification si le cookie de consentement existe
if(!isset($_COOKIE['consent_given'])) {
    // Si le cookie n'existe pas, on l'ajoute pour indiquer que le message de consentement doit être affiché
    setcookie("consent_given", "false", time() + (86400 * 30), "/"); // 86400 = 1 jour
    $showConsentMessage = true;
} else {
    $showConsentMessage = false;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Consentement aux cookies</title>
    <style>
        /* Style pour le message de consentement */
        #consentMessage {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: #f9ed69;
            color: #333;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: none;
        }

        /* Style pour le bouton d'acceptation */
        #consentMessage button {
            background-color: #333;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        /* Style pour le bouton lorsqu'il est survolé */
        #consentMessage button:hover {
            background-color: #555;
        }
    </style>
    <script>
        // Fonction pour accepter les cookies et mettre à jour le cookie de consentement
        function acceptCookies() {
            document.getElementById('consentMessage').style.display = 'none';
            // Mettre à jour le cookie de consentement pour indiquer que l'utilisateur a donné son consentement
            document.cookie = "consent_given=true; path=/";
        }
    </script>
</head>
<body>
    <!-- Message de consentement -->
    <div id="consentMessage" style="display: none;">
        <p>Nous utilisons des cookies pour améliorer votre expérience. En continuant à utiliser ce site, vous acceptez l'utilisation de cookies.</p>
        <button onclick="acceptCookies()">Accepter</button>
    </div>

    <?php if($showConsentMessage): ?>
        <script>
            // Afficher le message de consentement si le cookie n'existe pas
            window.onload = function() {
                document.getElementById('consentMessage').style.display = 'block';
            };
        </script>
    <?php endif; ?>
</body>
</html>
