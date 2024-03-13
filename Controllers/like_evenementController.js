const like_evenementModel = require('../models/like_evenementModel');
const {like_evenement} = require("../models/like_evenementModel");


async function insert_like(req,res) {
    const data = req.body; // Les données à insérer

    like_evenementModel.Like_evenement.create({
        id_evenement_passer: data.id_evenement_passer,
        id_etudiant: data.id_etudiant,
        liker: data.liker,
    })
        .then(book => {
            console.log(data.value);
            res.send(`like reussie`);
        })
        .catch(error => {
            console.log('Erreur lors de la validation du like:', error);
        });



}




async function getNbreLikeById(req ,res) {


    const id = req.params.id

    try {
        const nbr_like = await like_evenementModel.Like_evenement.count({
            where: {id_evenement_passer: id }
        });
        ;
        if (nbr_like) {

            res.json(nbr_like);

        } else {
            res.send('pas de like');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du nombre de like:', error);
        return null;
    }
}




async function deleteLike_evenement(req,res){
    const id = req.params.id;
    const id_etudiant = req.params.id_etudiant;
    await like_evenementModel.Like_evenement.destroy({ where: { id: id , id_etudiant: id_etudiant} });
    res.send(`Votre like a bien ete supprimer`);


}



module.exports={insert_like,getNbreLikeById,deleteLike_evenement};


