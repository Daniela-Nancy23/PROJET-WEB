const express = require('express');
const router = express.Router();
const etudiantcontroller= require('../Controllers/etudiantController');



function etudiant(){

    //route permettant d'inserer  un etudiant dans la BD
    router.post('/insert',etudiantcontroller.insert_etudiant);

    //route permettant de selectioner tout les etudiants dans la BD
    router.get('/all',etudiantcontroller.getALLEtudiant);

    //route permettant de selectioner un etudiant dans la BD
    router.get('/:id',etudiantcontroller.getEtudiantById);



    return router;
}

module.exports={etudiant}
