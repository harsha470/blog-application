export interface  Comment {
    _id: string;
    blogId: string;
    userId :string ; 
    userName: string;
    commentText: string ; 
    commentDate : string ; 

    // constructor(_id: string, blogId: string,userId : string, userName: string,commentText : string,commentDate : Date) {
    //     this._id = _id;
    //     this.blogId = blogId;
    //     this.userId = userId ; 
    //     this.userName = userName;
    //     this.commentText = commentText;
    //     this.commentDate = commentDate ; 
    // }
}   