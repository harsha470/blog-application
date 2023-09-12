const jwt = require("jsonwebtoken");


 const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader === "undefined") {
        res.send({
          result: "invalid token",
        });
    } 
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    const decodedToken = jwt.decode(token);

    req.token = token;
    req.user = decodedToken;

    next();
  };
  
module.exports = {verifyToken} ;    