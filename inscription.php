<?php
$connexion=new PDO('mysql:host=localhost;dbname=users_base1;charset=utf8', 'root', '');

if(isset($_POST['valider']))
{
    if (!empty($_POST['nom']) AND !empty($_POST['prenom']) AND !empty($_POST['email']) AND !empty($_POST['password']) AND !empty($_POST['adresse'])){

        $nom=htmlspecialchars($_POST['nom']);
        $prenom=htmlspecialchars($_POST['prenom']);
        $email=htmlspecialchars($_POST['email']);
        $mdp=sha1($_POST['password']);
        $adresse=htmlspecialchars($_POST['adresse']);

        if(strlen($_POST['password'])<7 || !preg_match('/[A-Z]/', $mdp) || !preg_match('/[0-9]/', $mdp)){
            $message="Votre mot de passe doit contenir au moins 7 caractères, une majuscule et un chiffre.";

        }elseif(strlen($nom)>25 || strlen($prenom)>50 || strlen($adresse)>25 || preg_match('/[^A-Za-z]/', $nom) || preg_match('/[^A-Za-z]/', $prenom) ){
            $message="Votre nom ou prénom est trop long";
        }else{

            $testmail=$connexion->prepare("SELECT * FROM users where email=?");
            $testmail->execute(array($email));
            $controlmail=$testmail->rowCount();
            if($controlmail==0){
                $insertion= $connexion->prepare("INSERT INTO users(nom, prenom,email, password,adresse) VALUES (?,?,?,?,?)");
                $insertion->execute(array($nom,$prenom,$email,$mdp));
                $message="Votre compte a bien été crée";

            }else{
                $message= 'Désolé mais cette adresse a déjà un compte';
            }
           
        }

    }else{
        $message="Remplissez tous les champs.";
    }
}
?>






<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://fonts.googleapis.com/css?family=Antic&display=swap"
            rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Angkor&display=swap"
            rel="stylesheet" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous">
        <link href="inscription.css" rel="stylesheet" />
        <title>BDE-Inscription</title>
    </head>
    <body>
        <h1 class="inscription"><svg width="92" height="78"
                viewBox="0 0 92 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M22.9999 65C20.8916 65 19.0867 64.3635 17.5853 63.0906C16.0839 61.8177 15.3333 60.2875 15.3333 58.5C15.3333 56.7125 16.0839 55.1823 17.5853 53.9094C19.0867 52.6365 20.8916 52 22.9999 52C25.1083 52 26.9131 52.6365 28.4145 53.9094C29.9159 55.1823 30.6666 56.7125 30.6666 58.5C30.6666 60.2875 29.9159 61.8177 28.4145 63.0906C26.9131 64.3635 25.1083 65 22.9999 65ZM22.9999 45.5C20.8916 45.5 19.0867 44.8635 17.5853 43.5906C16.0839 42.3177 15.3333 40.7875 15.3333 39C15.3333 37.2125 16.0839 35.6823 17.5853 34.4094C19.0867 33.1365 20.8916 32.5 22.9999 32.5C25.1083 32.5 26.9131 33.1365 28.4145 34.4094C29.9159 35.6823 30.6666 37.2125 30.6666 39C30.6666 40.7875 29.9159 42.3177 28.4145 43.5906C26.9131 44.8635 25.1083 45.5 22.9999 45.5ZM22.9999 26C20.8916 26 19.0867 25.3635 17.5853 24.0906C16.0839 22.8177 15.3333 21.2875 15.3333 19.5C15.3333 17.7125 16.0839 16.1823 17.5853 14.9094C19.0867 13.6365 20.8916 13 22.9999 13C25.1083 13 26.9131 13.6365 28.4145 14.9094C29.9159 16.1823 30.6666 17.7125 30.6666 19.5C30.6666 21.2875 29.9159 22.8177 28.4145 24.0906C26.9131 25.3635 25.1083 26 22.9999 26ZM45.9999 26C43.8916 26 42.0867 25.3635 40.5853 24.0906C39.0839 22.8177 38.3333 21.2875 38.3333 19.5C38.3333 17.7125 39.0839 16.1823 40.5853 14.9094C42.0867 13.6365 43.8916 13 45.9999 13C48.1083 13 49.9131 13.6365 51.4145 14.9094C52.9159 16.1823 53.6666 17.7125 53.6666 19.5C53.6666 21.2875 52.9159 22.8177 51.4145 24.0906C49.9131 25.3635 48.1083 26 45.9999 26ZM68.9999 26C66.8916 26 65.0867 25.3635 63.5853 24.0906C62.0839 22.8177 61.3333 21.2875 61.3333 19.5C61.3333 17.7125 62.0839 16.1823 63.5853 14.9094C65.0867 13.6365 66.8916 13 68.9999 13C71.1083 13 72.9131 13.6365 74.4145 14.9094C75.9159 16.1823 76.6666 17.7125 76.6666 19.5C76.6666 21.2875 75.9159 22.8177 74.4145 24.0906C72.9131 25.3635 71.1083 26 68.9999 26ZM45.9999 45.5C43.8916 45.5 42.0867 44.8635 40.5853 43.5906C39.0839 42.3177 38.3333 40.7875 38.3333 39C38.3333 37.2125 39.0839 35.6823 40.5853 34.4094C42.0867 33.1365 43.8916 32.5 45.9999 32.5C48.1083 32.5 49.9131 33.1365 51.4145 34.4094C52.9159 35.6823 53.6666 37.2125 53.6666 39C53.6666 40.7875 52.9159 42.3177 51.4145 43.5906C49.9131 44.8635 48.1083 45.5 45.9999 45.5ZM49.8333 65V55.0062L71.0124 37.1312C71.5874 36.6437 72.2263 36.2917 72.9291 36.075C73.6319 35.8583 74.3346 35.75 75.0374 35.75C75.8041 35.75 76.5388 35.8719 77.2416 36.1156C77.9444 36.3594 78.5833 36.725 79.1583 37.2125L82.7041 40.2187C83.2152 40.7062 83.6145 41.2479 83.902 41.8437C84.1895 42.4396 84.3333 43.0354 84.3333 43.6312C84.3333 44.2271 84.2055 44.8365 83.9499 45.4594C83.6944 46.0823 83.2791 46.6375 82.7041 47.125L61.6208 65H49.8333ZM55.5833 60.125H59.2249L70.8208 50.2125L69.0958 48.6687L67.2749 47.2062L55.5833 57.0375V60.125ZM69.0958 48.6687L67.2749 47.2062L70.8208 50.2125L69.0958 48.6687Z"
                    fill="#FFAA04" />
            </svg>Inscription</h1>
        <div class="container-image">
            <img src="images/user.svg" alt="user">
            <div class="container">
                <form action method="post" id="inscription-form">
                    <div class="insert">
                        <label for="nom">Nom :</label>
                        <input type="text" id="nom" name="nom"
                            placeholder="entrer votre nom" required autofocus>
                    </div>
                    <div class="insert">
                        <label for="prenom">Prenom :</label>
                        <input type="text" id="prenom" name="prenom"
                            placeholder="entrer votre prenom" required>
                    </div>
                    <div class="insert">
                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email"
                            placeholder="entrer votre email" required>
                    </div>
                    <div class="insert">
                        <label for="password">Mot de passe :</label>
                        <input type="password" id="password" name="password"
                            placeholder="entrer votre mot de passe" required>
                    </div>
                    <div class="insert">
                        <label for="adresse">Localisation :</label>
                        <input type="text" id="adresse" name="adresse"
                            placeholder="entrer votre localisation" required>
                    </div>
                    <?php
                      if (isset($message) && !empty($message)) {
                       echo '<p style="color: red;">' . $message . '</p>';
                      }
                    ?>

                    <div class="insert">
                        Voir <a href>les Mentions légales</a>
                    </div>
                    <div class="mb-3 form-check" class="insert">
                        <input class="custom-checkbox" type="checkbox"
                            id="accepter">
                        <label class="form-check-label" for="accepter">J'accepte
                            les conditions et les termes</label>
                    </div>

                    <div class="button">
                        <button id="submit-btn" class="submit" type="submit" name="valider">
                            S'inscrire</button>
                    </form>
                </div>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"></script>
            <script src="inscription.js"></script>
            <!-- Inclure le fichier JavaScript externe -->
        </body>
    </html>