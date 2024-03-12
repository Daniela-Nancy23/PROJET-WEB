const commandeModel = require('../models/commandeModel');
const {commande} = require("../models/commandeModel");


 async function insert_Commande(req,res) {
     const data = req.body; // Les données à insérer

     commandeModel.Commande.create({
            id_etudiant: data.id_etudiant,
            id_produit: data.id_produit,
            nom: data.nom,
        })
            .then(book => {
                console.log(' votre Commande a ete ajouter avec succès:', Produit);
                res.send(`Commande inserer avec success`);
            })
            .catch(error => {
                console.log("Erreur lors de l'ajout de la Commande:", error);
            });

    }





async function getAllICommande(req ,res) {



    try {
        const idees = await commandeModel.Commande.findAll({
            order: [['nom', 'DESC']],

        });
        if (idees) {
            res.json(idees);
       } else {
           res.send('Commandes non trouvé');
           return null;
       }
    } catch (error) {
        console.log('Erreur lors de la récupération des Commandes:', error);
        return null;
    }
}


async function deleteCommande(req,res){
    const id = req.params.id;
    await commandeModel.Commande.destroy({ where: { 	id_commande: id } });
    res.send(`Votre Commande a bien ete supprimer`);


}





module.exports={insert_Commande,getAllICommande,deleteCommande};

