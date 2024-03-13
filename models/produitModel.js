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

const menbreBDEModel=require("./menbreBDEModel");


const Produit = sequelize.define('produit', {
    id_produit: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categorie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,

    },


},{
    tableName: 'produit', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Produit.belongsTo(menbreBDEModel.menbreBDE, { foreignKey: 'id_menbreBDE' });


module.exports = {Produit,sequelize};

