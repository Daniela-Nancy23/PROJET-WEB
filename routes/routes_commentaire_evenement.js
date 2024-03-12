const express = require('express');
const router = express.Router();
const commentaire_evenementController= require('../Controllers/commentaire_evenementController');



function commentaire_evenement(){

    //route permettant d'inserer  une photo_evenement_passer dans la BD
    router.post('/insert',commentaire_evenementController.insert_commentaire_evenement);

    //route permettant de selectioner tout les photo_evenement_passer dans la BD
    router.get('/all',commentaire_evenementController.getAllcommentaire_evenement);




    return router;
}

module.exports={commentaire_evenement}
