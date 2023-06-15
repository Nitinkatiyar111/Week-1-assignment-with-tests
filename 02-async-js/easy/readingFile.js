const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "read.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  } else {
    console.log(data);
  }
});

const expensiveOperation = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum = sum + i;
  }
  console.log("Expensive operation\n");
};

expensiveOperation();
