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
const produitModel=require("produitModel");


const Commande = sequelize.define('commande', {
    id_commande: {
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
    tableName: 'commande', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Commande.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });
Commande.belongsTo(produitModel.Produit, { foreignKey: 'id_produit' });



module.exports = {Commande,sequelize};

