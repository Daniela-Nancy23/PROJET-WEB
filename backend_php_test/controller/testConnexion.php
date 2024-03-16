<?php

global $etudiants, $membresBDE,$salariesCESI,$email,$motDePasse;

?>

<?php
require_once "ajax.php";
    $email = $_POST['email'];
    //'lionelyouassa595@gmail.com';
    $motDePasse =$_POST['password'];

    echo $email;
    echo $motDePasse;
    // '777';
?>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        const url1 = "http://127.0.0.1:3000/menbreBDE/all";
        const url2 = "http://127.0.0.1:3000/salarierCESI/all";
        const url3 = "http://127.0.0.1:3000/etudiant/all";

        async function fetchDataConnexion() {
            try {

                // Attendre la résolution de chaque promesse
                const data1 = await Get_ajax(url1);
                const data2 = await Get_ajax(url2);
                const data3 = await Get_ajax(url3);

                // Convertir les données en chaînes JSON
                const data1String = JSON.stringify(data1);
                const data2String = JSON.stringify(data2);
                const data3String = JSON.stringify(data3);
                const email=JSON.stringify(<?= json_encode($email) ?>);
                const password=JSON.stringify(<?= json_encode($motDePasse) ?>);


                console.log("data1:", data1String);
                console.log("data2:", data2String);
                console.log("data3:", data3String);

                // Envoyer les données au serveur
                $.ajax({
                    url: 'testConnexion.php', // URL du script PHP
                    type: 'POST',
                    data: {
                        'membresBDE': data1String,
                        'salariesCESI': data2String,
                        'etudiants': data3String,
                        'email':email,
                        'password':password

                    },
                    success: function(response) {
                        console.log(response);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error(textStatus, errorThrown);
                    }
                });
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        // Utilisation de la fonction
        fetchDataConnexion();
    </script>




<?php


if ($_SERVER["REQUEST_METHOD"] == "POST" and isset($_POST['membresBDE'])) {
    $membresBDE = json_decode($_POST['membresBDE'], true);
    $salariesCESI = json_decode($_POST['salariesCESI'], true);
    $etudiants = json_decode($_POST['etudiants'], true);
    $email = json_decode($_POST['email'], true);
    $motDePasse = json_decode($_POST['password'], true);


    // Pour afficher correctement les tableaux associatifs, vous pouvez les convertir en chaînes
   // echo "Les valeurs ont été reçues : membresBDE=" . json_encode($membresBDE) . ", salariesCESI=" . json_encode($salariesCESI) . ", etudiants=" . json_encode($etudiants);





    //echo " ttttttttttttttttttttttttttttttttttttttttt";
    echo "/////////////// menbreBDE  ";
    echo "<br><br>";
    foreach ($membresBDE as $menbre){

        //echo "  [".$menbre['email']."  --   ".$menbre['motDePasse']."] ";
        if ($menbre['email'] == $email && $menbre['motDePasse'] == $motDePasse) {
            echo "###Connexion réussie en tant que membre du BDE.###";?>
            <script>
                get_token(<?= json_encode($email) ?>);
            </script>
            <?php
        }

    }


    echo " /////////////// etudiant  ";
       foreach ($etudiants as $etudiant) {
           ///echo " [" . $etudiant['email'] . "  --   " . $etudiant['motDePasse'] . "] ";
           if ($etudiant['email'] == $email && $etudiant['motDePasse'] == $motDePasse) {
               echo "###Connexion réussie en tant que etudiant .#####"; ?>
               <script>
                   get_token(<?= json_encode($email) ?>);



              </script>


<?php
           }
       }


    echo "////////////// salariersCESI  ";
    foreach ($salariesCESI as $salarie ){

       // echo " [".$salarie['email']."  --   ".$salarie['motDePasse']."] ";
        if ($salarie['email'] == $email && $salarie['motDePasse'] == $motDePasse) {
            echo "###Connexion réussie en tant que salarié CESI.###";?>
            <script>

                get_token(<?= json_encode($email) ?>);
            </script>
            <?php
        }
    }
}
?>

<script>
    async function test (){
        const  Token=await get_token(<?= json_encode($email) ?>)
        Get_ajax("http://127.0.0.1:3000/produit/recherche/15000",Token);
    }

    test();

</script>


