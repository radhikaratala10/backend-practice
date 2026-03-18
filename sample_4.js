const fs = require("fs");

fs.writeFile("data.txt", "Hello Radhika", (err) => {
  if (err) throw err;
  console.log("File created successfully");
});