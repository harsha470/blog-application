export class Blog {
    _id: string;
    title: string;
    desc: string;
    authorId: string ; 

    constructor(_id: string, title: string, desc: string,authorId : string) {
        
        this._id = _id;
        this.title = title;
        this.desc = desc;
        this.authorId = authorId;}
}