const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
    getGitHub(){
        return this.github;
    }


}
module.exports = Engineer;
// delete uncescessary roles above