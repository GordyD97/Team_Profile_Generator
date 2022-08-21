// import inqurier and file
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


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
const team = [];
const canAddManager = true;

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

// initialize app
ask(addManager);

// run trough the questions if a memeber needs to be added
function ask(questionArr) {
    inquirer
        .prompt(questionArr)
        .then((member) => {
            team.push(member);

            if (member.upNext === 'Add Engineer') {
                ask(addEngineer);
            } else if (member.upNext === 'Add Intern') {
                ask(addIntern);
            } else {
                createProfiles(team);
            }
        })
        .catch((err) => console.log(err));
}


function createProfiles(team) {

    const profiles = team.map((member) => {
        const { name, id, email } = member;

        // asks for phone nnumber if its a manager role
        if (member.hasOwnProperty('officeNumber')) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        // ask for github if engineer
        if (member.hasOwnProperty('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        // ask for school if intern
        if (member.hasOwnProperty('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });

    generateHtml(profiles);
}

function generateHtml(profiles) {
    let profileCards = '';
    profiles.forEach((profile) => {
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
function writeHtml(newHtml) {
    fs.writeFile('./dist/index.html', newHtml, (err) => {
        if (err) /*throw err*/ console.log("madeithere");
        console.log('HTML document successfully created in the /dist folder.');
    });
};

