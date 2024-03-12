const express = require('express');
const router = express.Router();
const photo_evenementController= require('../Controllers/photo_evenementController');



function photo_evenement(){

    //route permettant d'inserer  une photo_evenement_passer dans la BD
    router.post('/insert',photo_evenementController.insert_photo_evenement);

    //route permettant de selectioner tout les photo_evenement_passer dans la BD
    router.get('/all',photo_evenementController.getAllphoto_evenement);


    //route permettant de supprimer une photo_evenement_passer dans la BD
    router.delete('/:id?:id_etudiant',photo_evenementController.deletePhoto_evenement);


    return router;
}

module.exports={photo_evenement}
