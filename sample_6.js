const fs = require("fs");

fs.readFile("index.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

 // Delete the file
  fs.unlink("data.txt", (err) => {
    if (err) throw err;
    console.log("File deleted successfully");
  });

