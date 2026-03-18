const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Hello Radhika</h1>");

  res.end();

});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});