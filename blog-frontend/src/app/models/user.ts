export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string ; 
    password : string ; 

    constructor(_id: string, firstName: string, lastName: string,email : string,password : string) {
        console.log("I am calling:", _id);
        
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password ; 
    }
}