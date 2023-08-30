const express = require('express') ; 
const userController = require('../src/user/userController')  ; 

const router = express.Router() ; 

router.post('/',  userController.findUserControllerFn)  ; 

module.exports = router ; 
