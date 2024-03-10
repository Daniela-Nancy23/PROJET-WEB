const express = require('express');
const router = express.Router();
const produitcontroller= require('../Controllers/produitController');



function produit(){

    //route permettant d'inserer  un produit dans la BD
    router.post('/insert',produitcontroller.insert_produit);

    //route permettant de selectioner un produit dans la BD
    router.get('/:id',produitcontroller.getProductById);

    //route permettant de supprimer un produit dans la BD
    router.delete('/:id',produitcontroller.deleteproduit);

    //routes permettant de mettre ajour un produit dans la BD
        router.put('/nom/:id',produitcontroller.update_nom_produit);
        router.put('/description/:id',produitcontroller.update_description_produit);
        router.put('/prix/:id',produitcontroller.update_prix_produit);
        router.put('/categorie/:id',produitcontroller.update_categorie_produit);
        router.put('/image/:id',produitcontroller.update_image_produit);

    return router;
}

module.exports={produit}
module.exports={produit}