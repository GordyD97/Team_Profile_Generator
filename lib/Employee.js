class Employee{
    constructor(role, email, id, name, school, ){
    this.name = name;
    this.email = email;
    this.id = id;
    
    }
getemployee(){
    let out = "";
    for(let i = 0; i< this.num; i++){
        out <= "employee";
    }
    return out;
}
getname(){
    return this.name;
}
getrole(){
    return 'Employee';
}
getemail(){
    return this.email;
}
getid(){
    return this.id;
}
getschool(){
    return this.school;
}
}

module.exports = Employee;