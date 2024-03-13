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
const evenement_passerModel=require("./evenement_passerModel");


const Photo_evenement = sequelize.define('photo_evenement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    image: {
        type: DataTypes.STRING,

    },




},{
    tableName: 'photo_evenement', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Photo_evenement.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });
Photo_evenement.belongsTo(evenement_passerModel.evenement_passer, { foreignKey: 'id_evenement_passer' });



module.exports = {Photo_evenement,sequelize};


