<?php

global $etudiants, $membresBDE,$salariesCESI,$email,$motDePasse;

session_start(); // Assurez-vous d'appeler session_start() au début de votre script PHP

if (isset($_POST['token'])) {
    $_SESSION['token'] = $_POST['token']; // Définissez la variable de session
}



if (isset($_POST['valider'])){
    if (!empty($_POST['email']) AND !empty($_POST['password'])){
        $email=htmlspecialchars($_POST['email']);
        $password=sha1($_POST['password']);
        

        }else{
        $message="Remplissez tous les champs";
    }
}



require_once "../model/ajax.php";
   // $email = $_POST['email'];
    //'lionelyouassa595@gmail.com';
  //  $motDePasse =$_POST['password'];

?>
<div id="notif_success">

</div>


    <script>
        const url1 = "http://127.0.0.1:3000/menbreBDE/all";
        const url2 = "http://127.0.0.1:3000/salarierCESI/all";
        const url3 = "http://127.0.0.1:3000/etudiant/all";
        // Convertir les données en chaînes JSON
        const email=<?= json_encode($email) ?>;
        const password=<?= json_encode($motDePasse) ?>;

        async function fetchDatamenbreBDE() {
            try {
                // Attendre la résolution de chaque promesse
                const data1 = await Get_ajax(url1);
                return data1;

            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        async function fetchDataSalarieCesi() {
            try {
                // Attendre la résolution de chaque promesse
                const data2 = await Get_ajax(url2);
                return data2;

            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }

        async function fetchDataEtudiant() {
            try {
                // Attendre la résolution de chaque promesse
                const data3 = await Get_ajax(url3);
                return data3;

            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }
        fetchDatamenbreBDE().then(data1=>{
            data1.map((menbreBDE)=>{
                if(menbreBDE.email == email && menbreBDE.motDePasse ==password){
                    <?php $_SESSION['id']=$email ;$_SESSION['statut']="menbreBDE" ?>
                  const notif  =document.querySelector("#notif_success");
                  notif.innerHTML += `<br>
                        <div class="alert alert-success" role="alert">
                                   Connexion reussi !!  menbreBDE
                         </div>`;

                    get_token(<?= json_encode($email) ?>);
                  ///  window.location.replace('../view/boutique_admin.php');

                    console.log("connexion reussie");



                }
            })
        });

        fetchDataSalarieCesi().then(data2=>{
            data2.map((SalarieCesi)=>{
                console.log(email);
                if(SalarieCesi.email == email && SalarieCesi.motDePasse ==password){
                    <?php $_SESSION['id']=$email ;$_SESSION['statut']="SalarieCesi" ?>
                    const notif  =document.querySelector("#notif_success");
                    notif.innerHTML += `
                        <div class="alert alert-success" role="alert">
                                   Connexion reussi !! SalarieCesi
                         </div>`;
                    //window.location.replace('../view/connexion.php');


                    console.log("connexion reussie");
                }
        })});


        fetchDataEtudiant().then(data3=>{
            data3.map((Etudiant)=>{
                if(Etudiant.email == email && Etudiant.motDePasse ==password){
                    <?php $_SESSION['id']=$email ;
                          $_SESSION['statut']="Etudiant";
                    ?>
                    const notif  =document.querySelector("#notif_success");
                    notif.innerHTML += `<br>
                        <div class="alert alert-success" role="alert">
                                   Connexion reussi !! Etudiant
                         </div>`;

                   // window.location.replace('../view/connexion.php');

                    console.log("connexion reussie")


                }
        })})





    </script>




