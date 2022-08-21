const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
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



module.exports = Intern;


// delete unecessary code lines uptop......