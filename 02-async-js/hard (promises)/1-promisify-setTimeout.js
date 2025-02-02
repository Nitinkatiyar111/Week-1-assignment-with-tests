/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { reject } = require("assert");
const { resolve } = require("path");

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), n * 1000);
  });
}
wait(10)
  .then(() => console.log("Promise resolved"))
  .catch((err) => console.log(err));
