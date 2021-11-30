var url = require('url');
var fs = require('fs');
const express = require("express");
const main = express();
const path = require("path");
const bodyParser = require("body-parser");

function renderHTML(path, response) {
  fs.readFile(path, null, function(error, data) {
      if (error) {
          response.writeHead(404);
          response.write('File not found!');
      } else {
          response.write(data);
      }
      response.end();
  });
}

main.use(express.json());
main.use(bodyParser.urlencoded({ extended: false }));
main.get("/hello", (request, response) => {
  response.send("hello world");
});
main.get('/form', (request, response) => {
  renderHTML('./form.html', response);
});
main.post("/formdata", (request, response) => {
  response.send({
    username: request.body.username,
    password: request.body.password,
    email: request.body.email,
  });
});
main.post("/jsondata", (request, response) => {
  response.send(
    ` data json: \n username: ${request.body.username}  \n password: ${request.body.password} \n email: ${request.body.email}`
  );
});


const port = process.env.PORT || 8000;
main.listen(port);




