const internCard = (profile) => `
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
`;

module.exports = internCard;