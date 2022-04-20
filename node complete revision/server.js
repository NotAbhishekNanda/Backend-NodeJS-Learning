const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Pseudo selectors & more designing</title>
      <style>
          .container{
              border: 2px solid red;
              background-color: rgb(223, 245, 201);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
          a{
              text-decoration: none;
              color: black;
          }
          a:hover{
              color: rgb(5, 0, 0);
              background-color: rgb(221, 166, 38);
          }
          a:visited{
              background-color: yellow;
          }
          a:active{
              background-color:darkblue;
          }
          .btn{
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: bold;
              background-color: crimson;
              padding:6px;
              border: none;
              cursor:pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              color:darkgoldenrod;
              background-color:rgb(223, 245, 201);
              border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>2022 is right around the corner. So let us now wait for LinkedIn or other HR platforms to tell you what prospective employers are looking for. Here is an insider web developer skills checklist for 2022. Some items we have listed are good for all times. Others really have to do with tech industry trends. The analysis is based on research and experience of Flux Technologies own developers. Check it out:</p>
          <a href="https://yahoo.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
