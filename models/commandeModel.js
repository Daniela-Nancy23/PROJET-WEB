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
const produitModel=require("./produitModel");


const Commande = sequelize.define('commande', {
    id_commande: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_etudiant:{
        type: DataTypes.STRING,
        allowNull: false
    },
    id_produit:{
        type: DataTypes.INTEGER,
        allowNull: false
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

etudaintModel.Etudiant.hasMany(Commande, { foreignKey: 'id_etudiant' });
Commande.belongsTo(etudaintModel.Etudiant, { foreignKey: 'id_etudiant' });



produitModel.Produit.hasMany(Commande, { foreignKey: 'id_produit' });
Commande.belongsTo(produitModel.Produit, { foreignKey: 'id_produit' });




module.exports = {Commande,sequelize};

