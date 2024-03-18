<?php
session_start();
$_SESSION['id']='lionelyouassa@gmail.com';
require_once "../model/ajax.php";
if(isset($_POST['valider']))
{
    if (!empty($_POST['title'])AND !empty($_POST['message'])){

        $idee = htmlspecialchars($_POST['message']);
        $title=htmlspecialchars($_POST['title']);



            $data = array(
                'id_etudiant'=>'felicia@gmail.com',
                'description' =>$idee,
                'titre' =>$title


            );



            ?>


            <script>
                const dataToSend = <?php echo json_encode($data); ?>;
                const url ="http://127.0.0.1:3000/idee/insert";
                //console.log(dataToSend);

                async function post_inscrit (url) {
                    await Post_ajax(dataToSend, url,'tt');

                }
                post_inscrit(url);
                window.location.href = "../view/Ideabox.php";



            </script>



            <?php



    }else{$message="Remplissez tous les champs.";
    }
}
?>


<script>
    async function fetchDataIdee(){

        try {
            const   url="http://127.0.0.1:3000/idee/all";
            // Attendre la résolution de chaque promesse
            const data = await Get_ajax(url,'toto');
            return data;

        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
        }

    }

    fetchDataIdee().then(data=>{
        data.map((idee)=>{
            const div=document.querySelector("#mydiv")
            div.innerHTML+=`  <div style="padding-left: 15px; padding-top: 15px">
                               <div class="container1">
                            <br>
                            <div><h5>${idee.titre}</h5></div>
                        <br>
                        <div style="font-weight: 600">
                            ${idee.description}

                    </div><br>
</div>`;


        })
    });

</script>




