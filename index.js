// import inqurier and file
const inquirer = require("inquirer");
const fs = require("fs");

const renderHtml = require('./src/template');


// import classes
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');




// declare empty Array
const teamArray = [];


// add manager 
const addManager = [
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

];

const menuQuestion = {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Team is completed'],
    message: 'What next?',
}

// add engineer
const engineerPrompt = [
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
    }
];

// add intern
const internPrompt = [
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
    }
];

start()
function start(){
    inquirer.prompt(addManager).then((answers)=>{
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(manager)
        menu()
      
    })
}

function addEngineer() {
    inquirer.prompt(engineerPrompt).then((answers)=>{
        const engineer = new Engineer(answers.name, answers.id, answers.email,answers.github)
        teamArray.push(engineer)
        menu()

    }) 
}

function addIntern() {
    inquirer.prompt(internPrompt).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArray.push(intern)
        menu()

    })
}


function menu(){
    inquirer.prompt(menuQuestion).then(answer=>{
        if (answer.upNext === 'Add Engineer') {
                addEngineer()
            } else if (answer.upNext === 'Add Intern') {
                addIntern()
            } else {
                writeHtml()
            }
    })
}




// writes html to /dist/team-profile.html
const writeHtml = () => {
    fs.writeFile('./dist/index.html', renderHtml(teamArray), (err) => {
        if (err) throw err;
        console.log('HTML document successfully created in the /dist folder.');
    });
};

