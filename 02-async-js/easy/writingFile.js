const fs = require("fs");
const path = require("path");

const data = "I dont care!!";

const filePath = path.join(__dirname, "read.txt");

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error("Error reading file: ", err);
    return;
  } else {
    console.log("file write successfully!!");
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
