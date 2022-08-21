const Manager = require("../lib/Manager");

const managerCard = (profile) => `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-primary text-white">
      <h3> ${Manager.name} </h3>
      <h4> ${Manager.role} </h4>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <strong>ID:</strong> ${Manager.id}
        </li>
        <li class="list-group-item">          
          <strong>Email:</strong> <a href="mailto: ${Manager.email}">${Manager.email} </a>
        </li>
        <li class="list-group-item">
          <strong>Office Phone:</strong> ${Manager.officeNumber}
        </li>
    </ul>
    </div>
  </div>
`;

module.exports = managerCard;