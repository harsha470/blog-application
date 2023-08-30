export class Blog {
    _id: string;
    title: string;
    desc: string;
    authorId: string ; 

    constructor(_id: string, title: string, desc: string,authorId : string) {
        console.log("I am calling:", _id);
        
        this._id = _id;
        this.title = title;
        this.desc = desc;
        this.authorId = authorId;}
}