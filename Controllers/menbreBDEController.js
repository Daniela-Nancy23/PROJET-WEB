const menbreBDEModel = require('../models/menbreBDEModel');
const {menbreBDE} = require("../models/menbreBDEModel");


async function insert_menbreBDE(req,res) {
    const data = req.body; // Les données à insérer

    menbreBDEModel.menbreBDE.create({
        email: data.email,
        nom: data.nom,
        prenom: data.prenom,
        localisation: data.localisation,
        motDePasse: data.password,
        image:data.imag,
        post:data.post
    })
        .then(book => {
            console.log('menbreBDE ajouter avec succès:', menbreBDE);
            res.send(`menbreBDE inserer avec success`);
        })
        .catch(error => {
            console.log('Erreur lors de la création du menbreBDE:', error);
        });



}


async function getMenbreBDEById(req ,res) {


    const id = req.params.id

    try {
        const menbrebde = await menbreBDEModel.menbreBDE.findByPk(id);
        if (menbrebde) {
            const menbreBde = menbrebde.dataValues; // Accéder aux valeurs de données de etudaint
            res.json(menbreBde);

        } else {
            res.send('menbreBDE non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du menbreBDE:', error);
        return null;
    }
}




async function getALLMenbreBDE(req ,res) {


    const id = req.params.id

    try {
        const menbrebde = await menbreBDEModel.menbreBDE.findAll({
            order: [['nom', 'DESC']],

        });
        if (menbrebde) {
            res.json(menbrebde);

        } else {
            res.send('menbreBDE non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du menbreBDE:', error);
        return null;
    }
}






module.exports={insert_menbreBDE,getMenbreBDEById,getALLMenbreBDE};
