<?php

global $etudiants, $membresBDE,$salariesCESI;
require_once "ajax.php";
?>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $membresBDE = json_decode($_POST['membresBDE'], true);
    $salariesCESI = json_decode($_POST['salariesCESI'], true);
    $etudiants = json_decode($_POST['etudiants'], true);

    // Pour afficher correctement les tableaux associatifs, vous pouvez les convertir en chaînes
   // echo "Les valeurs ont été reçues : membresBDE=" . json_encode($membresBDE) . ", salariesCESI=" . json_encode($salariesCESI) . ", etudiants=" . json_encode($etudiants);

    $email = 'lionelyouassa595@gmail.com';
    $motDePasse = '777';

    echo "<br><br>".$email;

    echo "<br><br>".$motDePasse;

    //echo " ttttttttttttttttttttttttttttttttttttttttt";
    echo "/////////////// menbreBDE  ";
    echo "<br><br>";
    foreach ($membresBDE as $menbre){

        echo "  [".$menbre['email']."  --   ".$menbre['motDePasse']."] <br> ";
        if ($menbre['email'] == $email && $menbre['motDePasse'] == $motDePasse) {
            echo "Connexion réussie en tant que membre du BDE.";
        }

    }


    echo " /////////////// etudiant  ";
       foreach ($etudiants as $etudiant) {
           echo "  [" . $etudiant['email'] . "  --   " . $etudiant['motDePasse'] . "] <br> ";
           if ($etudiant['email'] == $email && $etudiant['motDePasse'] == $motDePasse) {
               echo "Connexion réussie en tant que etudiant ."; ?>
               <script>
                 const token=Get_ajax("http://127.0.0.1:3000/genere_token/"+<?= json_encode($email) ?>);
                 console.log("TOKEN: "+token);

              </script>
<?php
           }
       }


    echo "////////////// salariersCESI  ";
    foreach ($salariesCESI as $salarie ){

        echo "  [".$salarie['email']."  --   ".$salarie['motDePasse']."] <br> ";
        if ($salarie['email'] == $email && $salarie['motDePasse'] == $motDePasse) {
            return "Connexion réussie en tant que salarié CESI.";
        }
    }
}
?>
