

const express = require('express');
const router = express.Router();
const genareteToken_controller= require('../Controllers/genareteToken_controller');



function generateToken(){

    //route permettant de generer un token
    router.post('/:id',genareteToken_controller.generate_token);


    return router;
}

module.exports={generateToken}
