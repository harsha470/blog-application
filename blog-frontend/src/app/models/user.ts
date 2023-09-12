export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string ; 
    password : string ; 

    constructor(_id: string, firstName: string, lastName: string,email : string,password : string) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password ; 
    }
}