<!doctype html>
<html lang="fr">
<head>
   <link rel="stylesheet" href="../assets/vendors/fontawesome/css/all.min.css">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="css/style.css">
   <meta charset="utf-8">
   <title>Connexion</title>
   
</head>
<body class="bg-light">
    
     <div class="container">
        <div class="row nt-5">
            <div class="col-lg-4 bg-white m-auto rounded-top">
                <h2 class="text-center">Connexion</h2>
                
                <form action="../controller/testConnexion.php" method="post">

                    
                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-envelope"></i>
                            <input type="text" name="email" class="form-control" placeholder="E-mail"><br>
                        </span>
                    </div>


                    
                    <div class="input-group nb-3">
                        <span class="input-group-text">
                            <i class="fa fa-lock "></i>
                            <input type="text" name="password" class="form-control" placeholder="Mot de passe"><br>
                        </span>
                    </div>


                    <div class="d-grid">
                        <button type="submit" name="submit" class="btn btn-success"> Se connecter</button>
                       <p class="text-center">
                            N'avez vous pas de compte?<a href="../inscription.html">S'inscrire</a>


                       </p> 


                    </div>


                </form>
            </div>

        </div>

     </div>
 



<script src="../assets/vendors/bootstrap/js/bootstrap.bundle.js"></script>
</body>
</html>