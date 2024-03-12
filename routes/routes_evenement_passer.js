const express = require('express');
const router = express.Router();
const evenement_passerController= require('../Controllers/evenement_passerController');



function evenement_passer(){

    //route permettant d'inserer  un evenement_passer dans la BD
    router.post('/insert',evenement_passerController.insert_evenement_passer);

    //route permettant de selectioner tout les evenement_passer dans la BD
    router.get('/all',evenement_passerController.getAllevenement_passer);


    //route permettant de supprimer un evenement_passer dans la BD
    router.delete('/:id',evenement_passerController.deleteEvenement_passer);

    //routes permettant de mettre ajour un evenement_passer dans la BD
    router.put('/date_debut/:id',evenement_passerController.update_dateDebut_evenement_passer);
    router.put('/date_fin/:id',evenement_passerController.update_dateFin_evenement_passer);



    return router;
}

module.exports={evenement_passer}
