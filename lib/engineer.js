const Engineer = require('../lib/employe');

class Employe {
    constructor(Name, Id, Email, Role) {
        this.Name = Name,
            this.Id = Id,
            this.Email = Email,
            this.Role = Role

    }
}

class Engineer extends Employee {
    constructor(Name, Id, Email, Role, github) {
        this.Name = Name;
        this.Email = Email;
        this.Id = Id;
        this.Role = Role;
        this.github = githuib;
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {

    }
    getgitHub(){

    }


}