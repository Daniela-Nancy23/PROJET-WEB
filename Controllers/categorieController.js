const categorieModel = require('../models/categorieModel');
const {Categorie} = require("../models/categorieModel");


 async function insert_categorie(req,res) {
     const data = req.body; // Les données à insérer

     produitModel.Produit.create({
            nom: data.nom,
            id_menbreBDE: data.id_menbreBDE,


        })
            .then(book => {
                console.log('Categorie créé avec succès:', Produit);
                res.send(`Categorie inserer avec success`);
            })
            .catch(error => {
                console.log('Erreur lors de la création de la Categorie:', error);
            });



    }





async function getAllCategorie(req ,res) {



    try {
        const categorie = await produitModel.Categorie.findAll({
            order: [['nom', 'DESC']],

        });
        if (categorie) {
            res.json(categorie);
       } else {
           res.send('Categorie non trouvé');
           return null;
       }
    } catch (error) {
        console.log('Erreur lors de la récupération de Categorie:', error);
        return null;
    }
}


async function deleteCategorie(req,res){
    const id = req.params.id;
    await produitModel.Produit.destroy({ where: { id_categorie: id } });
    res.send(`Votre Categorie a bien ete supprimer`);


}

async function update_nom_categorie(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

     await Produit.update({
        nom: data.nom,
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`votre produit a ete mis à jour: ${id}`);

}




module.exports={insert_categorie,getAllCategorie,deleteCategorie,update_nom_categorie};

