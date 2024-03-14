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

const ManifestationModel=require("./ManifestationModel");
const etudaintModel=require("./etudaintModel");


const Inscript_manifestation = sequelize.define('inscrit_manifestation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manifestationIdManifestation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    etudiantEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },


},{
    tableName: 'inscrit_manifestation', //  nom de la table
    // createdAt: false,
    // updatedAt: false

});


// Associations
etudaintModel.Etudiant.belongsToMany(ManifestationModel.Manifestation, { through: Inscript_manifestation });
ManifestationModel.Manifestation.belongsToMany(etudaintModel.Etudiant, { through: Inscript_manifestation });




module.exports = {Inscript_manifestation,sequelize};


