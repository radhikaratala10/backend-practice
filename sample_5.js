const fs = require("fs");

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello Radhika</h1>
  <p>This HTML file was created using Node fs module</p>
</body>
</html>
`;

fs.writeFile("datafile.html", htmlContent, (err) => {
  if (err) throw err;
  console.log("HTML file created successfully");
});