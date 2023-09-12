const { param } = require("../../routes/blogRouter");
const blogModel = require("./blogModel");
const jwt = require("jsonwebtoken");

const createBlogControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const blogModelData = new blogModel();
    blogModelData.title = body.title;
    blogModelData.desc = body.desc;
    blogModelData.authorId = req.user.userId;
    await blogModelData.save();

    res.status(200).send({
      status: true,
      message: "blog created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

const getBlogControllerFn = async (req, res) => {
  try {
   

    let {userId} = req.query
    
    userId = userId ? userId.trim(): undefined
    const  filter = userId ? {  authorId:userId} : {}
    

    const userBlogs = await blogModel.find(filter);
    res.send({ count: userBlogs.length, userBlogs });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: error });
  }
};

const getUserBlogControllerFn = async (req, res) => {
  console.log("hello") ; 
  const userId = req.params.userId;
  try {
    const filter = { authorId: userId };
    const userBlogs = await blogModel.find(filter);
    res.send({ userBlogs });
    console.log("harsha") ; 
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: error });
    console.log("vardhan") ; 
  }
};

const getASingleBlogControllerFn = async (req, res) => {
  const blogId = req.params.blogId;
  console.log("hello2") ; 
  try {
    const singleBlog = await blogModel.findById(blogId);
    if (!singleBlog) {
      res.status(400).send({
        message: "No such blog",
      });
    } else {
      res.status(200).send(singleBlog);
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const updateBlogCollectionFn = async (req, res) => {
  const blogId = req.params.blogId;
  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(
      blogId,
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
        },
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }

    res.status(200).json({
      status: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

const deleteBlogControllerFn = async (req, res) => {
  const blogId = req.params.blogId;
  try {
    const deletedBlog = await blogModel.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ status: false, message: "Blog not found" });
    }

    res
      .status(200)
      .json({ status: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
module.exports = {
  createBlogControllerFn: createBlogControllerFn,
  getBlogControllerFn: getBlogControllerFn,
  getASingleBlogControllerFn: getASingleBlogControllerFn,
  updateBlogCollectionFn: updateBlogCollectionFn,
  deleteBlogControllerFn: deleteBlogControllerFn,
  getUserBlogControllerFn: getUserBlogControllerFn,
};
