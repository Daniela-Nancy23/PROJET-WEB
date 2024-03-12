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

const menbreBDE=require("menbreBDEModel");

const Manifestation = sequelize.define('manifestation', {
    id_manifestation: {
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
    payant: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    recurrente: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,

    },
    date_debut: {
        type: DataTypes.DATE,

    },
    date_fin: {
        type: DataTypes.DATE,

    },



},{
    tableName: 'manifestation', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});

Manifestation.belongsTo(menbreBDEModel.menbreBDE, { foreignKey: 'id_menbreBDE' });


module.exports = {Manifestation,sequelize};


