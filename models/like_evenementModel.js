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


const Like_evenement = sequelize.define('like_evenement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    liker: {
        type: DataTypes.BOOLEAN,

    },




},{
    tableName: 'like_evenement', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Like_evenement.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });
Like_evenement.belongsTo(evenement_passerModel.evenement_passer, { foreignKey: 'id_evenement_passer' });



module.exports = {Like_evenement,sequelize};


