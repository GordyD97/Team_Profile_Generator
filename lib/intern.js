class Employe{
    constructor(Name, Id, Email, Role){
    this.Name = Name,
    this.Id = Id,
    this.Email = Email,
    this.Role = Role

    }
}


class Intern extends Employe{
    constructor(Name, Id, Email, Role) {
        super(Name, Id, Email, Role)
        this.Name = Name,
        this.Id = Id,
        this.Email = Email,
        this.Role = Role,
        this.School = School
    }
    getName() {
        return this.Name;
    }
    getId() {
        return this.Id;
    }
    getEmail() {
        return this.Email;
    }
    getSchool() {
        return this.School;
    }
    getRole() {
        return this.Role;
    }
}

class Engineer extends Employe {
    constructor(Name, Id, Email, Role) {
        super(Name, Id, Email, Role)
        this.Name = Name,
            this.Id = Id,
            this.Email = Email,
            this.Role = Role,
            this.github = github
            
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getgithub() {

    }
    getRole() {

    }
}

class Manager extends Employe {
    constructor(Name, Id, Email, Role) {
        super(Name, Id, Email, Role)
        this.Name = Name,
            this.Id = Id,
            this.Email = Email,
            this.Role = Role,
            this.officenumber = officeNumber

    }
    getName() {

    }
    getId() { 

    }
    getEmail() {

    }
    getofficeNumber() {

    }
    getRole() {

    }
}