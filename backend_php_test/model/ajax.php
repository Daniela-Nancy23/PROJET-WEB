<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>

async  function Post_ajax(dataToSend,url,token){


    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify({ data: dataToSend }),
        contentType: "application/json",
        headers: {
            "Authorization":token  // Ajoutez le token d'authentification dans l'en-tête
        },
        success: function(response) {
            console.log(response);
            console.log(dataToSend);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Erreur lors de l'envoi des données:", textStatus, errorThrown);
        }
    });
}


async function Get_ajax(url,token){

    try {
        const response = await $.ajax({
            type: "GET",
            url: url,
            contentType: "application/json",
            headers: {
                "Authorization":token  // Ajoutez le token d'authentification dans l'en-tête
            },
            success: function(response) {
                console.log(response);

            },
        });

        return response;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
}


async function Delete_ajax(dataToSend,url,token){

    "http://127.0.0.1:3000/like_evenement/2/lionelyouassa695@gmail.com"

    $.ajax({
        type: "DELETE",
        url: url,
        data: JSON.stringify({ data: dataToSend }),
        contentType: "application/json",
        headers: {
            "Authorization":token // Ajoutez le token d'authentification dans l'en-tête
        },
        success: function(response) {
            console.log(response);
            console.log(dataToSend);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Erreur lors de suppression des données:", textStatus, errorThrown);
        }
    });
}



async function Put_ajax(dataToSend,url,token){
    "http://127.0.0.1:3000/produit/nom/8"

    $.ajax({
        type: "PUT",
        url: url,
        data: JSON.stringify({ data: dataToSend }),
        contentType: "application/json",
        headers: {
            "Authorization":token  // Ajoutez le token d'authentification dans l'en-tête
        },
        success: function(response) {
            console.log(response);
            console.log(dataToSend);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Erreur lors de la mise ajour des données:", textStatus, errorThrown);
        }
    });
}


async function get_token (email){
    const token = await Get_ajax("http://127.0.0.1:3000/genere_token/" + email);
    return token;
}


</script>




