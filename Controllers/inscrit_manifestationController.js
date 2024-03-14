const Inscript_manifestationModels = require('../models/Inscript_manifestationModels');
const {inscript_manifestation} = require("../models/Inscript_manifestationModels");
const etudaintModel = require("../models/etudaintModel")
const ManifestationModel = require("../models/ManifestationModel")


async function insert_inscript_manifestation(req,res) {
    const data = req.body; // Les données à insérer

    Inscript_manifestationModels.Inscript_manifestation.create({

        id_manifestation:data.id_manifestation,
        id_etudiant: data.id_etudiant,


    })
        .then(book => {
            console.log('inscription reussie avec succès:',inscript_manifestation);
            res.send(`inscription reussie avec success`);
        })
        .catch(error => {
            console.log("Erreur lors de l'inscription de la manifestation:", error);
        });



}


async function getInscrit_manifestationById(req ,res) {


    const id = req.params.id

    try {
            const inscript_manifestation = await ManifestationModel.Manifestation.findAll({
            where: { id_manifestation: id }, // Remplacez manifestationId par l'ID de la manifestation spécifique
            include: [{
                model: etudaintModel.Etudiant,
                through: { attributes: [] } // Exclure les attributs de la table d'association
            }],
            //subQuery: false
        });
        if (inscript_manifestation) {
            res.json(inscript_manifestation);

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




module.exports={getInscrit_manifestationById,insert_inscript_manifestation};


