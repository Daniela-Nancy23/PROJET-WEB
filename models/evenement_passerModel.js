const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
    'projet_web',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const etudaintModel=require("./etudaintModel");
const ManifestationModel=require("./ManifestationModel");


const evenement_passer = sequelize.define('evenement_passer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date_debut: {
        type: DataTypes.DATE,

    },
    date_fin: {
        type: DataTypes.DATE,

    },



},{
    tableName: 'evenement_passer', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

evenement_passer.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });
evenement_passer.belongsTo(ManifestationModel.Manifestation, { foreignKey: 'id_manifestation' });



module.exports = {evenement_passer,sequelize};


