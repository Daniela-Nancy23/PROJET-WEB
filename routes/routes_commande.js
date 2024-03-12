const express = require('express');
const router = express.Router();
const commandeController= require('../Controllers/commandeController');



function commande(){

    //route permettant d'inserer  une idee dans la BD
    router.post('/insert',commandeController.insert_Commande);

    //route permettant de selectioner tout les  idees dans la BD
    router.get('/all',commandeController.getAllICommande);

    //route permettant de supprimer une idee dans la BD
    router.delete('/:id',commandeController.deleteCommande);



    return router;
}

module.exports={commande}
