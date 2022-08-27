const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3001;

const data = "This is a file containing a collection"
           + " of programming languages.\n"
 + "1. C\n2. C++\n3. Python";
  
fs.writeFileSync("programming.txt", data);

console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));

app.get("/", (req, res) => {
  const out = fs.readFileSync("programming.txt", "utf8");
  res.status(200).send(out);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
