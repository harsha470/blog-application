const express = require('express') ; 
const userController = require('../src/user/userController')  ; 
const router = express.Router() ; 


router.get("/:userId", userController.getUserControllerFn);

router.put("/:userId", userController.updateUserControllerFn); 

module.exports = router ; 