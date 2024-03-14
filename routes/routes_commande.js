const express = require('express');
const router = express.Router();
const commandeController= require('../Controllers/commandeController');



function commande(){

    //route permettant d'inserer  une commande dans la BD
    router.post('/insert',commandeController.insert_Commande);

    //route permettant de selectioner tout les  commande dans la BD
    router.get('/all',commandeController.getAllICommande);
    //route permettant de recupper les produits plus commander dans la BD
    router.get('/plus_commander',commandeController.getCommandeReccurente);

    //route permettant de selectioner tout les  commande d'un etudiant dans la BD
    router.get('/:id',commandeController.getCommandeByUser);

    //route permettant de supprimer une commande dans la BD
    router.delete('/:id',commandeController.deleteCommande);







    return router;
}

module.exports={commande}
