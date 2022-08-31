// const template = require("../lib/structure");

const wrapProfileCards = require("../lib/structure");



const generateEmployeePage = function (profileCards) {

const generateManager = function (manager) {
  return (
    `
    <div class="card col-md-4 p-0">
    <div class="card-header bg-primary text-white">
      <h3> ${manager.name} </h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <strong>ID:</strong> ${manager.Id}
        </li>
        <li class="list-group-item">          
          <strong>Email:</strong> <a href="mailto: ${manager.email}">${manager.email} </a>
        </li>
        <li class="list-group-item">
          <strong>Office Phone:</strong> ${manager.officeNumber}
        </li>
    </ul>
    </div>
  </div>
    `
  );
}

const generateEngineer = function (engineer) {
  return (
    `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-secondary text-white">
      <h3> ${engineer.name} </h3>
      <h4> ${engineer.role} </h4>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <strong>ID:</strong> ${engineer.id}
        </li>
        <li class="list-group-item">         
          <strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a>
        </li>
        <li class="list-group-item">          
          <strong>GitHub:</strong> <a href="http://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a>
        </li>
      </ul>
    </div>
  </div>
`
  );
}

const generateIntern = function (intern) {
  return (
    `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-info text-white">
      <h3> ${intern.name} </h3>
      <h4> ${intern.role} </h4>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">          
          <strong>ID:</strong> ${intern.id}
        </li>
        <li class="list-group-item">          
          <strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a>
        </li>
        <li class="list-group-item">          
          <strong>School:</strong> ${intern.School}
        </li>
      </ul>
    </div>
  </div>
`
  );
}


generateHtml = (data) => {
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    console.log(role)

    if (role === 'Manager') {
      const managerCard = generateManager(manager);

      pageArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = generateEngineer(engineer);

      pageArray.push(engineerCard);
    }
    if (role === 'Intern') {
      const internCard = generateIntern(intern);

      pageArray.push(internCard)
    }

  }
  const profileCards = pageArray.join('')

  const generateEmployees = generateEmployeePage(profileCards);
  return generateEmployees;
};



// const generateEmployees = generateEmployeePage(profileCards);
// return generateEmployees;


  return (
    `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    
    <!-- Header -->
    <header class="bg-dark text-light mb-5">
      <h1 class="text-center p-4">
        Team Profile Generator
      </h1>
    </header>
    <!-- Main container -->
    <main>
    <!-- Cards will generate here -->
      <div class="container">
        <div class="row justify-content-center" id="profilecards">    
        ${profileCards} 
        </div>
      </div>
    </main>
  </body>
  </html>
`
  );
};

module.exports = generateHtml;
module.exports = profileCards;
module.exports = wrapProfileCards;