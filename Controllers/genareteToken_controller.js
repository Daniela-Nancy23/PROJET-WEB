
async function generate_token(req,res){
        const  user_id = req.params.id
        const jwt = require('jsonwebtoken');
        const secret = 'groupe1';
        const token = await jwt.sign({ id: user_id }, secret, { expiresIn: 86400 }); // Token expire en 24 heures
        res.send(token);
}

module.exports={generate_token};