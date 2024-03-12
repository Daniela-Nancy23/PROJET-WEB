const evenement_passerModel = require('../models/evenement_passerModel');
const {evenement_passer} = require("../models/evenement_passerModel");


async function insert_evenement_passer(req,res) {
    const data = req.body; // Les données à insérer

    evenement_passerModel.evenement_passer.create({
        id_manifestation:data.id_manifestation,
        id_etudiant:data.id_etudiant,
        date_debut: data.date_debut,
        date_fin: data.date_fin,
    })
        .then(book => {
            console.log('evenement_passer créé avec succès:', evenement_passer);
            res.send(`evenement_passer inserer avec success`);
        })
        .catch(error => {
            console.log('Erreur lors de la création de evenement_passer:', error);
        });



}




async function getAllevenement_passer(req ,res) {
    try {
        const evenement_passer = await evenement_passerModel.evenement_passer.findAll({
            order: [['id', 'DESC']],

        });
        if (evenement_passer) {
            res.json(evenement_passer);

        } else {
            res.send('evenement_passer non trouvé');
            return null;
        }
    } catch (error) {
        console.log('Erreur lors de la récupération de la evenement_passer:', error);
        return null;
    }
}




async function deleteEvenement_passer(req,res){
    const id = req.params.id;
    await evenement_passerModel.evenement_passer.destroy({ where: { id: id } });
    res.send(`Votre evenement_passer a bien ete supprimer`);


}


async function update_dateDebut_evenement_passer(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        dateDebut: data.dateDebut
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre evenement_passer a ete mis à jour: ${id}`);


}


async function update_dateFin_evenement_passer(req,res){
    const id = req.params.id;
    const data = req.body; // Les données à insérer

    await Manifestation.update({
        dateFin: data.dateFin
    }, {
        where: {
            id_manifestation: id
        }
    });
    res.send(`votre evenement_passer a ete mis à jour: ${id}`);


}






module.exports={insert_evenement_passer,getAllevenement_passer,deleteEvenement_passer,update_dateDebut_evenement_passer,
    update_dateFin_evenement_passer};


