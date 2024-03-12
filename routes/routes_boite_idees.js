const express = require('express');
const router = express.Router();
const boite_ideeController= require('../Controllers/boite_ideeController');



function boite_idee(){

    //route permettant d'inserer  une idee dans la BD
    router.post('/insert',boite_ideeController.insert_idee);

    //route permettant de selectioner tout les  idees dans la BD
    router.get('/all',boite_ideeController.getAllIdee);

    //route permettant de supprimer une idee dans la BD
    router.delete('/:id',boite_ideeController.deleteIdee);



    return router;
}

module.exports={boite_idee}
