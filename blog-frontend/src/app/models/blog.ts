export class Blog {
    id: string;
    title: string;
    desc: string;
    authorId: string ; 

    constructor(id: string, title: string, desc: string,authorId : string) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.authorId = authorId;}


}