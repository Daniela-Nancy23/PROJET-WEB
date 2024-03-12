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

const menbreBDEModel=require("menbreBDEModel");

const Categorie = sequelize.define('categorie', {
    id_categorie: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },


},{
    tableName: 'categorie', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Categorie.belongsTo(menbreBDEModel.menbreBDE, { foreignKey: 'id_menbreBDE' });


module.exports = {Categorie,sequelize};

