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


const Manifestation = sequelize.define('manifestation', {
    id_manifestation: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    id_menbreBDE: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
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

module.exports = {Manifestation,sequelize};

module.exports = {Manifestation,sequelize};

