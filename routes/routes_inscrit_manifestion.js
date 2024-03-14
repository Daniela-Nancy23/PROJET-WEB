const express = require('express');
const router = express.Router();
const inscrit_manifestationController= require('../Controllers/inscrit_manifestationController');



function inscrit_manifestation(){

    //route permettant d'inserer  un produit dans la BD
    router.post('/insert',inscrit_manifestationController.insert_inscript_manifestation);

    //route permettant de selectioner un produit dans la BD
    router.get('/:id',inscrit_manifestationController.getInscrit_manifestationById);

    return router;

}

module.exports={inscrit_manifestation}
