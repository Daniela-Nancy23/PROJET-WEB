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


const Boite_idee = sequelize.define('boite_idee', {
    id_idee: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nbr_vote: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idee: {
        type: DataTypes.STRING,
        allowNull: false
    },



},{
    tableName: 'boite_idee', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Boite_idee.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });


module.exports = {Boite_idee,sequelize};
