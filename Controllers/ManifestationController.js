const ManifestationModel = require('../models/ManifestationModel');
const {Manifestation} = require("../models/ManifestationModel");


async function insert_Manifestation(req,res) {
    const data = req.body; // Les données à insérer

    ManifestationModel.Manifestation.create({
        nom: data.nom,
        description: data.description,
        payant: data.payant,
        recurrente: data.recurrente,
        date_debut: data.date_debut,
        date_fin: data.date_fin,
        image: data.image

    })
        .then(book => {
            console.log('manifestation créé avec succès:', Manifestation);
            res.send(`manifestation inserer avec success`);
        })
        .catch(error => {
            console.log('Erreur lors de la création de la manifestation:', error);
        });



}


async function getManifestationById(req ,res) {


    const id = req.params.id

    try {
        const manifestation = await ManifestationModel.Manifestation.findByPk(id);
        if (manifestation) {
            const m_anifestation = manifestation.dataValues; // Accéder aux valeurs de données du produit
            res.json(m_anifestation);

        } else {
            res.send('manifestation non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération de la manifestation:', error);
        return null;
    }
}

async function deleteManifestation(req,res){
    const id = req.params.id;
    await ManifestationModel.Manifestation.destroy({ where: { id_manifestation: id } });
    res.send(`Votre manifestation a bien ete supprimer`);


}

async function update_nom_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        nom: data.nom,
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);

}

async function update_description_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        description: data.description,
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}

async function update_payant_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        payant: data.payant,
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}

async function update_recurrente_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        recurrente: data.recurrente
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}


async function update_dateDebut_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        dateDebut: data.dateDebut
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}


async function update_dateFin_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        dateFin: data.dateFin
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}


async function update_image_Manifestation(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        image: data.image
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre Manifestation a ete mis à jour: ${id}`);


}



module.exports={insert_Manifestation,getManifestationById,deleteManifestation,update_nom_Manifestation,
    update_description_Manifestation,update_payant_Manifestation,
    update_recurrente_Manifestation,update_dateDebut_Manifestation,update_dateFin_Manifestation,update_image_Manifestation};


module.exports={insert_Manifestation,getManifestationById,deleteManifestation,update_nom_Manifestation,
    update_description_Manifestation,update_payant_Manifestation,
    update_recurrente_Manifestation,update_dateDebut_Manifestation,update_dateFin_Manifestation,update_image_Manifestation};
