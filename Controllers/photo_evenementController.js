const photo_evenementModel = require('../models/photo_evenementModel');
const {photo_evenement} = require("../models/photo_evenementModel");


async function insert_photo_evenement(req,res) {
    const data = req.body; // Les données à insérer

    photo_evenementModel.Photo_evenement.create({
        id_evenement_passer: data.id_evenement_passer,
        id_etudiant: data.id_etudiant,
        image: data.image,
    })
        .then(book => {
            res.send(`ajout de la photo  reussie`);
        })
        .catch(error => {
            console.log("Erreur lors de l'ajout de la photo:', error");
        });



}




async function getAllphoto_evenement(req ,res) {


    const id = req.params.id

    try {
        const photo = await photo_evenementModel.Photo_evenement.findAll;
        if (photo) {

            res.json(photo);

        } else {
            res.send('pas de photo');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération des photos:', error);
        return null;
    }
}




async function deletePhoto_evenement(req,res){
    const id = req.params.id;
    const id_etudiant = req.params.id_etudiant;
    await like_evenementModel.Like_evenement.destroy({ where: { id: id , id_etudiant: id_etudiant} });
    res.send(`Votre photo a bien ete supprimer`);


}



module.exports={insert_photo_evenement,getAllphoto_evenement,deletePhoto_evenement};


