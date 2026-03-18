const htttp = require("http");

const server = htttp.createServer((req, res) => {
  res.end("Hello Node");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
