const Engineer = require("../lib/Engineer");

const engineerCard = (profile) => `
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
          <strong>GitHub:</strong> <a href="http://www.github.com/${engineer.github}" target="_blank">${profile.getGitHub()}</a>
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = engineerCard;
