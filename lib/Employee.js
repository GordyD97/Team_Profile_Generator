class Employee{
    constructor(email, id, name,){
    this.name = name;
    this.email = email;
    this.id = id;   
}

    getname() {
        return this.name;
    }
    getrole() {
        return 'Employee';
    }
    getemail() {
        return this.email;
    }
    getId(){
        return this.id;
    }
}

module.exports = Employee;