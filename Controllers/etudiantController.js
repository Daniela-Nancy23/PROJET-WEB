const etudiantModel = require('../models/etudaintModel');
const {Etudiant} = require("../models/etudaintModel");


async function insert_etudiant(req,res) {
    const data = req.body; // Les données à insérer

    etudiantModel.Etudiant.create({
        email: data.email,
        nom: data.nom,
        prenom: data.prenom,
        localisation: data.localisation,
        motDePasse: data.password
    })
        .then(book => {
            console.log('Etudiant ajouter avec succès:', Etudiant);
            res.send(`Etudiant inserer avec success`);
        })
        .catch(error => {
            console.log('Erreur lors de la création de l Etudiant:', error);
        });



}


async function getEtudiantById(req ,res) {


    const id = req.params.id

    try {
        const Etudian = await etudiantModel.Etudiant.findByPk(id);
        if (Etudian) {
            const etudaint = Etudian.dataValues; // Accéder aux valeurs de données de etudaint
            res.json(etudaint);

        } else {
            res.send('etudaint non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération de l etudaint:', error);
        return null;
    }
}











module.exports={insert_etudiant,getEtudiantById};
module.exports={insert_etudiant,getEtudiantById};
