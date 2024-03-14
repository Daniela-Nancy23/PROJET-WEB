const express = require('express');
const router = express.Router();
const salarierCESIController= require('../Controllers/salarierCESIController');



function salarierCESI(){

    //route permettant d'inserer  un salarierCESI dans la BD
    router.post('/insert',salarierCESIController.insert_salarierCESI);

    //route permettant de selectioner tout les salarierCESI dans la BD
    router.get('/all',salarierCESIController.getAllSalarierCESI);


    //route permettant de selectioner un salarierCESI dans la BD
    router.get('/:id',salarierCESIController.getSalarierCESIById);





    return router;
}

module.exports={salarierCESI}