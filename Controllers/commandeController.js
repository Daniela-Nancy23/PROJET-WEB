const commandeModel = require('../models/commandeModel');
const {commande} = require("../models/commandeModel");
const produitModel = require("../models/produitModel");


 async function insert_Commande(req,res) {
     const data = req.body; // Les données à insérer

     commandeModel.Commande.create({
            id_etudiant: data.id_etudiant,
            id_produit: data.id_produit,
            nom: data.nom,
        })
            .then(book => {
                console.log(' votre Commande a ete ajouter avec succès:', commande);
                res.send(`Commande inserer avec success`);
            })
            .catch(error => {
                console.log("Erreur lors de l'ajout de la Commande:", error);
            });

    }





async function getAllICommande(req ,res) {



    try {
        const commande = await commandeModel.Commande.findAll({
            order: [['nom', 'DESC']],

        });

        if (commande) {
            res.json(commande);
       } else {
           res.send('Commandes non trouvé');
           return null;
       }
    } catch (error) {
        console.log('Erreur lors de la récupération des Commandes:', error);
        return null;
    }
}


async function getCommandeByUser(req ,res) {


    const id = req.params.id

    try {
        const Commande = await commandeModel.Commande.findAll({
            where: { id_etudiant: id}, // Remplacez idClient par l'ID du client spécifique
            include: [{
                model:produitModel.Produit,

            }]
        });
        if (Commande) {

            res.json(Commande);

        } else {
            res.send('Produit non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du produit:', error);
        return null;
    }
}


async function getCommandeReccurente(req ,res) {



    try {
        const Commande = await commandeModel.Commande.findAll({
            attributes: ['id_commande', 'createdAt', 'id_etudiant', [sequelize.fn('COUNT', sequelize.col('id_commande')), 'frequency']],
            group: ['id_commande', 'createdAt', 'id_etudiant'],
            order: [[sequelize.fn('COUNT', sequelize.col('id_commande')), 'DESC']],
            limit: 3
        });
        if (Commande) {
            res.json(Commande);
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





module.exports={insert_Commande,getAllICommande,deleteCommande,getCommandeReccurente,getCommandeByUser};
