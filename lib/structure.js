module.exports = function (title, data) {
    return (
        `
   <h1>${title}</h1>
   <main>${data}</main>*/
   `
    );
};





const template = (cards) => `
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
      <div class="container">
        <div class="row">
        
      </div>
    </main>
  </body>
  </html>
`;

module.exports = template;