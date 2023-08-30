const { param } = require('../../routes/blogRouter');
const blogModel  = require('./blogModel') ;
const jwt = require('jsonwebtoken')

const createBlogControllerFn = async(req,res) =>{
    try{
        const body = req.body ; 
        const blogModelData = new blogModel() ; 
        blogModelData.title = body.title; 
        blogModelData.desc = body.desc;
        blogModelData.authorId = req.user.userId
        await blogModelData.save() ; 

        res.status(200).send({
            "status":true, "message" : "blog created successfully"
        })
    }
    catch(error){
        console.log(error) ; 
    }
}
 

const getBlogControllerFn = async(req,res) =>{

    const {all: allBlogs}=req.query
    console.log(allBlogs)  ; 
    const userId = req.user.userId;

    try {
        const filter = allBlogs =="true" ? {}: {authorId: userId} 
    const userBlogs = await blogModel.find(filter);
        console.log(userBlogs[0]) ; 
        res.send({count:userBlogs.length, userBlogs})
    } catch (error) {
             console.log("Error:", error);
        res.status(500).json({"message" : error})
    }
}

const getASingleBlogControllerFn = async(req,res) =>{

    const blogId = req.params.blogId ; 
    console.log(blogId)  ; 
    try {
    const singleBlog = await blogModel.findById(blogId);
        if(!singleBlog) {
            res.status(400).send({
                "message" : "No such blog" 
            }) 
        }
        res.send(singleBlog) ; 
    } catch (error) {
             console.log("Error:", error);
        res.status(500).json({"message" : error}); 
    }
}

module.exports = {
    createBlogControllerFn : createBlogControllerFn ,
    getBlogControllerFn : getBlogControllerFn,
    getASingleBlogControllerFn : getASingleBlogControllerFn, 
}