class user{
    firstname: string;
    lastname: string;
    constructor(fname: string, lname: string){
        this.firstname = fname;
        this.lastname = lname;
    }
    getFullName(): string{
        return this.firstname + ' ' + this.lastname;
    }
}