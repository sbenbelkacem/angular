export class Personne {
    id : Number;
    userName : String;
    pwd : String;
    isAuthentified : boolean;

    constructor (id : any, userName : any, pwd : any, isAuthentified : any){
        this.id = id;
        this.userName = userName;
        this.pwd = pwd;
        this.isAuthentified = isAuthentified;
    }
}