<!doctype html>
<html lang="fr">
 <head>
   <link rel="stylesheet" href="../assets/vendors/fontawesome/css/all.min.css">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.min.css">
   <link rel="stylesheet" href="css/style.css">
   <meta charset="utf-8">
   <title>Vehicules</title>
 </head>
 <body>
 <header>
    <h2>NOS DIFFERENTES VOITURES</h2>
  </header>
  <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="#"><i class="fa-solid fa-shop me-2"></i> <strong>AUTOCARS</strong></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
        </div>
      </div>
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <div class="ms-auto d-none d-lg-block">
        </div>
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase active" aria-current="page" href="Offres.html">OFFRES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase"  href="index.html">ACCUEIL</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="Contact.html">CONTACT</a>
          </li>
        </ul>
      </div>
      <div>
      <form action="rechercher.php" method="POST">
      <input type="text" name="recherche" id="recherche" placeholder="Entrez le nom ou le prix du produit">
        <button type="submit" name="submit">Search</button>
      </form>
    </div>
    </div>
  </nav>
  <?php
  if(isset($_POST['submit'])) {
    $recherche = $_POST['recherche'];

    require_once "ajax.php";
    // Recherche par nom

   ?>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

 <script>
     const url = "http://127.0.0.1:3000/produit/recherche/" + <?= json_encode($recherche) ?>;
     console.log(url); // Affiche l'URL complète




         async function fetchBy() {
         try {
         // Attendre la résolution de chaque promesse
         const data1 = await Get_ajax(url);


         // Convertir les données en chaînes JSON
         const data1String = JSON.stringify(data1);


         console.log("data1:", data1String);

         // Envoyer les données au serveur
         $.ajax({
         url: 'ecouteRerchercher.php', // URL du script PHP
         type: 'POST',
         data: {
         'produit': data1String,

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
    fetchBy();

 </script>

 <?php
  }
?>




<footer class="bg-light text-center text-white">
  <!-- Grid container -->
  <div class="container p-4 pb-0">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook --> 
      <a 
        class="btn text-white btn-floating m-1"
        style="background-color: #3b5998;" 
        href="https://web.facebook.com/?_rdc=1&_rdr"
        target="_blank" rel="noopener noreferrer"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #55acee;"
        href="https://twitter.com"
        target="_blank" rel="noopener noreferrer"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Youtube-->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #dd4b39;"
        href="https://www.youtube.com"
        target="_blank" rel="noopener noreferrer"
        role="button"
        ><i class="fab fa-youtube"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn text-white btn-floating m-1"
        style="background-color: #ac2bac;"
        href="https://www.instagram.com"
        target="_blank" rel="noopener noreferrer"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>
    </section>
    <!-- Section: Social media -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2024 Copyright:
    <a class="text-white" href="#">AUTOCARS</a>
  </div>
  <!-- Copyright -->
</footer>

<script src="../assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>

