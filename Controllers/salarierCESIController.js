const salarierCESIModel = require('../models/salarierCESIModel');
const {salarierCESI} = require("../models/salarierCESIModel");


async function insert_salarierCESI(req,res) {
    const data = req.body; // Les données à insérer

    salarierCESIModel.salarierCESI.create({
        email: data.email,
        nom: data.nom,
        prenom: data.prenom,
        localisation: data.localisation,
        motDePasse: data.password
    })
        .then(book => {
            console.log('salarierCESI ajouter avec succès:', salarierCESI);
            res.send(`salarierCESI inserer avec success`);
        })
        .catch(error => {
            console.log('Erreur lors de la création du salarierCESI:', error);
        });



}


async function getSalarierCESIById(req ,res) {


    const id = req.params.id

    try {
        const salariercesi = await salarierCESIModel.salarierCESI.findByPk(id);
        if (salariercesi) {
            const salarierCesi = salariercesi.dataValues; // Accéder aux valeurs de données de etudaint
            res.json(salarierCesi);

        } else {
            res.send('salarierCESI non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du salarierCESI:', error);
        return null;
    }
}











module.exports={insert_salarierCESI,getSalarierCESIById};
module.exports={insert_salarierCESI,getSalarierCESIById};
