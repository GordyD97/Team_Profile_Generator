

function generateTeam(teamArray) {



  const generateManager = function (manager) {
    return (
      `
      <div class="card col-md-4 p-0">
      <div class="card-header bg-primary text-white">
        <h3> ${manager.getName()} </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">
            <strong>ID:</strong> ${manager.getId()}
          </li>
          <li class="list-group-item">          
            <strong>Email:</strong> <a href="mailto: ${manager.getEmail()}">${manager.getEmail()} </a>
          </li>
          <li class="list-group-item">
            <strong>Office Phone:</strong> ${manager.getOffice()}
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
        <h3> ${engineer.getName()} </h3>
        <h4> ${engineer.getRole()} </h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group">
          <li class="list-group-item">
            <strong>ID:</strong> ${engineer.getId()}
          </li>
          <li class="list-group-item">         
            <strong>Email:</strong> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
          </li>
          <li class="list-group-item">          
            <strong>GitHub:</strong> <a href="http://www.github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a>
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
        <h3> ${intern.getName()} </h3>
        <h4> ${intern.getRole()} </h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group">
          <li class="list-group-item">          
            <strong>ID:</strong> ${intern.getId()}
          </li>
          <li class="list-group-item">          
            <strong>Email:</strong> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">          
            <strong>School:</strong> ${intern.getSchool()}
          </li>
        </ul>
      </div>
    </div>
  `
    );
  }

  console.log(teamArray);

  const pageArray = [];
  pageArray.push(teamArray.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)))

  pageArray.push(teamArray.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)))
  pageArray.push(teamArray.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)))

  return pageArray.join('');


}

// const generateEmployees = generateEmployeePage(profileCards);
// return generateEmployees;

module.exports = (team) => {

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
        ${generateTeam(team)} 
        </div>
      </div>
    </main>
  </body>
  </html>
`
  );
}





