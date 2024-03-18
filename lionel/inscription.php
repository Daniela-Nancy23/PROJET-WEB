<?php
if(isset($_POST['valider']))
{
    if (!empty($_POST['nom'])AND !empty($_POST['prenom']) AND !empty($_POST['email']) AND !empty($_POST['password']) AND !empty($_POST['adresse'])){

        $nom = htmlspecialchars($_POST['nom']);
        $prenom=htmlspecialchars($_POST['prenom']);
        $email=htmlspecialchars($_POST['email']);
        $mdp=sha1($_POST['password']);
        $adresse=htmlspecialchars($_POST['adresse']);

 if(strlen($_POST['password'])<7){
    $message="Votre mot de passe est trop court.";

        }elseif(strlen($nom)>25 || strlen($prenom)>50 || strlen($adresse)>25){
           $message="Votre nom ou prénom ou localisation est trop long";
        }else{


        $data = array(
              'nom' => $nom,
             'prenom' => $prenom,
             'email' => $email,
             'password' => $mdp,
             'localisation' => $adresse
        );


        require_once "../model/ajax.php";
            ?>


     <script>
                const dataToSend = <?php echo json_encode($data); ?>;
                const url ="http://127.0.0.1:3000/etudiant/insert";
                //console.log(dataToSend);
                async function post_inscrit (url){
                    await Post_ajax(dataToSend, url);
                    window.location.href = "../view/inscription.php?t=1";                }
                post_inscrit(url);

     </script>



            <?php

        }

   }else{$message="Remplissez tous les champs.";
   }
}
?>





