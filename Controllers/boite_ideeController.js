const boite_ideeModel = require('../models/boite_ideeModel');
const {boite_idee} = require("../models/boite_ideeModel");


 async function insert_idee(req,res) {
     const data = req.body; // Les données à insérer

     boite_ideeModel.Boite_idee.create({
            id_etudiant: data.id_etudiant,
            nbr_vote: data.nbr_vote,
            idee: data.idee

        })
            .then(book => {
                console.log(' votre idee a ete ajouter avec succès:', Produit);
                res.send(`Idee inserer avec success`);
            })
            .catch(error => {
                console.log("Erreur lors de l'ajout de l'idee:", error);
            });

    }





async function getAllIdee(req ,res) {



    try {
        const idees = await boite_ideeModel.Boite_idee.findAll({
            order: [['idee', 'DESC']],

        });
        if (idees) {
            res.json(idees);
       } else {
           res.send('Idees non trouvé');
           return null;
       }
    } catch (error) {
        console.log('Erreur lors de la récupération des Idee:', error);
        return null;
    }
}


async function deleteIdee(req,res){
    const id = req.params.id;
    await boite_ideeModel.Boite_idee.destroy({ where: { id_idee: id } });
    res.send(`Votre idee a bien ete supprimer`);


}





module.exports={insert_idee,getAllIdee,deleteIdee};

