const express = require("express");
const jwt = require("jsonwebtoken");
const blogController = require("../src/blog/blogController");
const { verifyToken } = require("../middleware/auth");


const router = express.Router();
const hello = () => {
  console.log("a single blog is called");
};

router.post("/", verifyToken, blogController.createBlogControllerFn);

// router.get("/:userId", blogController.getUserBlogControllerFn);

router.get("/:blogId", blogController.getASingleBlogControllerFn);
router.put("/:blogId", blogController.updateBlogCollectionFn);

router.delete("/:blogId",blogController.deleteBlogControllerFn) ; 


router.get("/", blogController.getBlogControllerFn) ; 
module.exports = router;
