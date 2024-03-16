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


        require_once "ajax.php";
            ?>


     <script>
                const dataToSend = <?php echo json_encode($data); ?>;
                const url ="http://127.0.0.1:3000/etudiant/insert";
                //console.log(dataToSend);
                Post_ajax(dataToSend,url);

     </script>



            <?php
           
        }

   }else{$message="Remplissez tous les champs.";
   }
}
?>






<!doctype html>
<head>
    <link rel="stylesheet" href="../assets/vendors/fontawesome/css/all.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <meta charset="utf-8">
    <title>Formulaire d'inscription</title>

</head>
<body class="bg-light">

<div class="container">
    <div class="row nt-5">
        <div class="col-lg-4 bg-white m-auto rounded-top">
            <h2 class="text-center">Inscription</h2>
            <p class="text-center text-muted load">Simple et rapide</p>
            <form method="POST" action="">

                <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-user"></i>
                            <input type="text" name="nom" class="form-control" placeholder="Nom"><br>
                        </span>
                </div>


                <html lang="fr">
                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-user"></i>
                            <input type="text" name="prenom" class="form-control" placeholder="Prénom"><br>
                        </span>
                    </div>

                    
                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-envelope"></i>
                            <input type="email" name="email" class="form-control" placeholder="E-mail"><br>
                        </span>
                    </div>


                    
                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-lock "></i>
                            <input type="text" name="password" class="form-control" placeholder="Mot de passe"><br>
                        </span>
                    </div>

                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-map-marker"></i>
                            <input type="text" name="adresse" class="form-control" placeholder="Localisation"><br>
                        </span>
                    </div>

                    <div class="d-grid">
                        <button type="submit" name="valider" class="btn btn-success"> S'inscrire</button>
                        <p class="text-center text-muted">
                            <i style=" color:red">
                            <?php
                            if (isset($message)){

                                echo $message. "<br />";
                            }

                            ?></i>
                            En cliquant sur S'inscrire, vous acceptez nos<a href=""> conditions générales</a>, <a href=""> notre politique de confidentialité</a> et <a href="">notre politique d'utilisation></a>
                        </p>
                       <p class="text-center">
                            Avez vous déjà un compte?<a href="connexion.php">Connexion</a>


                       </p> 


                    </div>


                </form>
            </div>

        </div>

     </div>
 



<script src="../assets/vendors/bootstrap/js/bootstrap.bundle.js"></script>
</body>
</html>