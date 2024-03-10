const express = require('express');
const router = express.Router();
const ManifestationController= require('../Controllers/ManifestationController');



function manifestation(){

    //route permettant d'inserer  un produit dans la BD
    router.post('/insert',ManifestationController.insert_Manifestation);

    //route permettant de selectioner un produit dans la BD
    router.get('/:id',ManifestationController.getManifestationById);

    //route permettant de supprimer un produit dans la BD
    router.delete('/:id',ManifestationController.deleteManifestation);

    //routes permettant de mettre ajour un produit dans la BD
    router.put('/nom/:id',ManifestationController.update_nom_Manifestation);
    router.put('/description/:id',ManifestationController.update_description_Manifestation);
    router.put('/payant/:id',ManifestationController.update_payant_Manifestation);
    router.put('/recurrente/:id',ManifestationController.update_recurrente_Manifestation);
    router.put('/image/:id',ManifestationController.update_image_Manifestation);
    router.put('/date_debut/:id',ManifestationController.update_dateDebut_Manifestation);
    router.put('/date_fin/:id',ManifestationController.update_dateFin_Manifestation);



    return router;
}

module.exports={manifestation}
