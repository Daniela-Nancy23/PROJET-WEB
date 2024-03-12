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

const etudaintModel=require("etudaintModel");
const evenement_passerModel=require("evenement_passerModel");


const Commentaire_evenement = sequelize.define('commentaire_evenement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    commentaire: {
        type: DataTypes.STRING,

    },




},{
    tableName: 'commentaire_evenement', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Commentaire_evenement.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });
Commentaire_evenement.belongsTo(evenement_passerModel.evenement_passer, { foreignKey: 'id_evenement_passer' });



module.exports = {Commentaire_evenement,sequelize};


