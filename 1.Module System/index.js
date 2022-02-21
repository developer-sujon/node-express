const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, "http://localhost:4000/");

  console.log(myURL.searchParams.get('hello'));
  console.log(req.url);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>amar sonar bangladesh ami tmai valobashi</h1>");
});

server.listen(4000);