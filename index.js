// import inqurier and file
const inquirer = require("inquirer");
const fs = require("fs");
// import profile = (profileCards);
// const path = require("path");
// const generateHtml = require('./src/template');


// import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import HTML templates
const addManagerCard = require('./src/manager-card');
const addEngineerCard = require('./src/engineer-card');
const addInternCard = require('./src/intern-card');
const wrapProfileCards = require('./lib/structure');

// declare empty Array
const teamArray = [];
const canAddManager = true;
const data = teamArray;

// add manager 
const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Ready to start generating team profiles?',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Enter manager name:'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Enter your employee ID?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:'
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'Enter office phone number:'
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Team is completed'],
        message: 'What next?',
    },
];

// add engineer
const addEngineer = [
    {
        name: 'name',
        type: 'input',
        message: "Enter Engineer's name:"
    },
    {
        name: 'id',
        type: 'input',
        message: "Enter Engineer's ID:"
    },
    {
        name: 'email',
        type: 'input',
        message: "Enter Engineer's email address:"
    },
    {
        name: 'github',
        type: 'input',
        message: "Enter Engineer's Github username:"
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Team is Completed'],
        message: 'What next?',
    },
];

// add intern
const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: "Enter intern's name?"
    },
    {
        name: 'id',
        type: 'input',
        message: "Enter intern's ID?"
    },
    {
        name: 'email',
        type: 'input',
        message: "Enter intern's email address:"
    },
    {
        name: 'school',
        type: 'input',
        message: "What school did they attend?"
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Team is Completed'],
        message: 'What would you like to do next?',
    },
];

 const select = (employeeData) => {
     let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
     let employee = '';

     if (role === 'Engineer') {
         employee = new Engineer(name, id, email, github);

         // console.log(employee);
     }
     else if (role === 'Intern') {
         employee = new Intern(name, id, email, school);
         // console.log(employee);
     }

     teamArray.push(employee);
     if (confirmAddEmployee) {
         return Employee(teamArray);
     } else {
         return teamArray;
     }
 };
// initialize app


// run trough the questions if a profile needs to be added
const ask = (questionArr) => {
    inquirer
        .prompt(questionArr)
        .then((profile) => {
            teamArray.push(profile);

            if (profile.upNext === 'Add Engineer') {
                ask(addEngineer);
            } else if (profile.upNext === 'Add Intern') {
                ask(addIntern);
            } else {
                createProfiles(profile);
            }
        })
        .catch((err) => console.log(err));
}

ask(addManager);

function createProfiles(profiles) {

    var profiles = ((profile) => {
        const { name, id, email } = profile;

        // asks for phone nnumber if its a manager role
        if (profile.hasOwnProperty('officeNumber')) {
            const { officeNumber } = profile;
            return new Manager(name, id, email, officeNumber);
        }

        // ask for github if engineer
        if (profile.hasOwnProperty('github')) {
            const { github } = profile;
            return new Engineer(name, id, email, github);
        }

        // ask for school if intern
        if (profile.hasOwnProperty('school')) {
            const { school } = profile;
            return new Intern(name, id, email, school);
        }
    });
    console.log(profiles);
    generateHtml(profiles);
}


function generateHtml(profiles) {
    let profileCards = data;
    console.log(profiles);
    teamArray.forEach((profile) => {
        if (profile instanceof Manager) {
            const card = addManagerCard(profile);
            profileCards += card;
        } else if (profile instanceof Engineer) {
            const card = addEngineerCard(profile);
            profileCards += card;
        } else if (profile instanceof Intern) {
            const card = addInternCard(profile);
            profileCards += card;
        }
    })

    const newHtml = wrapProfileCards(profileCards);

    writeHtml(newHtml);
};

// writes html to /dist/team-profile.html
const writeHtml = data => {
    console.log(data);
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) throw err;
        console.log('HTML document successfully created in the /dist folder.');
    });
};

