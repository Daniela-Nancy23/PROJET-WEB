const express = require('express');
const router = express.Router();
const categorieController= require('../Controllers/categorieController');



function Categorie(){

    //route permettant d'inserer  un produit dans la BD
    router.post('/insert',categorieController.insert_categorie);

    //route permettant de selectioner tout les  produits dans la BD
    router.get('/all',categorieController.getAllCategorie);


    //route permettant de supprimer un produit dans la BD
    router.delete('/:id',categorieController.deleteCategorie);

    //routes permettant de mettre ajour un produit dans la BD
        router.put('/nom/:id',categorieController.update_nom_categorie);


    return router;
}

module.exports={Categorie}
