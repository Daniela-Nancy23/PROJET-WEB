const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json()); // pour les requêtes JSON
const produitModel = require("./models/produitModel");
const routes_produit=require("./routes/routes_produit");
const routes_etudiant=require("./routes/routes_etudiant");
const routes_menbreBDE=require("./routes/route_menbreBDE");
const routes_salarierCESI=require("./routes/routes_salarierCESI");
const routes_manifestion=require("./routes/routes_manifestion");
const routes_categorie=require("./routes/routes_categorie");
const routes_boite_idees=require("./routes/routes_boite_idees");
const routes_commande=require("./routes/routes_commande");
const routes_evenement_passer=require("./routes/routes_evenement_passer");


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
   // res.end(JSON.stringify({ a: 1},null,3));
});




//synchronisation avec la BD
produitModel.sequelize.sync({ force: false })
    .then(() => {
        console.log('La base de données a été synchronisée avec succès.');
    })
    .catch(error => {
        console.error('Erreur lors de la synchronisation de la base de données:', error);
    });


//route produit
app.use("/produit",routes_produit.produit());

//route etudiant
app.use("/etudiant",routes_etudiant.etudiant());

//route menbreBDE
app.use("/menbreBDE",routes_menbreBDE.menbreBDE());

// route salarierCESI
app.use("/salarierCESI",routes_salarierCESI.salarierCESI());

//route manifestation
app.use("/manifestion",routes_manifestion.manifestation());

//route categorie
app.use("/categorie",routes_categorie.Categorie());

//route idee
app.use("/idee",routes_boite_idees.boite_idee());

//route commande
app.use("/idee",routes_commande.commande());

//route evenement_passer
app.use("/evenement_passer",routes_evenement_passer.evenement_passer());

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
