const commentaire_evenementModel = require('../models/commentaire_evenementModel');
const {commentaire_evenement} = require("../models/commentaire_evenementModel");


async function insert_commentaire_evenement(req,res) {
    const data = req.body; // Les données à insérer

    commentaire_evenementModel.Commentaire_evenement.create({
        id_evenement_passer: data.id_evenement_passer,
        id_etudiant: data.id_etudiant,
        commentaire: data.commentaire,
    })
        .then(book => {
            res.send(`ajout du commentaire  reussie`);
        })
        .catch(error => {
            console.log("Erreur lors de l'ajout du commentaire:', error");
        });



}




async function getAllcommentaire_evenement(req ,res) {


    const id = req.params.id

    try {
        const commentaire = await commentaire_evenementModel.Commentaire_evenement.findAll;
        if (commentaire) {

            res.json(commentaire);

        } else {
            res.send('pas de commentaire');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération des commentaires:', error);
        return null;
    }
}








module.exports={insert_commentaire_evenement,getAllcommentaire_evenement};


