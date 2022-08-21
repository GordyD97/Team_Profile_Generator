const internCard = (profile) => `
  <div class="card col-md-4 p-0">
    <div class="card-header bg-info text-white">
      <h3> ${profile.getName} </h3>
      <h4> ${profile.getRole} </h4>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group">
        <li class="list-group-item">          
          <strong>ID:</strong> ${profile.getId}
        </li>
        <li class="list-group-item">          
          <strong>Email:</strong> <a href="mailto:${profile.getEmail}">${profile.getEmail}</a>
        </li>
        <li class="list-group-item">          
          <strong>School:</strong> ${profile.getSchool}
        </li>
      </ul>
    </div>
  </div>
`;

module.exports = internCard;