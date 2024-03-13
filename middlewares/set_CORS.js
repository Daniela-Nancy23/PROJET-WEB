// Middleware pour définir les en-têtes CORS
function  set_CORS(req, res, next)  {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Autorise toutes les origines
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // Autorise les méthodes spécifiées
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Autorise les en-têtes spécifiés
    next();
}

module.exports={set_CORS};