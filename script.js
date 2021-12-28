const asyncFunct = () => {
  console.log("Asynchronous result");
};

console.log("Hi!");

// setTimeout is a built in JavaScript function that is asynchronous by default
setTimeout(asyncFunct, 5000);

console.log("Synchronous result.");
