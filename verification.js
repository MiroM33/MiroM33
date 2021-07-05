//Fromat: authorization: Bearer <Token>

/**
 * 
 * @param {*} req Request Objekt 
 * @param {*} res Response Objekt
 * @param {*} next Middleware next von Express -> https://expressjs.com/de/guide/writing-middleware.html
 */

function verifyToken(req, res, next){

    //Schaue dir den Header an und suche nach dem auth Velue:
    
    const bearerHeader = req.headers['authorization'];
    
    if(typeof bearerHeader !=='undefined'){
    
    //Split
    const Bearer = bearerHeader.split(' ');
    
    //GET Token
    const BearerToken = Bearer[1];
    
    //SET Token: 
    req.token = BearerToken;
    
    //next Middleware:
    next();
    
    }else {
    //Nicht erlaubt!
    res.sendStatus(403)
    }

} 

module.exports = {
   verifyToken
}