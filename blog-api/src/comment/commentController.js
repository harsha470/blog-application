const commentModel = require('./commentModel');
const jwt = require('jsonwebtoken');

const addCommentControllerFn = async (req, res) => {
  try {
    console.log("harsha") ; 
    const body = req.body;
    const commentModelData = new commentModel();
    commentModelData.commentText = body.commentText;
    commentModelData.blogId = req.params.blogId; 
    commentModelData.userId = req.user.userId; 
    commentModelData.userName = req.user.firstName ; 
    // commentModelData.commentDate = body.commentDate; 
  const insertedComment =  await commentModelData.save();

    res.status(201).send( insertedComment
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCommentControllerFn = async (req, res) => {
  const blog = req.params.blogId;
  try {

    const comments = await commentModel.find({ blogId: blog }).sort({commentDate: -1})
    
    console.log(comments) ; 
    // .populate('userId', 'firstName');
    console.log(comments.length) ; 
    res.status(200).send(comments);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateCommentControllerFn = async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const updatedComment = await commentModel.findByIdAndUpdate(
      commentId,
      {
        $set: {
          comment_text: req.body.comment_text,
        },
      },
      { new: true }
    );

    if (!updatedComment) {
      return res.status(404).json({ status: false, message: 'Comment not found' });
    }

    res.status(200).json({ status: true, message: 'Comment updated successfully', comment: updatedComment });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
};

const deleteCommentControllerFn = async (req, res) => {
  const commentId = req.params.commentId;
  try {
    const deletedComment = await commentModel.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ status: false, message: 'Comment not found' });
    }

    res.status(200).json({ status: true, message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ status: false, message: 'Internal server error' });
  }
};

module.exports = {
  addCommentControllerFn: addCommentControllerFn,
  getCommentControllerFn: getCommentControllerFn,
  updateCommentControllerFn: updateCommentControllerFn,
  deleteCommentControllerFn: deleteCommentControllerFn,
};
