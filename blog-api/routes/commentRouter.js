const express = require('express') ; 
const commentController = require('../src/comment/commentController')  ; 
const { verifyToken } = require('../middleware/auth');
const router = express.Router() ; 


router.get("/:blogId", verifyToken, commentController.getCommentControllerFn);

router.post("/:blogId",verifyToken , commentController.addCommentControllerFn) ; 
// router.put("/:commentId", commentController.updatecommentControllerFn); 

module.exports = router ; 