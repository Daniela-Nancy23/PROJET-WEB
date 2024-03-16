import jwt from "jsonwebtoken";

function verifyAuthToken(req, res, next) {
    const authHeader = req.header('authorization');
    if (authHeader) {
        jwt.verify(authHeader, secret, (err, decoded) => {
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