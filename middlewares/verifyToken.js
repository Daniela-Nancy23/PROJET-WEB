
const jwt = require('jsonwebtoken');

function verifyAuthToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (authHeader) {
        jwt.verify(authHeader, 'groupe1', (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Authentication failed! Please try again :(' });
            }
            req.userId = decoded.id;
            next();
        });
    } else {
        res.status(401).send({ message: 'Access-denied' });
    }
}

module.exports={verifyAuthToken}