const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');


const generateJwtToken = (payload) => {
  const secretKey = "harshavardhan";
  const token = jwt.sign(payload, secretKey, { expiresIn: "100000" });
  return token;
};

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};


module.exports = {generateJwtToken,hashPassword} ; 