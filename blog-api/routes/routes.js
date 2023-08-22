const express = require('express') ; 


const router = express.Router() ; 
const userController = require('../src/user/userController')  ; 

router.route('/register').post(userController.createUserControllerFn) ; 

router.route('/login').post(userController.findUserControllerFn) ; 

module.exports = router ; 


