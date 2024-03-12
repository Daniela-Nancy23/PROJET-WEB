const express = require('express');
const router = express.Router();
const like_evenementController= require('../Controllers/like_evenementController');



function like_evenement(){

    //route permettant d'inserer  un evenement_passer dans la BD
    router.post('/insert',like_evenementController.insert_like);

    //route permettant de selectioner tout les evenement_passer dans la BD
    router.get('/:id',like_evenementController.getNbreLikeById);


    //route permettant de supprimer un evenement_passer dans la BD
    router.delete('/:id?:id_etudiant',like_evenementController.deleteLike_evenement);


    return router;
}

module.exports={like_evenement}
