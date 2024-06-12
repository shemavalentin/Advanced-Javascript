// How to emplement WEB API,
// In fact javascript runtime is not part of javascript, when a call back queue sees
// something that is asynchronous it calls the WEB API to take action.

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// it will output 1,3,2. the setTimeout is not is a Web API part then it will run asynchronously
// then came later in 1 second.
