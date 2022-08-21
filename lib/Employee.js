class Employee {
    constructor(email, id, name, role) {

    this.name = name;
    this.email = email;
    this.id = id; 
}

    getName() {
        return this.name;
    }
    getRole() {
        return 'Employee';
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}

module.exports = Employee;