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

const ManifestationModel=require("./ManifestationModel");


const evenement_passer = sequelize.define('evenement_passer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_manifestation: {
        type: DataTypes.INTEGER,
        allowNull: false,

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

ManifestationModel.Manifestation.hasMany(evenement_passer, { foreignKey: 'id_manifestation' });
evenement_passer.belongsTo(ManifestationModel.Manifestation, { foreignKey: 'id_manifestation' });



module.exports = {evenement_passer,sequelize};


