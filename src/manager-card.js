const managerCard = (profile) => `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-primary text-white">
      <h3> ${profile.getName()} </h3>
      <h4> ${profile.getRole()} </h4>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">
          <strong>ID:</strong> ${profile.getId()}
        </li>
        <li class="list-group-item">          
          <strong>Email:</strong> <a href="mailto: ${profile.getEmail()}">${profile.getEmail()} </a>
        </li>
        <li class="list-group-item">
          <strong>Office Phone:</strong> ${profile.getOffice()}
        </li>
    </ul>
    </div>
  </div>
`;

module.exports = managerCard;