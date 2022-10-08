const Engineer = require("../lib/Engineer");

const engineerCard = (profile) => `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-secondary text-white">
      <h3> ${engineer.getName} </h3>
      <h4> ${engineer.getRole} </h4>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">
          <strong>ID:</strong> ${engineer.getid}
        </li>
        <li class="list-group-item">         
          <strong>Email:</strong> <a href="mailto:${engineer.getemail}">${engineer.getemail}</a>
        </li>
        <li class="list-group-item">          
          <strong>GitHub:</strong> <a href="http://www.github.com/${engineer.getgithub}" target="_blank">${profile.getGitHub()}</a>
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = engineerCard;
