const produitModel = require('../models/produitModel');
const {Produit} = require("../models/produitModel");


 async function insert_produit(req,res) {
     const data = req.body; // Les données à insérer

     produitModel.Produit.create({
            nom: data.nom,
            description: data.description,
            prix: data.prix,
            categorie: data.categorie,
            image: data.image

        })
            .then(book => {
                console.log('Produit créé avec succès:', Produit);
                res.send(`produit inserer avec success`);
            })
            .catch(error => {
                console.log('Erreur lors de la création du Produit:', error);
            });



    }


async function getProductById(req ,res) {


    const id = req.params.id

    try {
        const Product = await produitModel.Produit.findByPk(id);
        if (Product) {
            const produit = Product.dataValues; // Accéder aux valeurs de données du produit
            res.json(produit);

        } else {
            res.send('Produit non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération du produit:', error);
        return null;
    }
}


async function getAllProduct(req ,res) {



    try {
        const Product = await produitModel.Produit.findAll({
            order: [['nom', 'DESC']],

        });
        if (Product) {
            res.json(Product);
       } else {
           res.send('Produit non trouvé');
           return null;
       }
    } catch (error) {
        console.log('Erreur lors de la récupération du produit:', error);
        return null;
    }
}


async function deleteproduit(req,res){
    const id = req.params.id;
    await produitModel.Produit.destroy({ where: { id_produit: id } });
    res.send(`Votre produit a bien ete supprimer`);


}

async function update_nom_produit(req,res){
    const id = req.params.id;
    const data = req.body.data; // Les données à insérer
        console.log(data.nom);
     await Produit.update({
        nom: data.nom,
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`Le nom de votre produit a ete mis à jour: ${id}`);

}

async function update_description_produit(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Produit.update({
        description: data.description,
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`votre produit a ete mis à jour: ${id}`);


}

async function update_prix_produit(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Produit.update({
        prix: data.prix,
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`votre produit a ete mis à jour: ${id}`);


}

async function update_categorie_produit(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Produit.update({
        categorie: data.categorie
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`votre produit a ete mis à jour: ${id}`);


}


async function update_image_produit(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Produit.update({
        image: data.image
    }, {
        where: {
            id_produit: id
        }
    });
    res.send(`votre produit a ete mis à jour: ${id}`);


}



module.exports={insert_produit,getProductById,deleteproduit,update_nom_produit,
    update_description_produit,update_prix_produit,
    update_categorie_produit,update_image_produit,getAllProduct};

