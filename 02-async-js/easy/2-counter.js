let counter = 0;
function incrementCounter() {
  counter++;
  console.log(counter);
}

function startCounter() {
  incrementCounter();

  setTimeout(startCounter, 1000);
}

startCounter();
