const express = require('express');
const router = express.Router();
const menbreBDEController= require('../Controllers/menbreBDEController');



function menbreBDE(){

    //route permettant d'inserer  un menbreBDE dans la BD
    router.post('/insert',menbreBDEController.insert_menbreBDE);

    //route permettant de selectioner tout les menbreBDE dans la BD
    router.get('/all',menbreBDEController.getALLMenbreBDE);


    //route permettant de selectioner un menbreBDE dans la BD
    router.get('/:id',menbreBDEController.getMenbreBDEById);




    return router;
}

module.exports={menbreBDE}
