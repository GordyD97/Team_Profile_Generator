class manager extends employee {
    constructor(Name, Id, Email, Role, officeNumber) {
        this.Name = Name;
        this.Email = Email;
        this.Id = Id;
        this.Role = Role;
        this.officeNumber= officeNumber;
    }
    
    getName() {
        
    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return 'Manager';
    }
    officeNumber(){
        return this.officeNumber;
    }
}