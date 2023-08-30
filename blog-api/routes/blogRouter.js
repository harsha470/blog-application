const express = require("express");
const jwt = require("jsonwebtoken")
const blogController = require("../src/blog/blogController");

const router = express.Router();
const hello = () =>{
  console.log("a single blog is called") ; 

}

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    const decodedToken = jwt.decode(token);
    
    req.token = token;
    req.user = decodedToken



    next();
  } else {
    res.send({
      result: "invalid token",
    });
  }
};

router.post("/", verifyToken, blogController.createBlogControllerFn);

router.get(
  "/:blogId",
  blogController.getASingleBlogControllerFn) ; 

router.get(
    "/",
    verifyToken,
    blogController.getBlogControllerFn
  );
module.exports = router;
