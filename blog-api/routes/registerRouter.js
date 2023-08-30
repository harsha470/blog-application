const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController')  ;

router.post('/',userController.createUserControllerFn) ; 

module.exports = router ; 

