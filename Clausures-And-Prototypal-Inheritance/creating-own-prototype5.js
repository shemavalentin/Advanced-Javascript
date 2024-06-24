/* Let's create our own prototype. Remember that creating prototypes using 
__proto__ is not safe to use. so we need a secure way to create our own.*/

// let's create an object

let human = {
  mortal: true,
};

// let's inherte from human object by using Object.create()
let socrates = Object.create(human);
// console.log(socrates);  // ans: {}  empty object

// let's add properties
socrates.age = 42;
console.log(socrates); // ans: {age:42}
console.log(socrates.mortal); // ans: true
console.log(human.isPrototypeOf(socrates)); // ans: true
