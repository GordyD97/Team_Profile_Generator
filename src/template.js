// module.exports = function(title, data) {
// return(
//     `
//     <h1>${title}</h1>
//     <main>${data}</main>
//     `
//     );
// };


const template = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
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
      <div class="container">
        <div class="row">   
          ${cards}       
        </div>
      </div>
    </main>
  </body>
  </html>
`;

module.exports = template;